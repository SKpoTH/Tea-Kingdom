const mongoose = require('mongoose')

//Credit Card
var Payment = mongoose.Schema({
    email:      { type: String, require: true},

    firstname:  { type: String, require: true},
    lastname:   { type: String, require: true},

    cardID:     {type: String, require: true},
    exp:        {type: String, require: true},
    cvv:        {type: String, require: true},

    lastDate: {type: Date, require: true}

}, {
    collection: 'payment'
});

module.exports = mongoose.model('Payment', Payment);