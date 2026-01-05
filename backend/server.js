const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const compression = require('compression'); // Compression middleware
const hpp = require('hpp'); // Prevent HTTP Parameter Pollution
const logger = require('./utils/logger');
const AppError = require('./utils/appError'); // Importar AppError

const app = express();
const PORT = process.env.PORT || 3000;

// --- Environment Variable Validation ---
const requiredEnvVars = [
  'EMAIL_USER',
  'EMAIL_PASS',
  'CONTACT_EMAIL_RECIPIENT',
  'FRONTEND_URL',
  'GOOGLE_MAPS_API_KEY',
];

requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    logger.error(`Error: Missing required environment variable: ${envVar}`);
    process.exit(1); // Exit the process if a critical env var is missing
  }
});

// --- Security Middleware ---
app.use(helmet({
  contentSecurityPolicy: false, // Disable CSP for Development/React compatibility
}));
app.use(hpp()); // Prevent HTTP Parameter Pollution

// --- Performance Middleware ---
app.use(compression()); // Compress all responses

const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(',')
  : ['http://localhost:3000'];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api', apiLimiter);

// --- Body Parsers ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRoutes = require('./routes/api');

// --- Template Engine Setup (Legacy/Fallback) ---
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend/views'));

// --- Application Routes ---
// Mount API routes BEFORE the catch-all
app.use('/api', apiRoutes);

// --- Servir archivos estáticos del Frontend (React Build) ---
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// --- Catch-all for React Router (SPA Mode) ---
app.get('*', (req, res, next) => {
    // If request accepts html or is a direct navigation, serve index.html
    const isApi = req.path.startsWith('/api');
    if (!isApi && req.accepts('html')) {
        res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
    } else {
        // If it's an API request or something else that wasn't found
        next(new AppError(`No se puede encontrar ${req.originalUrl} en este servidor!`, 404));
    }
});

// --- Error Handling Middleware ---
const globalErrorHandler = require('./utils/errorHandler');
app.use(globalErrorHandler);

// Exportar la app para las pruebas
module.exports = app;

// --- Iniciar el Servidor ---
// Solo iniciar el servidor si el archivo se ejecuta directamente
if (require.main === module) {
  const sequelize = require('./config/database');

  // Sincronizar la base de datos antes de iniciar el servidor
  sequelize
    .sync()
    .then(() => {
      logger.info('Base de datos sincronizada (SQLite)');
      const server = app.listen(PORT, () => {
        logger.info(`Servidor backend corriendo en http://localhost:${PORT}`);
        logger.info(
          'Sirviendo el frontend desde la carpeta: ',
          path.join(__dirname, '../frontend')
        );
      });

      // --- Manejo de Cierre Graceful ---
      const gracefulShutdown = (signal) => {
        process.on(signal, () => {
          logger.info(`${signal} recibido. Cerrando el servidor...`);
          server.close(() => {
            logger.info('Servidor cerrado.');
            process.exit(0);
          });
        });
      };

      gracefulShutdown('SIGTERM');
      gracefulShutdown('SIGINT');
    })
    .catch((err) => {
      logger.error('Error al sincronizar la base de datos:', err);
    });
}
