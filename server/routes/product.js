var express = require('express');
var router = express.Router();

var Product = require('../models/product');

router.post('/load', function(req, res){
    Product.find({
        pending: true
    }, (err, product) => {
        res.json(product);
    });
})

// Get only one product Information
router.post('/stock', function(req, res){
    Product.findOne({
        _id: req.body.productID
    })
    .then( product => {
        if(product){
            res.json({
                data: product,
                status: 'Successfully Get Data'
            })
        } else{
            res.json({
                status: 'No searching product',
            })
        }
    })
    .catch( err => {
        res.json({
            status: 'Error: Cannnot load product information'
        })
    })
})

router.post('/loadAll', function(req, res){
    Product.find((err, product) => {
        res.json(product);
    });
})

router.post('/update', function(req, res){
    Product.findById(req.body.id)
    .then(item => {
        item[req.body.field] = req.body.data;
        item.save();
        // console.log(item);
        res.json({status : "updated"});
    })
})

module.exports = router;