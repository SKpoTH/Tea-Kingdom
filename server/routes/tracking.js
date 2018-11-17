const express = require('express');
const router = express.Router();
const multer = require('multer');

const passport = require('passport')

const Tracking = require('../models/tracking')
const Product = require('../models/product');

//admin load all tracking
router.get('/admin_load', passport.authenticate('jwt', { session: false }), function(req, res){
    if(req.user.type === 'Admin'){
        Tracking.find({
            status: { $not: { $eq: 'Done'}}
        })
            .then( track =>{
                res.json({
                    data: track,
                    status: 'Successfully load'
                })
            })
            .catch( err =>{
                res.json({
                    status: 'Can not find any Tracking'
                })
            })
    } else{
        res.json({
            status: 'you do not have permission'
        })
    }
})

//Consumer load current tracking
router.get('/consumer_load', passport.authenticate('jwt', { session: false}), function(req, res){
    Tracking.findOne({
        email: req.user.email,
        status: { $not: { $eq: 'Done'}}
    })
        .then( track =>{
            res.json({
                data: track,
                status: 'Successfully load'
            })
        })
        .catch( err =>{
            res.json({
                status: 'No current tracking'
            })
        })
})

// Change the state of tracking by Admin
router.post('/update_state', passport.authenticate('jwt', { session: false }), function(req, res){
    if(req.user.type === 'Admin'){
        
        let foundError = false;

        for (let i in req.body){
            Tracking.findOne({
                orderID: req.body[i].orderID
            })
                .then( track =>{
                    //console.log(req.body.status);
                    track.status = req.body[i].status;
                    track.location = req.body[i].location;
                    track.date = Date.now();
    
                    track.save();
                })
                .catch( err => {
                    foundError = true;
                })
        }

        if(foundError){
            res.json({
                status: 'Cannot update status'
            })
        } else{
            res.json({
                status: 'Successfully Updated'
            });
        }

    } else{
        res.json({
            status: 'you do not have permission'
        })
    }
}) 

module.exports = router;