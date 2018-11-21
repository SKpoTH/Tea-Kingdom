const express = require('express');
const router = express.Router();

const passport = require('passport')

const Tracking = require('../../models/tracking')

// Load Data
router.get('/consumer/load', passport.authenticate('jwt', { session: false}), function(req, res){

    // Find the tracking of Logged in user
    Tracking.findOne({
        email: req.user.email,
        status: { $not: { $eq: 'Done'}}
    })
        .then( track =>{
            // Response if Success
            res.json({
                data: track,
                status: "Successfully Load"
            })
        })
        .catch( err =>{
            // Response if Error
            res.json({
                status: "Error"+err+" : Can't find tracking"
            })
        })
})

module.exports = router;