// UserRouter.js

const express = require('express');
const app = express();
const UserRouter = express.Router();

const User = require('./../models/user');

UserRouter.route('/').get(function(req, res){
    User.find({}, (err, users) => {
        if(err){
            res.send('Error');

        } else{
            res.send(users);
        }
    })
});


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