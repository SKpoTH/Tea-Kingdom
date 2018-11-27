const express = require('express');
const router = express.Router();

const all = require('./all/index');
const seller = require('./seller/index');
const admin = require('./admin/index');

// Path for all role
router.use('/', all)

// Path for Seller operation
router.use('/seller', seller)

// Path for Admin operation
router.use('/admin', admin)

module.exports = router;




