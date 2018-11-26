const express = require('express');
const router = express.Router();
//const multer = require('multer');

const passport = require('passport');

const Product = require('../../models/product');

// Load all products for addmin
router.get('/load/all', passport.authenticate('jwt', { session: false }), function(req, res) {
    // If the user is "Admin"
    if(req.user.type === "Admin") {
        // Find all Product
        Product.find({})
        .then( products => {
            // Response If Success
            res.json({
                data: products,
                status: "Successfully Loaded Products"
            })
        })
        .catch( err => {
            // Response If Error
            res.json({
                status : "Error "+err+" : Can't find products"
            })
        })
    // If not
    } else {
        // Response If isn't "Admin"
        res.json({
            status: "You don't have permission"
        })
    }
})

// Confirm the product by Admin
router.post('/confirm', passport.authenticate('jwt', { session: false }), function(req, res){
    // Find the product that will be confirmed
    Product.findOne({
        _id: req.body.productID
    })
        .then( product => {
            // Confirmed Prodcut
            product.pending = false;
            product.save();
            res.json({
                // Response If Success
                status: 'Successfully Confirmed Product'
            })
        })
        .catch( err => {
            // Response If Error
            res.json({
                status : "Error "+err+" : Can't find products"
            })
        })
})

// Update a Product
router.post('/update', function(req, res){
    Product.findById(req.body.id)
        .then( item => {
            item[req.body.field] = req.body.data;
            item.save();
            // Response If Success
            res.json({
                status : "Successfully Updated Product"
            });
        })
        .catch( err => {
            // Response If Error
            res.json({
                status : "Error "+err+" : Can't find products"
            })
        })
})
module.exports = router;