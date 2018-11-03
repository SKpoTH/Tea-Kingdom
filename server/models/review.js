const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Review Schema

var Review = new Schema({
    productID:  { type: String, require: true},
    email:      { type: String, require: true},
    text:       { type: String, require: true},
    reply:      [{
            email:      { type: String, require: true },
            text:       { type: String, require: true}
    }]
}, {
    collection: 'review'
});

module.exports = mongoose.model('Review', Review);