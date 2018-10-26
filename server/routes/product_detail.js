var express = require('express');
var router = express.Router();

var Product = require('../models/product');
var Review = require('../models/review');

router.post('/load', function(req, res){
    
    Product.findOne({ _id: req.body.productID })
        .then( product => {
            var item = {
                status: 'found',
                _id: product._id,
                name: product.name,
                brand: product.brand,
                type: product.type,
                discountPrice: product.discountPrice,
                price: product.price,
                weight: product.weight,
                region: product.region,
                description: product.description,
                review: product.review,
                score: product.score,
                process: product.process,
                amount: product.amount,
                pending: product.pending,
                productImage: product.productImage
            }
            //console.log(item);
            res.json(item);
        })
})


router.post('/review', function(req, res){

    Review.find( { productID: req.body.productID }, (err, reviews) => {
        res.json(reviews);
    })

})

module.exports = router;