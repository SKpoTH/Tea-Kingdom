const Tracking = require('../../models/tracking')

module.exports.load = function(req, res){
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
}