const express = require('express');
const router = express.Router();
const passport = require('passport');

// Import Controller
const signup = require('../../controller/signup/signup');
const login = require('../../controller/login/login');
const authen = require('../../controller/authen/authen');

// Path: '/api/signup'      | Sign Up new Account
router.post('/signup', signup)

// Path: '/api/login'       | Log In to the system
router.post('/login', login)

// Path: '/api/authen/load' | Get user information
router.get('/authen/load', passport.authenticate('jwt', { session: false}), authen)

module.exports = router;
