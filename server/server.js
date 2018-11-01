// server.js
// Import
const express = require('express');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const cors = require('cors');
const passport = require('passport');
//const flash = require('connect-flash');



const app = express();


require('./config/passport')(passport);


// server PORT
// const PORT = 5000;
const PORT = process.env.PORT;

// Link to mongodb
const config = require('./database/db');

mongoose.connect(config.db).then(
    () => { console.log('Database is connected') },
    err => { console.log('Cannot connect to database' +err)}
);


//Router
const login = require('./routes/login');
const signup = require('./routes/signup');
const authen = require('./routes/authen');
const product = require('./routes/product');
const product_detail = require('./routes/product_detail');
const add_product = require('./routes/add_product');
const edit_profile = require('./routes/edit_profile');
const order = require('./routes/order');
const add_to_cart = require('./routes/add_to_cart');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
//app.use('/uploads',express.static('uploads'));
//app.use(express.static(path.join(__dirname, './../public')));
//app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

/*
app.use(session({
    secret: 'thesecret',
    saveUnintialized: false,
    resave: false
}))
*/

//Midleware
app.use(passport.initialize());
//app.use(passport.session());


//apply main path
app.use('/api', login);
app.use('/api', signup);
app.use('/api/authen', authen);
app.use('/api/product', product);
app.use('/api/product_detail', product_detail);
app.use('/api/add_product', add_product);
app.use('/api/edit_profile', edit_profile);
app.use('/api/order', order);
app.use('/api/add_to_cart', add_to_cart);

//for deploy only start
app.use(express.static(path.join(__dirname, '/build')));
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
});
//for deploy only end


app.listen(PORT, () => {
    console.log('Server is running on Port: ', PORT);
});