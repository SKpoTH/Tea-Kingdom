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

        creaditCard:    { type: String,   require: true},

        point:          { type: Number,   require: true},

        favourite: [{
                        productID:      { type: String, require: true},
                        name:           { type: String, require: true},
                        brand:          { type: String, require: true},
                        company:        { type: String, require: true},
                        type:           { type: String, require: true},

                        email:          { type: String, require: true},

                        discount:       { type: Boolean,require: true},   //discount or not
                        price:          { type: Number, require: true},
                        discountPrice:  { type: Number, require: true},
                        
                        weight:         { type: Number, require: true},
                        region:         { type: String, require: true},//จีน ญี่ปุ่น
                        description:    { type: String, require: true},
                        process:        { type: String, require: true},//ผง ใบ ซอง
                        score:          { type: Number, require: true},
                        
                        amount:         { type: Number, require: true},
                        
                        pending:        { type: Boolean,require: true},
                        
                        productImage:   { type: String, require: true}
        }],

        profileImage:   { type: String, require: true }
}, {
        collection: 'users'
});

module.exports = mongoose.model('User', User);
