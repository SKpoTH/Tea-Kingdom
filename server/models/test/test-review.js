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
    }],
    created_at: { type: Date, required: true, default: Date.now }
}, {
    collection: 'test-review'
});

module.exports = mongoose.model('Test-Review', Review);