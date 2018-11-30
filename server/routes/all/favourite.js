const express = require('express');
const router = express.Router();

const passport = require('passport');

// Import Controllers
const favourite = require('../../controllers/favourite/favourite')

// Path: '/api/favourite/add'   | Add product to favourite list
router.post('/add', passport.authenticate('jwt', { session: false}), favourite.add)

// Path: '/api/favourie/remove/one' | Remove product from favourite list
router.post('/remove/one', passport.authenticate('jwt', { session: false}), favourite.removeOne)

// Path: '/api/favourie/remove/all' | Remove all product from favourite list
router.get('/remove/all', passport.authenticate('jwt', { session: false}), favourite.removeAll)

module.exports = router;