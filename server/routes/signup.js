var express = require('express');
var router = express.Router();

var User = require('../models/user');

module.exports = function(passport){
    router.post('/signup', function(req, res){
        var body = req.body,
            email = body.email,
            password = body.password,
            firstname = body.firstname,
            lastname = body.lastname,
            address = body.address,
            phone = body.phone
        User.findOne({email: email}, function(err, doc){
            if(err) {
                res.send('error occured')
            } else {
                if(doc) {
                    res.json({status : 'email already used'})
                    console.log("someone call");
                } else{
                    var user = new User()
                    //User Data
                    user.email = email;
                    user.password = user.hashPassword(password);
                    user.firstname = firstname;
                    user.lastname = lastname;
                    user.address = address;
                    user.phone = phone

                    user.save(function(err, user){
                        if(err){
                            res.status(500).send('db error')
                        } else{
                            res.send(user);
                        }
                    })
                }
            }
        })
    });
    return router;
};
