const express = require('express');
const router = express.Router();

const passport = require('passport');

// Import Controller
const payment = require('../../controller/payment/payment')

// Path: '/api/payment/confirm' | Confirm to pay for products
router.post('/confirm', passport.authenticate('jwt', { session: false}), payment.confirm)

module.exports = router;
