var express = require('express');
var router = express.Router();

var Product = require('../models/product');
var Order = require('../models/order');


router.post('/add', function(req, res){
    var user_email = req.body.email;
    Order.findOne({ 
        email: user_email,
        status: 'Ordering' 
    })
        .then(order => {
            if(order){
                //if there is pending order
                Product.findOne({
                    _id: req.body.productID
                })
                    .then( product => {
                        //push new product to the pending order
                        order.product.push({
                            productID: product._id,
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
                        })
                        order.save()
                        res.json({
                            status: 'Successfully Add Order'
                        })
                    })
            } else{
                //if no pending order
                Product.findOne({
                    _id: req.body.productID
                })
                    .then( product => {
                        //create new order with add first product
                        var newOrder = new Order({
                            email: user_email,
                            product: [{
                                productID: product._id,
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
                            }],
                            date: Date.now(),
                            status: 'Ordering'
                        })
                        newOrder.save()
                            .then( user => {
                                res.json({
                                    status: 'Successfully Add Order'
                                })
                            })
                    })
            }
        })
})


module.exports = router;