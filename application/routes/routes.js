const express = require('express');

// Routes
const score = require('./api/score.routes');

let router = express.Router();

// Healthy check
router.get('/', (_, res) => res.send('API :)'));

router.use('/score', score);


module.exports = router;
