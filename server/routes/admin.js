var express = require('express');
var router = express.Router();

var passport = require('passport');

var Product = require('../models/product');
var Order = require('../models/order');

router.post('/load', passport.authenticate('jwt', { session: false}), function(req, res){
    Product.find({
        pending: true
    })
        .then( product => {
            res.json(product);
        })
        .catch( err => {
            res.json({
                status: 'No pending'
            });
        })
})


router.post('/confirm', passport.authenticate('jwt', { session: false}), function(req, res){
    Product.findOne({
        _id: req.body.productID
    })
        .then( product => {
            product.pending = false;

            product.save();
            res.json({
                status: 'Successfully Confirm'
            })
        })
        .catch( err => {
            res.json({
                status: 'not found product'
            })
        })
})


module.exports = router;