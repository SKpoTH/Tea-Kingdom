const express = require('express');
const router = express.Router();

// Import Child Route
const product = require('./product');

// Path Seller Product Operation
router.use('/product', product)

module.exports = router;