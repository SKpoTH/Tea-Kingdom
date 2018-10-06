var express = require('express');
var AuthRouter = express.Router();

var User = require('../models/user');

module.exports = function(passport){
    AuthRouter.post('/signup', function(req, res){
        var body = req.body,
            email = body.email,
            password = body.password;
        User.findOne({email: email}, function(err, doc){
            if(err) {
                res.send('error occured')
            } else {
                if(doc) {
                    res.send('email already used')
                } else{
                    var user = new User()
                    user.email = email;
                    user.password = user.hashPassword(password);
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

    AuthRouter.post('/login', passport.authenticate('local', {
        failureRedirect: '/login',
        successRedirect: '/profile',
    }) , function(req, res){
        res.send('hey')
    })

    AuthRouter.get('/logout', passport.authenticate('local'), function(req, res){
        res.json({
            status      : 'Success Logout',
            _id         : req.user._id,
            email       : req.user.email,
            firstname   : req.user.firstname,
            lastname    : req.user.lastname
        });
    })

    return AuthRouter;
};
