const express = require('express');
const router = express.Router();

// Import Controllers
const productAll = require('../../controller/product/product-all')

// Path: '/api/product/load/one'    | Load a product Data
router.post('/load/one', productAll.loadOne)

// Path: '/api/product/load/all'    | Load all product that ready to sell
router.get('/load/all', productAll.loadAll)

module.exports = router
