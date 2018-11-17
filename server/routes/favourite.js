const express = require('express');
const router = express.Router();
const multer = require('multer');

const passport = require('passport');

const User = require('../models/user');
const Product = require('../models/product');

// Add product to favourite list


router.post('/add_favourite', passport.authenticate('jwt', { session: false}), function(req, res){
    
    // Find logged in user email
    User.findOne({
        email: req.user.email
    })
        // Get user
        .then( user => {
            if(user){

                let i = user.favourite.length;
                let found = false;

                // Find if it have already been in favourite 
                while(i--){
                    if(user.favourite[i].productID == req.body.productID){
                        found = true;
                        break;
                    }
                }

                if(found) {  // Already in then...
                    res.json({
                        status: 'This item have already been your favourite'
                    })

                } else {     // Not in favourite then...
                    Product.findOne({
                        _id: req.body.productID
                    })
                        // Get product
                        .then( product => {

                            // Push Product into user's favourite list
                            user.favourite.push({
                                productID: product._id,

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

                                amount: req.body.amount,

                                pending: product.pending,

                                productImage: product.productImage
                            })

                            user.save();

                            res.json({
                                status: 'Added to Favourite'
                            })

                
                        })
                        // Error
                        .catch( err => {
                            res.json({
                                status: 'Error: Cannot find the product'
                            })
                        })
                }

            } else{
                res.json({
                    status: 'You have to log in first'
                })
            }
        })
        // Error
        .catch( err => {
            res.json({
                status: 'Error: Cannot find the user'
            })
        })
})


// Remove product from favourite list
router.post('/remove_favourite', passport.authenticate('jwt', { session: false}), function(req, res){
    
    // Find logged in user
    User.findOne({
        email: req.user.email
    })
        // Get User
        .then( user => {
            if(user){
                console.log(req.body.productID);
                
                // Find in favourite list
                let i = user.favourite.length;
                let item;
                let found = false;

                while(i--){
                    if(user.favourite[i].productID == req.body.productID){
                        item = user.favourite[i];
                        found = true;
                        break;
                    }
                }

                if(found){
                    item.remove();
                    user.save();
                    res.json({
                        status: 'Successfully Remove Favourite'
                    })
                } else {
                    res.json({
                        status: 'None to remove'
                    })
                }

            } else {
                res.json({
                    status: 'You have to log in first'
                })
            }
        })

        // Error 
        .catch( err => {
            res.json({
                status: 'Error: Cannot find the user'
            })
        })
})



module.exports = router;