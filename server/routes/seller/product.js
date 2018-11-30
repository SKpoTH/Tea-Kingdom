const express = require('express');
const router = express.Router();
const multer = require('multer');

const passport = require('passport');

//=======================Upload File Handling============================
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
//=======================================================================


const productSeller = require('../../controllers/product/product-seller');

// Path: '/api/seller/product/load/all' | Load product whose are seller
router.get('/load/all', passport.authenticate('jwt', { session: false}), productSeller.loadAll)
    
// Path: '/api/seller/product/add'      | Seller Add new Product
router.post('/add', upload.single('productImage'), passport.authenticate('jwt', { session: false}), productSeller.add)

// Path: '/api/seller/product/edit'     | Edit product by seller
router.post('/edit', upload.single('productImage'), passport.authenticate('jwt', { session: false}), productSeller.edit)
    
// Path: '/api/seller/product/update'   | Update a Product
router.post('/update', productSeller.update)

module.exports = router;