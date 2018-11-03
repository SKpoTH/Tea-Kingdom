const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const User = require('./../models/user');
const opts = {};


opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();

//Set JWT Secret Key word
opts.secretOrKey = '12345';

module.exports = function(passport){
    passport.use(new JWTStrategy(opts, (jwt_payload, done) => {
        console.log(jwt_payload)
        const EEmail = jwt_payload.email;
        User.findOne({ email : EEmail })
            .then(user => {
                if(user){
                    return done(null, user);
                }
                return done(null, false);
            })
            .catch(err =>{
                console.error(err);
                return done(null, false);
            })
    }))
}