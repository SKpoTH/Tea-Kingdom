const express = require('express');
const router = express.Router();

const passport = require('passport');

const User = require('../../models/user');

// Load All user
router.get('/load/all', passport.authenticate('jwt', { session: false }), function(req, res) {
    // If the user is "Admin"
    if(req.user.type === "Admin") {
        // Find all user
        User.find({})
            .then( thatOne => {
                // Response If Success
                res.json({
                    data : thatOne,
                    status: 'Successfully load'
                })
            })
            .catch( err => {
                // Response If Error
                res.json({
                    status: "Error "+err+" : Can't find users"
                })
            })
    // If not
    } else {
        // Response If isn't "Admin"
        res.json({
            status: "You don't have permission"
        })
    }
})

// update the user role
router.post('/update', passport.authenticate('jwt', { session: false }), function(req, res) {
    // If the user is "Admin"
    if(req.user.type === "Admin") {
        // Update the roles of each user
        for(let i in req.body) {
            // Find each user data
            User.findById(req.body[i].id)
                .then(usero =>{
                    // Update user's role
                    usero.type = req.body[i].type;
                    usero.save()
                })
        }
        // Response If Success
        res.json({
            status: "Successfull Updated User role"
        })
    // If not
    } else {
        res.json({
            status: "you don't have permission"
        })
    }
})

module.exports = router;