// user.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var User = new Schema({
        firstname:      { type: String,   require: true},
        lastname:       { type: String,   require: true},
        email:          { type: String,   require: true,  unique: true},
        password:       { type: String,   require: true},
        address:        { type: String,   require: true},
        phone:          { type: String,   require: true}
}, {
        collection: 'users'
});

User.methods.hashPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

User.methods.comparePassword = function(password, hash){
    return bcrypt.compareSync(password, hash);   
}

module.exports = mongoose.model('User', User);
