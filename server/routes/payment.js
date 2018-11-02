const express = require('express');
const router = express.Router();

const Product = require('../models/product');
const Order = require('../models/order');

router.post('/pay_confirm', function(req, res){
    var user_email = req.body.email;
    Order.findOne({
        email: user_email,
        status: 'Ordering'
    })
        .then( order => {
            var i = order.product.length;
            var object;

            //console.log(order.product.length);
            
            while(i--){
                object = order.product[i];
                Product.findOne({
                    _id: object.productID
                })
                    .then( item => {
                        item.amount -= object.amount;
                        item.save();
                    })
            }

            order.status = 'Paid';
            
            order.save();

            res.json({
                status: 'Successfully Paid'
            });
        })
        .catch( err => {
            res.json({
                status: 'No Order'
            })
        })
})

module.exports = router;
