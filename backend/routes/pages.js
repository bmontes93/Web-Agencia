// backend/routes/pages.js

const express = require('express');
const router = express.Router();
const pagesController = require('../controllers/pagesController');

// Rutas para páginas principales y de índice
router.get('/', pagesController.getHomePage);
router.get('/contacto', pagesController.getContactPage);
router.get('/servicios', pagesController.getServicesPage);
router.get('/casos-de-exito', pagesController.getCasosDeExitoPage);
router.get('/nosotros', pagesController.getNosotrosPage);
router.get('/recursos', pagesController.getRecursosPage);

// Rutas dinámicas para páginas de detalle
router.get('/servicios/:slug', pagesController.getDetailPage);
router.get('/casos-de-exito/:slug', pagesController.getDetailPage);
router.get('/recursos/:slug', pagesController.getDetailPage);

module.exports = router;
