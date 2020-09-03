const express = require('express');

// Routes
const start = require('./api/start.routes');

let router = express.Router();

// Healthy check
router.get('/', (_, res) => res.send('API :)'));

router.use('/', start);

module.exports = router;
