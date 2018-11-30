const express = require('express');
const router = express.Router();

const passport = require('passport');

// Import Controllers
const favourite = require('../../controller/favourite/favourite')

// Path: '/api/favourite/add'   | Add product to favourite list
router.post('/add', passport.authenticate('jwt', { session: false}), favourite.add)

// Path: '/api/favourie/remove' | Remove product from favourite list
router.post('/remove', passport.authenticate('jwt', { session: false}), favourite.remove)

module.exports = router;