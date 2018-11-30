//app/models/order.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//order Schemas
const OrderSchema = new Schema({
    email:         { type: String, require: true},
    product:[{ 
            productID:    { type: String, require: true},
            name:         { type: String,require: true},
            brand:        { type: String,require: true},
            company:       { type: String,require: true},
            type:         { type: String,require: true},

            email:        { type: String, require: true},

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
    }],

    date:           { type: Date, require: true},
    status:         { type: String, require: true}
},{
    collection: 'order'
});

module.exports = mongoose.model('Order', OrderSchema);