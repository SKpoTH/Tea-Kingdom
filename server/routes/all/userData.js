const express = require('express');
const router = express.Router();
const multer = require('multer');

const passport = require('passport');

//=======================Upload File Handling============================
const storage = multer.diskStorage({
    //Source of uploaded images
    destination: function(req, file, cb) {
        cb(null, './server/build/uploads/profile_images/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname);   //the name of file
    }
});

const fileFilter = (req, file, cb) => {
    //Accept only jpeg and png
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

// Import Controllers
const userData = require('../../controllers/userData/userData-all');

// Path: '/api/userData/load'   | Load Data
router.get('/load', passport.authenticate('jwt', { session: false}), userData.load)

// Path: '/api/userData/edit'   | Edit Profile
router.post('/edit', upload.single('profileImage'), passport.authenticate('jwt', { session: false}), userData.edit)

module.exports = router;