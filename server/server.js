// server.js
// Import
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport');

const app = express();

require('./config/passport')(passport);

// server PORT
const PORT = 5000;
// const PORT = process.env.PORT;

// Link to mongodb
const config = require('./database/db');

mongoose.connect(config.db).then(
    () => { console.log('Database is connected') },
    err => { console.log('Cannot connect to database' +err)}
);

// ============================ Router ==================================
// ----- For All -----
const login = require('./routes/all/login');
const signup = require('./routes/all/signup');
const authen = require('./routes/all/authen');
const product = require('./routes/all/product');
const reply = require('./routes/all/reply');

// ----- For Consumer -----
const consumerUserData = require('./routes/consumer/userData');
const consumerOrder = require('./routes/consumer/order');
const consumerFavourite = require('./routes/consumer/favourite');
const consumerPayment = require('./routes/consumer/payment');
const consumerTracking = require('./routes/consumer/tracking');

// ----- For Seller -----
const sellerProduct = require('./routes/seller/product');

// ----- For Admin -----
const adminProduct = require('./routes/admin/product');
const adminUserData = require('./routes/admin/userData');
const adminTracking = require('./routes/admin/tracking');
// ======================================================================

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

// Midleware
app.use(passport.initialize());
//app.use(passport.session());

// ========================= Apply main path ============================
// ----- For All -----
app.use('/api', login);
app.use('/api', signup);
app.use('/api/authen', authen);
app.use('/api/product', product);
app.use('/api/reply', reply);

// ----- For Consumer -----
app.use('/api/userData', consumerUserData);
app.use('/api/order', consumerOrder);
app.use('/api/favourite', consumerFavourite);
app.use('/api/payment', consumerPayment);
app.use('/api/tracking', consumerTracking);

// ----- For Seller -----
app.use('/api/seller/product', sellerProduct);

// ----- For Admin -----
app.use('/api/admin/product', adminProduct);
app.use('/api/admin/userData', adminUserData);
app.use('/api/admin/tracking', adminTracking);
// ======================================================================

//for deploy only start
app.use(express.static(path.join(__dirname, '/build')));
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
});
//for deploy only end


app.listen(PORT, () => {
    console.log('Server is running on Port: ', PORT);
});