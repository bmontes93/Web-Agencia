const fs = require('fs/promises');
const path = require('path');
const logger = require('../utils/logger');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

// Helper function to read page data from JSON files
const getPageData = async (pageSlug) => {
  const filePath = path.join(__dirname, '../data/content', `${pageSlug}.json`);
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    logger.error(`Error reading page data for ${pageSlug}:`, error);
    if (error.code === 'ENOENT') {
      throw new AppError('Página no encontrada', 404);
    }
    throw new AppError('Error interno del servidor al leer los datos de la página', 500);
  }
};

// Helper function to render pages with common data
const renderPage = (res, pageInfo) => {
  res.render(pageInfo.view, {
    ...pageInfo,
    title: `${pageInfo.title} - Agencia de Crecimiento Digital`,
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    NODE_ENV: process.env.NODE_ENV,
  });
};

// --- Main Pages ---
const getHomePage = catchAsync(async (req, res, next) => {
  const pageInfo = await getPageData('home');
  renderPage(res, pageInfo);
});

const getContactPage = catchAsync(async (req, res, next) => {
  const pageInfo = await getPageData('contacto');
  renderPage(res, pageInfo);
});

const getServicesPage = catchAsync(async (req, res, next) => {
  const pageInfo = await getPageData('servicios/index');
  renderPage(res, pageInfo);
});

const getCasosDeExitoPage = catchAsync(async (req, res, next) => {
  const pageInfo = await getPageData('casos-de-exito/index');
  renderPage(res, pageInfo);
});

const getNosotrosPage = catchAsync(async (req, res, next) => {
  const pageInfo = await getPageData('nosotros');
  renderPage(res, pageInfo);
});

const getRecursosPage = catchAsync(async (req, res, next) => {
  const pageInfo = await getPageData('recursos/index');
  renderPage(res, pageInfo);
});

// --- Generic Detail Page Handler ---
const getDetailPage = catchAsync(async (req, res, next) => {
  const { slug } = req.params;
  const category = req.baseUrl.substring(1); // Remove leading '/'
  const pageKey = `${category}/${slug}`;

  const pageInfo = await getPageData(pageKey);
  renderPage(res, pageInfo);
});

module.exports = {
  getHomePage,
  getContactPage,
  getServicesPage,
  getCasosDeExitoPage,
  getNosotrosPage,
  getRecursosPage,
  getDetailPage,
};
