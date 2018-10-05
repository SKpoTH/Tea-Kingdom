// user.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
        firstname:      { type: String,   require: true},
        lastname:       { type: String,   require: true},
        email:          { type: String,   require: true,  unique: true},
        password:       { type: String,   require: true},
        address:        { type: String,   require: true},
}, {
        collection: 'users'
});

module.exports = mongoose.model('User', User);

