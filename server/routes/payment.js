const express = require('express');
const router = express.Router();

const passport = require('passport');

const Product = require('../models/product');
const Order = require('../models/order');
const Tracking = require('../models/tracking');

// Fill the Creadit Card
router.post('/credit_card', passport.authenticate('jwt', { session: false}), function(req, res){
    console.log('=====Credit Card=====');
    
    let credit = {
        status: 'Send to Validate Credit Card',
        cardID: req.body.id,
        exp: req.body.exp,
        cvv: req.body.cvv
    }

    console.log(credit);

    // Send to Credit card system
    let callBack = 'Accepted';
    // callBack would have 3 status
    // : 'Accepted', 'Invalid', 'Not Enough Money'


    if(callBack == 'Accepted'){
    // Valid Credit Card
        res.json({
            status: 'Accepted'
        });

    } else{
    // Invalid Credit Card
        res.json({
            status: 'Invalid Creadit Card'
        });
    }

})

// Confirm to pay for products
router.get('/pay_confirm', passport.authenticate('jwt', { session: false}), function(req, res){
    var user_email = req.user.email;
    Order.findOne({
        email: user_email,
        status: 'Ordering'
    })
        .then( order => {
            let i = order.product.length;
            let object;

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

            // Start Tracking
            let track = new Tracking({
                email: user_email,
                orderID: order._id,
                location: req.user.address,
                date: Date.now(),
                status: 'Get Order from Customer'
            })
            track.save();

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
