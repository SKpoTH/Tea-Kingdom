// UserRouter.js

const express = require('express');
const app = express();
const UserRouter = express.Router();

const passport = require('passport');
//const jwt = require('jsonwebtoken');

const User = require('./../models/user');

UserRouter.route('/add').post(function(req, res) {
    const user = new User(req.body);
    user.save((err, user) => {
        if(err) {
            res.json({status : "err"});
        } else {
            res.json({status : "done"});
        }
    });
});


module.exports = UserRouter;