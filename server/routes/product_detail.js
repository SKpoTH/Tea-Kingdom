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
                company: product.company,
                type: product.type,

                email: product.email,

                discount: product.discount,
                price: product.price,
                discountPrice: product.discountPrice,

                weight: product.weight,
                region: product.region,
                description: product.description,
                process: product.process,
                score: product.score,

                amount: product.amount,

                pending: product.pending,
                
                productImage: product.productImage
            }
            //console.log(item);
            res.json(item);
        }).catch(err => res.json({status : 'notfound'}));
})


router.post('/review', function(req, res){

    Review.find( { productID: req.body.productID }, (err, reviews) => {
        res.json(reviews);
    })

})

module.exports = router;