const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Health Check
router.get('/health', (req, res) => {
    res.json({ status: 'ok', mode: 'avant-garde', version: '2.0.0' });
});

// Contact Endpoint
router.post('/contact', contactController.handleContactForm);

module.exports = router;
