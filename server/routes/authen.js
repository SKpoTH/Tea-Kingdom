var express = require('express');
var router = express.Router();

var User = require('../models/user');
/*
var loggedin = function(req, res, next){
    if(req.isAuthenticated()){
        next();
    } else{
        res.redirect('/login')
    }
}*/
module.exports = function(passport){
    router.get('/logged_in', (req, res, user) => {
        passport.authenticate('local'), (res, req) => {
            if(req.isAuthenticated()){
                res.json({
                    status: 'logged in',
                    _id: req.user._id,
                    name: req.user.firstname        
                });
            } else {
                res.json({
                    status: 'not logged in',
                    _id: '',
                    name: ''
                })
            }
        }
    })

    router.get('/logout', function(req, res){
        req.logout()
        res.json({
            status: 'logout'
        })
    })

    return router;
}

