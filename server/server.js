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
const PORT = 5000;


// Link to mongodb
const config = require('./database/db');

mongoose.connect(config.db).then(
    () => { console.log('Database is connected') },
    err => { console.log('Cannot connect to database' +err)}
);


//Router
const index = require('./routes/index');
const UserRouter = require('./routes/UserRouter');
const Authen = require('./routes/authen')(passport);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './../public')));


app.use(session({
    secret: 'thesecret',
    saveUnintialized: false,
    resave: false
}))

//Midleware
app.use(passport.initialize());
app.use(passport.session());

//apply Route
app.use('/user', UserRouter);
app.use('/', index);
app.use('/authen', Authen);

app.listen(PORT, () => {
    console.log('Server is running on Port: ', PORT);
});