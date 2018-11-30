const Product = require('../../models/product');

module.exports.loadAll = function(req, res){
    // Find Products from Sellers email
    Product.find({ 
        email: req.user.email, 
    })
        .then( products => {
            // Products Exist
            if(products){
                // Response If Success
                res.json({
                    data: products,
                    status: "Successfully Loaded Seller's Products"
                })
            }
            // Products Not Exist
            else{
                // Response If Not found
                res.json({
                    status: "Not Found Seller's products"
                })
            }
        })
        .catch( err => {
            // Response If Error
            res.json({
                status : "Error "+err+" : Can't find products"
            })
        })
}


module.exports.add = function(req, res){
    // Find the Prodcut If already exist
    Product.findOne({
        name: req.body.name,
        brand: req.body.brand,
        company: req.body.company,
        type: req.body.type
    })
        .then(product => {
            // If already exist
            if(product){
                // Response If Already Exist
                res.json({
                    status: "The Product have already exist"
                })
            // If not 
            } else{
                // This is the tacnical edit the path to save the file in the public location
                let path = req.file.path;
                let slicePath = path.slice(13);
                // Create the new product
                let newProduct = new Product({
                    name: req.body.name,
                    brand: req.body.brand,
                    company: req.body.company,
                    type: req.body.type,

                    email: req.user.email,

                    discount: req.body.discount,
                    price: req.body.price,
                    discountPrice: req.body.discountPrice,

                    weight: req.body.weight,
                    region: req.body.region,
                    description: req.body.description,
                    process: req.body.process,
                    score: req.body.score,

                    amount: req.body.amount,

                    pending: false,              // The product must be pending first

                    productImage: slicePath     // The edited path for public location
                })

                newProduct.save()
                    .then( product => {
                        // Response If Success
                        res.json({
                            status: "Successfully Create the Product"
                        })
                    })
                    .catch( err => {
                        // Response If Error
                        res.json({
                            status : "Error "+err+" : Can't create the Product"
                        })
                    })
            }
        })
        .catch( err => {
            // Response If Error
            res.json({
                status : "Error "+err+" : Can't find product"
            })
        })
}


module.exports.edit = function(req, res){
    // Find the product that will be edit
    console.log(req.body.productID)
    Product.findOne({ 
        email: req.user.email,
        _id: req.body.productID 
    }) 
        .then(product => {
            // Product Exist
            if(product){
                // This is the tacnical edit the path to save the file in the public location
                let path = req.file.path;
                let slicePath = path.slice(13);

                //edit and save to database
                product.name = req.body.name;
                product.brand = req.body.brand;
                product.company = req.body.company;
                product.type = req.body.type;
                product.discount = req.body.discount;
                product.price = req.body.price;
                product.discountPrice = req.body.discountPrice;
                product.weight = req.body.weight;
                product.region = req.body.region;
                product.description = req.body.description;
                product.process = req.body.process;
                product.amount = req.body.amount;
                product.pending = false;
                product.productImage = slicePath;

                product.save()
                    .then( product => {
                        // Response If Success
                        res.json({
                            status: "Successfully Edited Product"
                        });
                    })
                    .catch( err => {
                        // Response If Error
                        res.json({
                            status : "Error "+err+" : Can't Edit product"
                        })
                    })
            // Product not Exist
            } else{
                // Response If not found
                res.json({
                    status: "Not found the product"
                });
            }
        })
        .catch( err => {
            // Response If Error
            res.json({
                status : "Error "+err+" : Can't find product"
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