// app/models/tea.js

const mongoose = require('mongoose');

//tea Schema
var Product = mongoose.Schema({
    name:         { type: String,require: true},
    brand:        { type: String,require: true},
    company:       { type: String,require: true},
    type:         { type: String,require: true},

    email:        { type: String,require: true},

    discount:     { type: Boolean,require: true},   //discount or not
    price:        { type: Number,require: true},
    discountPrice:{ type: Number,require: true},
    
    weight:       { type: Number,require: true},
    region:       { type: String,require: true},//จีน ญี่ปุ่น
    description:  { type: String,require: true},
    process:      { type: String,require: true},//ผง ใบ ซอง
    score:        { type: Number,require: true},
    
    amount:       { type: Number,require: true},
    
    pending:      { type: Boolean,require: true},
    
    productImage: { type: String,require: true}
},{
    collection: 'test-product'
});

module.exports = mongoose.model('Test-Product', Product);