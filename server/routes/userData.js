var express = require('express');
var router = express.Router();

var user = require('../models/user');
var passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/one', passport.authenticate('jwt', { session: false }), function(req, res){
    const user_email = req.user.email;
    var newReview = new review({
        productID:  req.body.productID,
        email:      user_email,
        text:       req.body.comment,
        reply:      []
    });
    newReview.save()
    .then(retur => {
        res.json({
            status: 'Successfully reply'
        })
    })
})
router.get('/all', passport.authenticate('jwt', { session: false }), function(req, res) {
    if(req.user.type === "Admin") {
        user.find({})
        .then(thatOne => {
            // console.log(thatOne);
            res.json({
                data : thatOne,
                status: 'Successfully load'
            })
        });
    } else {
        res.json({
            status: "you don't have permission"
        })
    }
})

router.post('/update', passport.authenticate('jwt', { session: false }), function(req, res) {
    if(req.user.type === "Admin") {
        // console.log(req.body);
        for(let i in req.body) {
            user.findById(req.body[i].id)
            .then(usero =>{
                usero.type = req.body[i].type;
                usero.save()
            })
        }
        res.json({
            status: "Successfull promote"
        })
    } else {
        res.json({
            status: "you don't have permission"
        })
    }
})
module.exports = router;