const User = require('../../models/user');
const Product = require('../../models/product');

module.exports.add = function(req, res){
    // Find logged in user email
    User.findOne({
        email: req.user.email
    })
        .then( user => {
            // User exist
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
                // Already in list then...
                if(found) {
                    res.json({
                        status: 'Already in your Favourite list'
                    })
                // Not in favourite then...    
                } else { 
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

                            user.save()
                                .then( obj => {
                                    // Response if Success
                                    res.json({
                                        status: "Successfully Added to Favourite"
                                    })
                                })
                                .catch( err => {
                                    // Response if Error
                                    res.json({
                                        status: "Error "+err+" : Can't update favourite"
                                    })
                                })
                        })
                        .catch( err => {
                            // Response if Error
                            res.json({
                                status: "Error "+err+" : Can't find product"
                            })
                        })
                }
            // If user have not logged in
            } else {
                // Response if not Logged in
                res.json({
                    status: "The User doesn't exist"
                })
            }
        })
        .catch( err => {
            // Response if Error
            res.json({
                status: "Error "+err+" : You have to Log in first"
            })
        })
}

module.exports.removeOne = function(req, res){
    // Find logged in user
    User.findOne({
        email: req.user.email
    })
        .then( user => {
            // User exist
            if(user){
                // Find in favourite list
                let i = user.favourite.length;
                let item;
                let found = false;
                // Find until getting object or end of the list
                while(i--){
                    if(user.favourite[i].productID == req.body.productID){
                        item = user.favourite[i];
                        found = true;
                        break;
                    }
                }
                // Found the favourite one, then...
                if(found){
                    // Remove from favourite list
                    item.remove();
                    user.save();

                    // Response if Success (Found)
                    res.json({
                        status: "Successfully Removed from Favourite"
                    })
                // Not found the favourite one, then...
                } else {

                    // Response if Success (Not Found)
                    res.json({
                        status: "Nothing to Remove"
                    })
                }
            // User not exist
            } else {
                // Response if not Logged in
                res.json({
                    status: "The User doesn't exist"
                })
            }
        })
        .catch( err => {
            // Response if Error
            res.json({
                status: "Error "+err+" : You have to Log in first"
            })
        })
}

module.exports.removeAll = function(req, res){
    // Find logged in user
    User.findOne({
        email: req.user.email
    })
    .then( user => {
        // User exist
        if(user){
            // Find in favourite list
            let i = user.favourite.length;

            // Find until getting object or end of the list
            while(i--){
                user.favourite[i].remove();
            }

            user.save();

            // Response if Success (Found)
            res.json({
                status: "Successfully Clear Favourite"
            })

        // User not exist
        } else {
            // Response if not Logged in
            res.json({
                status: "The User doesn't exist"
            })
        }
    })
    .catch( err => {
        // Response if Error
        res.json({
            status: "Error "+err+" : You have to Log in first"
        })
    })
}