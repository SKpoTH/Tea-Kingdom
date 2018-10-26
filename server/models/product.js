// app/models/tea.js

const mongoose = require('mongoose');

//tea Schema
var Product = mongoose.Schema({
    name:         { type: String,require: true},
    brand:        { type: String,require: true},
    type:         { type: String,require: true},
    discountPrice:{ type: Number,require: true},
    price:        { type: Number,require: true},
    weight:       { type: Number,require: true},
    region:       { type: String,require: true},//จีน ญี่ปุ่น
    description:  { type: String,require: true},
    review:       { type: String,require: true},
    score:        { type: Number,require: true},
    process:      { type: String,require: true},//ผง ใบ ซอง
    amount:       { type: Number,require: true},
    pending:      { type: Boolean,require: true},
    productImage: { type: String,require: true}
},{
    collection: 'product'
});

module.exports = mongoose.model('Product', Product);