const localStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = function(passport) {
    passport.use(new localStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, function(email, password, done){

        //find email match
        let query = { email };
        User.findOne(query, function(err, doc){
            if(err) {
                done(err);
            } else{
                if(doc) {
                    //check passwrod match
                    var valid = doc.comparePassword(password, doc.password)
                    if(valid) {
                        done(null, {
                            email : doc.email,
                            password: doc.password
                        })
                    } else{
                        done(null, false)
                    }
                } else{
                    done(null, false)
                }
            }
        })
    }))

    passport.serializeUser(function(user, done){
        done(null, user);
    })
    passport.deserializeUser(function(user, done){
        done(null, user);
    })
}