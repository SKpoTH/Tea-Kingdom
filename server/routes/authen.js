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
                    res.json({status : 'email already used'})
                    console.log("someone call");
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
    /*
    AuthRouter.post('/login', function(req, res, next) {
        passport.authenticate('local', function(err, user, info) {
            if (err) { return next(err); }
            if (!user) { return res.redirect('/login'); }
                req.logIn(user, function(err) {
                if (err) { return next(err); }
                    return res.redirect('/login');
            });
        })(req, res, next);
    });
    */
    /*
    AuthRouter.post('/login', passport.authenticate('local', {
        session: false,
        successRedirect: '/profile',
        failureRedirect: '/login'
    }) , function(req, res){
        
    })
    */
    AuthRouter.post('/login', (req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
        //console.log(user);
        //console.log(user);
        if (err) {
            res.json({status: 'fail'})
        } else if (user) {
            //console.log("someone call");
            res.json({status: 'success'})
        } else {
            //console.log("someone call");
            res.json({status: 'fail'})
        }
        })(req, res, next)
    })
    /*


    AuthRouter.get('/logout', passport.authenticate('local'), function(req, res){
        res.json({
            status      : 'Success Logout',
            _id         : req.user._id,
            email       : req.user.email,
            firstname   : req.user.firstname,
            lastname    : req.user.lastname
        });
    })
    */
    return AuthRouter;
};
