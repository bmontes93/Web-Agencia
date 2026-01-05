// backend/routes/contact.js

const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const contactController = require('../controllers/contactController');

// Ruta para el formulario de contacto
// Corresponde a POST /api/contact
router.post(
  '/contact',
  [
    body('name').trim().notEmpty().withMessage('El nombre es requerido.').escape(),
    body('email').isEmail().withMessage('Debe ser un email válido.').normalizeEmail().escape(),
    body('message').trim().notEmpty().withMessage('El mensaje es requerido.').escape(),
    body('company').optional().trim().escape(), // Opcional, solo sanitizar
  ],
  contactController.handleContactForm
);

module.exports = router;
