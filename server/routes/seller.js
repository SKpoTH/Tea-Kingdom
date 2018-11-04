var express = require('express');
var router = express.Router();

var passport = require('passport');

var Product = require('../models/product');
var Order = require('../models/order');

//Load doc of Prodcut of seller page
router.get('/load', passport.authenticate('jwt', { session: false}), function(req, res){
    var user_email = req.user.email;
    Product.find({ 
        email: user_email, 
    }, 
        (err, products) => {
            if(products){
                products.status = 'Found';
                res.json(products);
            }
            else{
                res.json({
                    status: 'Not Found'
                });
            }
    })
})

module.exports = router;