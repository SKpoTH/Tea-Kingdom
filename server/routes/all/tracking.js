const express = require('express');
const router = express.Router();

const passport = require('passport')

// Import Controller
const tracking = require('../../controllers/tracking/tracking-all')

// Path: '/api/tracking/load'   | Load Data
router.get('/load', passport.authenticate('jwt', { session: false}), tracking.load)

module.exports = router;