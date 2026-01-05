const express = require('express');
const pageRoutes = require('./pages');
const contactRoutes = require('./contact');

const router = express.Router();

router.use('/', pageRoutes);
router.use('/api', contactRoutes);

module.exports = router;
