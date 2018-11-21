const express = require('express');
const router = express.Router();
const multer = require('multer');

const passport = require('passport');

const User = require('../../models/user');

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

// Load Data
router.get('/load', passport.authenticate('jwt', { session: false}), (req, res) => {
    
    // Find the user data by email
    User.findOne({
        email: req.user.email
    })
        .then(user =>{
            // User exist
            if(user) {
                res.json({
                    data: user,
                    status: "Successfully Load User Data"
                })
            // User not exist
            } else{
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
})

// Edit Profile
router.post('/edit', upload.single('profileImage'), passport.authenticate('jwt', { session: false}), (req, res) => {

    // Find the user data by email
    User.findOne({
        email: req.user.email
    })
        .then(user =>{
            // User exist
            if(user) {
                
                // Make path for the uploaded file
                var path = req.file.path;
                var slicePath = path.slice(13)

                // Update user data
                user.firstname = req.body.firstname;
                user.lastname = req.body.lastname;
                user.address = req.body.address;
                user.phone = req.body.phone;
                user.profileImage = slicePath;
                
                user.save()
                    .then( user => {
                        // Response if Successful Edit
                        res.json({
                            data: user,
                            status: "Successfully Edited"
                        })
                    })
                    .catch( err => {
                        // Response if Error
                        res.json({
                            status: "Error "+err+" : Can't edit profile"
                        })
                    })
            // User not exist
            } else{
                // Response if Error
                res.json({
                    status: "The User doesn't exist"
                })
            }
        })
        .catch( err => {
            // Response If Error
            res.json({
                status: "Error "+err+" : You have to Log in first"
            })
        })
})

module.exports = router;