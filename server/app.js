// server/app.js
const express = require('express');
const path = require('path');

const app = express();

// Server static assets
app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.js'));
});

module.exports = app;