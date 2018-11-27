const express = require('express');
const router = express.Router();

// Import Child Route
const product = require('./product');
const tracking = require('./tracking');
const userData = require('./userData');

// Path Admin Product Operation
router.use('/product', product)

// Path Admin Tracking Operation
router.use('/tracking', tracking)

// Path Admin User Data Operation
router.use('/userData', userData)

module.exports = router