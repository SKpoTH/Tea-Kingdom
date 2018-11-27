const express = require('express');
const router = express.Router();

// Import Child Route
const user = require('./user');
const product = require('./product');
const reply = require('./reply');
const favourite = require('./favourite');
const order = require('./order');
const payment = require('./payment');
const tracking = require('./tracking');
const userData = require('./userData');

// Path Connection Operation
router.use('/', user)

// Path Product Operation
router.use('/product', product)

// Path Reply Opertaion
router.use('/reply', reply)

// Path Favourite Operation
router.use('/favourite', favourite)

// Path Order Operation
router.use('/order', order)

// Path Payment Operation
router.use('/payment', payment)

// Path Tracking Operation
router.use('/tracking', tracking)

// Path User Data Operation
router.use('/userData', userData)

module.exports = router