const express = require('express');
const router = express.Router();
const passport = require('passport');
const order = require('../models/order');

router.get('/load', passport.authenticate('jwt', { session: false}), (req, res) =>{
    //Body come from authenticate
    // console.log(req.user);
    order.aggregate([  
        { $match: { email : req.user.email, status: 'Ordering' } },
        { $unwind: { path :"$product", preserveNullAndEmptyArrays : false } },
        { $group : { _id : "$email", amount : { $sum : "$product.amount" } } },
    ]).then(s => {
        let info = {
            status: 'logged in',
            email: req.user.email,
            firstname: req.user.firstname,
            profileImage: req.user.profileImage,
            chart: s[0].amount,
            type: req.user.type
        }
        res.json(info)
    })
})

module.exports = router;