const User = require('../../models/user');

module.exports.load = function(req, res){
    // Find the user data by email
    User.findOne({
        email: req.user.email
    })
        .then(user =>{
            // User exist
            if(user) {
                res.json({
                    data: user,
                    status: "Successfully Load User Data"
                })
            // User not exist
            } else{
                res.json({
                    data: user,
                    status: "The User doesn't exist"
                })
            }
        })
        .catch( err => {
            // Response if Error
            res.json({
                status: "Error "+err+" : You have to Log in first"
            })
        })
}

module.exports.edit = function(req, res){
    // Find the user data by email
    User.findOne({
        email: req.user.email
    })
        .then(user =>{
            // User exist
            if(user) {
                
                // If update only text data
                if(req.file === undefined){
                    user.firstname = req.body.firstname;
                    user.lastname = req.body.lastname;
                    user.address = req.body.address;
                    user.phone = req.body.phone;

                // If update all data
                } else {
                    // Make path for the uploaded file
                    var path = req.file.path;
                    var slicePath = path.slice(13)

                    // Update user data
                    user.firstname = req.body.firstname;
                    user.lastname = req.body.lastname;
                    user.address = req.body.address;
                    user.phone = req.body.phone;
                    user.profileImage = slicePath;
                }

                // Save change in database
                user.save()
                    .then( user => {
                        // Response if Successful Edit
                        res.json({
                            data: user,
                            status: "Successfully Edited"
                        })
                    })
                    .catch( err => {
                        // Response if Error
                        res.json({
                            status: "Error "+err+" : Can't edit profile"
                        })
                    })

            // User not exist
            } else{
                // Response if Error
                res.json({
                    status: "The User doesn't exist"
                })
            }
        })
        .catch( err => {
            // Response If Error
            res.json({
                status: "Error "+err+" : You have to Log in first"
            })
        })
}