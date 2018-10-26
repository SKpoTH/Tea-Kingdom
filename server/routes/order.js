var express = require('express');
var router = express.Router();

var Product = require('../models/product');
var Order = require('../models/order');

//Load doc of Order page
router.post('/load', function(req, res){
    var user_email = req.body.email;
    Order.findOne({ 
        email: user_email,
        status: 'Ordering' 
    }, 
        (err, orders) => {
            res.json(orders);
    })
})

//Remove Current Order
router.post('/remove_order', function(req, res){
    var user_email = req.body.email;
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
router.post('/remove_product_from_order', function(req, res){
    var user_email = req.body.email;

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