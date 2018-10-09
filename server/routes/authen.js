const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/user');

router.get('/load', passport.authenticate('jwt', { session: false}), (req, res) =>{
    //Body come from authenticate
    // console.log(req.user);
    return res.json({
        status: 'logged in',
        email: req.user.email,
        firstname: req.user.firstname
    })
})

module.exports = router;