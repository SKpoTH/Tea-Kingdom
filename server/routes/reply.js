var express = require('express');
var router = express.Router();

var review = require('../models/review');
var passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/new', passport.authenticate('jwt', { session: false }), function(req, res){
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
router.post('/sub', passport.authenticate('jwt', { session: false }), function(req, res){
    const user_email = req.user.email;
    review.findById(req.body.id)
    .then(thatOne => {
        thatOne.reply.push({
            email : user_email,
            text : req.body.comment
        });
        thatOne.save();
        res.json({
            status: 'Successfully sub reply'
        })
    });
})
router.post('/load', (req, res) => {
    review.find({ 
        productID : req.body.productID
    })
    .then(dataJason => {res.json(dataJason)});
})
module.exports = router;