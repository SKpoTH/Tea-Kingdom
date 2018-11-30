const Tracking = require('../../models/tracking')

module.exports.load = function(req, res){
    // If the user is "Admin"
    if(req.user.type === 'Admin'){
        // Find trackings that its state is not "Done"
        Tracking.find({
            status: { $not: { $eq: 'Done'}}
        })
            .then( track =>{
                // Response if Success
                res.json({
                    data: track,
                    status: 'Successfully Load'
                })
            })
            .catch( err =>{
                // Response if Error
                res.json({
                    status: "Error "+err+" : Can't find tracking"
                })
            })
    // If user is not "Admin"
    } else{
        // Response if don't have permission
        res.json({
            status: "You don't have permission"
        })
    }
}

module.exports.update = function(req, res){
    // If the user is "Admin"
    if(req.user.type === 'Admin'){
        // This variable 
        let foundError = false;
        // Find and update all specific trackings
        for (let i in req.body){
            Tracking.findOne({
                orderID: req.body[i].orderID
            })
                .then( track =>{
                    // Update tracking info
                    track.status = req.body[i].status;
                    track.location = req.body[i].location;
                    track.date = Date.now();
                    
                    track.save();
                })
                .catch( err => {
                    foundError = true;
                })
        }
        // If Error occurs
        if(foundError){
            // Response if Error
            res.json({
                status: "Error : Can't Updated tracking info"
            })
        // Error Nothing
        } else{
            // Response if Success
            res.json({
                status: "Successfully Updated"
            });
        } 
    // If user is not "Admin"
    } else{
        // Response if don't have permission
        res.json({
            status: "You don't have permission"
        })
    }

}