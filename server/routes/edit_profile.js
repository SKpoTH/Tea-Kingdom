const express = require('express');
const router = express.Router();
const multer = require('multer');

const jwt = require('jsonwebtoken');
const passport = require('passport');

const User = require('../models/user');

const storage = multer.diskStorage({
    
    //source of uploaded images
    destination: function(req, file, cb) {
        cb(null, './server/build/uploads/profile_images/');
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

//load profile
router.post('/load', passport.authenticate('jwt', { session: false}), (req, res) => {
    //find email if it was used
    User.findOne({
        email: req.user.email
    })
        .then(user =>{
            if(user) {
                user.status = 'Successfully load'
                res.json(user)
            } else{
                res.json({
                    status: 'Fail to load'
                })
            }
        })
})

//edit profile
router.post('/edit', upload.single('profileImage'), passport.authenticate('jwt', { session: false}), (req, res) => {
    //find email if it was used
    //console.log(req.body.firstname);
    //console.log('111111111111');
    console.log(req.file);

    User.findOne({
        email: req.user.email
    })
        .then(user =>{
            if(user) {

                var path = req.file.path;
                var slicePath = path.slice(13)

                user.firstname = req.body.firstname;
                user.lastname = req.body.lastname;
                user.address = req.body.address;
                user.phone = req.body.phone;
                user.profileImage = slicePath;

                user.save()
                    .then( user => {
                        res.json({
                            status: 'Successfully Edit',
                            firstname: user.firstname,
                            lastname: user.lastname,
                            address: user.address,
                            phone: user.phone
                        })
                    })
            } else{
                res.json({
                    status: 'Can not edit Profile'
                })
            }
        })
})

module.exports = router;
