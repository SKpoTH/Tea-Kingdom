// user.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
        type:           { type: String,   require: true},               //consumer, seller, admin
        firstname:      { type: String,   require: true},
        lastname:       { type: String,   require: true},
        email:          { type: String,   require: true,  unique: true},
        password:       { type: String,   require: true},
        address:        { type: String,   require: true},
        phone:          { type: String,   require: true},
        productPending: {
                productID: { type: String,      require: true},
                name:      { type: String,      require: true},
                brand:     { type: String,      require: true}
        }
}, {
        collection: 'users'
});

module.exports = mongoose.model('User', User);
