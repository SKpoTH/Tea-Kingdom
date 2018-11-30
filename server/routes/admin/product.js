const express = require('express');
const router = express.Router();

const passport = require('passport');

// Import Controller
const productAdmin = require('../../controllers/product/product-admin')

// Path: '/api/admin/product/load/all'  | Load all products for addmin
router.get('/load/all', passport.authenticate('jwt', { session: false } ), productAdmin.loadAll) 

// Path: '/api/admin/product/update'    | Update the product by Admin
router.post('/update', productAdmin.update)

module.exports = router;