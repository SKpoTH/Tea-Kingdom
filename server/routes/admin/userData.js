const express = require('express');
const router = express.Router();

const passport = require('passport');

// Import Controller
const userDataAdmin = require('../../controller/userData/userData-admin');

// Path: '/api/admin/userData/load/all' | Load All user
router.get('/load/all', passport.authenticate('jwt', { session: false }), userDataAdmin.loadAll)

// Path: '/api/admin/userData/update'   | update the user role
router.post('/update', passport.authenticate('jwt', { session: false }), userDataAdmin.update)

module.exports = router;