// backend/controllers/contactController.js
const nodemailer = require('nodemailer');
const { validationResult } = require('express-validator');
const logger = require('../utils/logger');

const catchAsync = require('../utils/catchAsync'); // Import catchAsync

// Usamos un manejador async para poder usar await
const handleContactForm /* eslint-disable-line no-unused-vars */ = catchAsync(
  async (req, res, next /* eslint-disable-line no-unused-vars */) => {
    // Manejar resultados de la validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      logger.warn('Validation errors in contact form:', errors.array());
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, email, message, company } = req.body;

    // express-validator already handles trimming and escaping.
    // No need for DOMPurify here as input is treated as plain text.
    const sanitizedName = name;
    const sanitizedEmail = email;
    const sanitizedMessage = message;
    const sanitizedCompany = company || 'No especificada';

    // --- Configuración de Nodemailer con credenciales de entorno ---
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.ethereal.email',
      port: process.env.EMAIL_PORT || 587,
      secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Usuario de variable de entorno
        pass: process.env.EMAIL_PASS, // Contraseña de variable de entorno
      },
    });

    // Contenido del email
    const mailOptions = {
      from: `"${sanitizedName}" <${sanitizedEmail}>`, // Remitente (el que llena el formulario)
      to: process.env.CONTACT_EMAIL_RECIPIENT || 'info@agenciadigital.com', // Destinatario (tú o tu empresa)
      subject: `Nuevo Mensaje de Contacto de ${sanitizedCompany || sanitizedName}`,
      html: `
            <h2>Nuevo Mensaje del Formulario de Contacto</h2>
            <p><strong>Nombre:</strong> ${sanitizedName}</p>
            <p><strong>Email:</strong> ${sanitizedEmail}</p>
            <p><strong>Empresa:</strong> ${sanitizedCompany}</p>
            <hr>
            <h3>Mensaje:</h3>
            <p>${sanitizedMessage}</p>
        `,
    };

    // Enviar el correo
    let info = await transporter.sendMail(mailOptions);

    logger.info('Mensaje enviado: %s', info.messageId);
    if (process.env.NODE_ENV === 'development') {
      logger.info('URL de vista previa: %s', nodemailer.getTestMessageUrl(info));
    }

    // Envía una respuesta de éxito
    res.status(200).json({
      success: true,
      message: `Gracias por tu mensaje, ${sanitizedName}. Nos pondremos en contacto contigo pronto.`,
    });
  }
);

module.exports = {
    handleContactForm,
};
