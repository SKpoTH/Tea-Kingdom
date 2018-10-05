// server.js

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// server PORT
const PORT = 5000;

// Link to mongodb
const config = require('./database/db');

mongoose.connect(config.db).then(
    () => { console.log('Database is connected') },
    err => { console.log('Cannot connect to database' +err)}
);


//Router
const UserRouter = require('./routes/UserRouter');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//apply Route
app.use('/user', UserRouter);


app.listen(PORT, () => {
    console.log('Server is running on Port: ', PORT);
});