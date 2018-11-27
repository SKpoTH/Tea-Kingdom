const express = require('express');
const router = express.Router();

const passport = require('passport')

// Import Controller
const trackingAdmin = require('../../controller/tracking/tracking-admin');

// Path: '/api/admin/tracking/load'     | Load Data 
router.get('/load', passport.authenticate('jwt', { session: false }), trackingAdmin.load)

// Path: '/api/admin/tracking/update'   | Change the state of tracking
router.post('/update', passport.authenticate('jwt', { session: false }), trackingAdmin.update)

module.exports = router;