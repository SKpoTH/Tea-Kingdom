var express = require('express');
var router = express.Router();
const multer = require('multer');

var passport = require('passport');

var Product = require('../models/product');
var Order = require('../models/order');

const storage = multer.diskStorage({
    
    //source of uploaded images
    destination: function(req, file, cb) {
        cb(null, './server/build/uploads/product_images/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname);   //the name of file
    }
});

const fileFilter = (req, file, cb) => {
    
    //accept only jpeg and png
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true);       
    } else {
        cb(null, false);
    }
};

const upload = multer({storage: storage, limits: {
    fileSize: 1024 * 1024 * 5
}});


// Load data of product of the seller to edit
router.post('/load', passport.authenticate('jwt', { session: false}), function(req, res){
    var user_email = req.user.email;
    Product.findOne({
        email: user_email,
        _id: req.body.productID
    }, (err, product) => {
            if(product){
                var getProduct = {
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
                    productImage: product.productImage,
                    status: 'Found'
                };

                //Send to Front End
                res.json(getProduct);
            }
            else{
                res.json({
                    status: 'Not Found'
                });
            }
    })
})

// Edit product in database
router.get('/edit', upload.single('productImage'), passport.authenticate('jwt', { session: false}), function(req, res){
    
    console.log(req.file);

    var user_email = req.user.email;
    Product.findOne({ 
        email: user_email,
        _id: req.body.productID 
    }, 
        (err, product) => {
            if(product){

                var path = req.file.path;
                var slicePath = path.slice(13);

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
                //product.pending
                product.productImage = slicePath;

                product.save();
        
                //Send to Front End
                res.json({
                    status: 'Successfully Edit Product'
                });
            }
            else{
                res.json({
                    status: 'Not Found'
                });
            }
    })
})

module.exports = router;