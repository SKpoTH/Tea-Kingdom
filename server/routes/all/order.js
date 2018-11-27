const express = require('express');
const router = express.Router();

const passport = require('passport');

// Import Controller
const order = require('../../controller/order/order')

// Path: '/api/order/load'      | Load Data
router.get('/load', passport.authenticate('jwt', { session: false}), order.load)

// Path: '/api/order/update'    | Update the amount of product in order
router.post('/update', passport.authenticate('jwt', { session: false}), order.update)

// Path: '/api/order/add'       | Add New order
router.post('/add', passport.authenticate('jwt', { session: false}), order.add)
    
// Path: '/api/order/remove/all'| Remove Current Order
router.get('/remove/all', passport.authenticate('jwt', { session: false}), order.removeAll)

// Path: '/api/order/remove/one'| Remove one Product from current order
router.post('/remove/one', passport.authenticate('jwt', { session: false}), order.removeOne)

module.exports = router;