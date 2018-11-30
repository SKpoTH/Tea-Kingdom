const Product = require('../../models/product');

module.exports.loadAll = function(req, res){
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
}

module.exports.update = function(req, res){
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
}