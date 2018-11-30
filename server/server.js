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
const PORT = process.env.PORT || 5000;

// Link to mongodb
const config = require('./database/db');

mongoose.connect(config.db).then(
    () => { console.log('Database is connected') },
    err => { console.log('Cannot connect to database' +err)}
);

// Import API Child routes
const api = require('./routes/api')

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

// Midleware
app.use(passport.initialize());
//app.use(passport.session());


// API Path
app.use('/api', api);


//for deploy only start
app.use(express.static(path.join(__dirname, '/build')));
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
});
//for deploy only end


if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log('Server is running on Port: ', PORT);
    });
}

module.exports = app;