const express = require('express');
const router = express.Router();

const review = require('../../models/review');
const passport = require('passport');

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
    console.log(req.body)
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
    //mongoose.product.aggregate({ $lookup: { from: "users", localField: "email", foreignField: "email", as: "user" } })
    // review.find({ 
    //     productID : req.body.productID  
    // })
    review.aggregate([  { $match: { productID : req.body.productID } },
                        { $addFields: { uniqueIID : "$_id"} },
                        { $unwind: { path :"$reply", preserveNullAndEmptyArrays : true } },
                        { $lookup: { from: "users", localField: "reply.email", foreignField: "email", as: "user" } },
                        { $addFields: { reply : { prof : { $arrayElemAt: [ "$user", 0 ] } }}},
                        { $group : { _id : { uniqueIID : "$uniqueIID", productID : "$productID", email : "$email", text : "$text" , created_at: "$created_at" }, reply : { $push: "$reply"} } },
                        { $lookup: { from: "users", localField: "_id.email", foreignField: "email", as: "user" } },
                        { $project : { _id : "$_id.uniqueIID", productID : "$_id.productID", text: "$_id.text", created_at: "$_id.created_at", user : { $arrayElemAt: [ "$user", 0 ] }, reply : "$reply" } },
                        { $sort: { created_at: 1 }}
                    ])
    .then(s => {
        // console.log(s)
        // console.log(s.length)
        res.json(s)
    })
})

module.exports = router;