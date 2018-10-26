//app/models/order.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//order Schema
const OrderSchema = new Schema({
    email:         { type: String, require: true},
    product:[{ 
            productID:    { type: String, require: true},
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
    }],
    date:           { type: Date, require: true},
    status:         { type: String, require: true}
},{
    collection: 'order'
});

module.exports = mongoose.model('Order', OrderSchema);