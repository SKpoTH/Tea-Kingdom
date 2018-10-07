var express = require('express');
var router = express.Router();

var User = require('../models/user');


module.exports = function(passport){
    router.post('/login', (req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
        
        console.log(user);

        // login status
        if (err) {
            res.json({status: 'fail'})
        } else if (user) {
            res.json({status: 'success'})
        } else {
            res.json({status: 'fail'})
        }
        })(req, res, next)
    })

    return router;
};