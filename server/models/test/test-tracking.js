//app/models/tracking.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//tracking Schema
const Tracking = new Schema({
    email:      { type: String, require: true},
    orderID:    { type: String, require: true},

    location:   { type: String, require: true},
    date:       { type: Date,   require: true},
    
    status:      { type: String, require: true}
},{ 
    collection: 'test-tracking'
});

module.exports = mongoose.model('Test-Tracking', Tracking);

/* 
Get OrderID
Recieve product from Seller
Packing all product
Send to customer
Done
*/