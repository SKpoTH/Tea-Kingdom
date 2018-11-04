var express = require('express');
var router = express.Router();

var passport = require('passport');

var Product = require('../models/product');
var Order = require('../models/order');

//Load doc of Order page
router.post('/load', passport.authenticate('jwt', { session: false}), function(req, res){
    var user_email = req.user.email;
    Order.findOne({ 
        email: user_email,
        status: 'Ordering' 
    }, 
        (err, orders) => {
            if(orders){
                orders.status = 'Found Order';
                res.json(orders);
            }
            else{
                res.json({
                    status: 'No Ordering'
                });
            }
    })
})

//
router.post('/update', passport.authenticate('jwt', { session: false}), function(req, res){
    var user_email = req.user.email;
    
    Order.findOne({
        email: user_email,
        status: 'Ordering'
    })
        .then( order => {
            if(order){

                var i = order.product.length;

                while(i--){
                    if(order.product[i].productID == req.body.productID){
                        order.product[i].amount = req.body.amount;
                    }
                }

                order.save()
                .then( order => {
                    res.json({
                        status: 'Successfully Update'
                    })
                })

            } else{
                res.json({
                    status: 'Not found Ordering'
                })
            }
        })
})

//Remove Current Order
router.post('/remove_order', passport.authenticate('jwt', { session: false}), function(req, res){
    var user_email = req.user.email;
    Order.findOneAndRemove({
        email: user_email,
        status: 'Ordering'
    })
        .then(order => {
            res.json({
                status: 'Successfully Remove Order'
            })
        })
})

//Remove Product from current order
router.post('/remove_product_from_order', passport.authenticate('jwt', { session: false}), function(req, res){
    var user_email = req.user.email;

    Order.findOne({
        email: user_email,
        status: 'Ordering'
    })
        .then( order => {
            order.product.id(req.body.productID).remove();
            order.save()
                .then( order => {
                    res.json({
                        status: 'Successfully Remove Product'
                    })
                })
        })
})




module.exports = router;