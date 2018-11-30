const Product = require('../../models/product');

module.exports.loadOne = function(req, res){
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
}

module.exports.loadAll = function(req, res){
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
}

