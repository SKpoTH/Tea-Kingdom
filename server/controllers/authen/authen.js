const express = require('express');
const order = require('../../models/order');

module.exports = function(req, res){
    order.aggregate([  
        { $match: { email : req.user.email, status: 'Ordering' } },
        { $unwind: { path :"$product", preserveNullAndEmptyArrays : false } },
        { $group : { _id : "$email", amount : { $sum : "$product.amount" } } },
    ]).then(s => {
        let amount;
        if(s.length == 0)
            amount = 0
        else
            amount = s[0].amount  
        let info = {
            status: 'logged in',
            email: req.user.email,
            firstname: req.user.firstname,
            profileImage: req.user.profileImage,
            chart: amount,
            type: req.user.type
        }
        res.json(info)
    })
}