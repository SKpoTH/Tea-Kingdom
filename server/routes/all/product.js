const express = require('express');
const router = express.Router();
//const passport = require('passport');

const Product = require('../../models/product');

// Load a product Data
router.post('/load/one', function(req, res){
    // Find Product from prodcutID
    Product.findOne({ 
        _id: req.body.productID 
    })
        .then( product => {
            // Response If Success
            res.json({
                data: product,
                status: "Successfully Loaded a Product"
            });
        })
        .catch( err => {
            // Response If Error
            res.json({
                status : "Error "+err+" : Can't find product"
            })
        })
})

// Load all product that ready to sell
router.get('/load/all', function(req, res){
    // Find all pending products
    Product.find({
        pending: true
    })
        .then( products => {
            // Response If Success
            res.json({
                data: products,
                status: "Successfully Loaded Pending Products"
            })
        })
        .catch( err => {
            // Response If Error
            res.json({
                status : "Error "+err+" : Can't find products"
            })
        })
})

module.exports = router;
