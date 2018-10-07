
const localStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = function(passport) {
    passport.use(new localStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, function(email, password, done){
        //console.log('ohaiyo');
        let query = { email };
        User.findOne(query, function(err, doc){
            //console.log('someone call');
            if(err) {
                //console.log('someone call');
                done(err);
            } else{
                //console.log(doc);
                if(doc) {
                    //console.log('============');
                    var valid = doc.comparePassword(password, doc.password)
                    if(valid) {
                        //console.log('============');
                        done(null, {
                            email : doc.email,
                            password: doc.password
                        })
                    } else{
                        done(null, false)
                    }
                } else{
                    //console.log('someone call');
                    done(null, false)
                }
            }
        })
    }))

    passport.serializeUser(function(email, done){
        done(null, email);
    })
    passport.deserializeUser(function(email, done){
        done(null, email);
    })
}