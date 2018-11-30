const express = require('express');
const router = express.Router();
const passport = require('passport');

// Import Controllers
const reply = require('../../controllers/reply/reply');

// Path: '/api/reply/new'   | Post New Comment
router.post('/new', passport.authenticate('jwt', { session: false }), reply.new)

// Path: '/api/reply/sub'   | Post New sub-reply
router.post('/sub', passport.authenticate('jwt', { session: false }), reply.sub)

// Path: '/api/reply/load'  | Load all reply of current Product
router.post('/load', reply.load)

module.exports = router;