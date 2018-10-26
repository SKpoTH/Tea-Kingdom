//app/models/tracking.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//tracking Schema
const TrackingSchema = new Schema({
    userId:     { type: Number, require: true},
    orderId:    { type: Number, require: true},
    date:       { type: Date, require: true},
    status:     { type: Number, require: true},
    url:        { type: String, require: true}
},{
    collection: 'tracking'
});

module.exports = mongoose.model('Tracking', TrackingSchema);