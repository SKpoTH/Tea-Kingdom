const express = require('express');
const router = express.Router();
const multer = require('multer');


const Product = require('../models/product');

const storage = multer.diskStorage({
    
    //source of uploaded images
    destination: function(req, file, cb) {
        cb(null, './public/uploads/product_images/');
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

router.post('/add', upload.single('productImage'), function(req, res){

    console.log(req.file);

    Product.findOne({
        name: req.body.name,
        brand: req.body.brand,
        company: req.body.company,
        type: req.body.type
    })
        .then(product => {
            if(product){
                res.json({
                    status: 'The product already exist'
                })
            } else{

                var path = req.file.path;
                var slicePath = path.slice(7);

                var newProduct = new Product({
                    name: req.body.name,
                    brand: req.body.brand,
                    company: req.body.company,
                    type: req.body.type,

                    email: req.body.email,

                    discount: req.body.discount,
                    price: req.body.price,
                    discountPrice: req.body.discountPrice,

                    weight: req.body.weight,
                    region: req.body.region,
                    description: req.body.description,
                    process: req.body.process,
                    score: req.body.score,

                    amount: req.body.amount,

                    pending: false,                             // temp status to all confirm

                    productImage: slicePath
                })

                newProduct.save()
                    .then(product => {
                        res.json({
                            status: 'Successfully Pending Prodcut'
                        })
                    })
            }
        })
        .catch( err => {
            res.json({
                status: 'Error Upload Product'
            })
        })
})

module.exports = router;