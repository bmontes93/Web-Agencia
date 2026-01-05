const request = require('supertest');
jest.mock('nodemailer');
const app = require('../server'); // Adjusted path to the exported app

describe('Endpoints Principales', () => {
  it('debería cargar la página de inicio con el contenido correcto', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('<title>Agencia de Crecimiento Digital</title>');
    expect(res.text).toContain(
      '<h1>Escalamos tu Negocio con Estrategias de Crecimiento Digital Basadas en Datos</h1>'
    );
  });

  it('debería cargar la página de contacto con el contenido correcto', async () => {
    const res = await request(app).get('/contacto');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('<title>Contacto - Agencia de Crecimiento Digital</title>');
    expect(res.text).toContain('<h1>Hablemos</h1>');
  });

  it('debería devolver 404 para una ruta inexistente', async () => {
    const res = await request(app).get('/ruta-que-no-existe');
    expect(res.statusCode).toEqual(404);
  });
});

describe('API de Contacto - POST /api/contact', () => {
  // Mock para nodemailer para no enviar emails reales durante las pruebas
  const nodemailer = require('nodemailer');
  const sendMailMock = jest.fn().mockResolvedValue({ messageId: 'test-id' });
  nodemailer.createTransport.mockReturnValue({ sendMail: sendMailMock });
  nodemailer.getTestMessageUrl.mockReturnValue('http://test-url.com');

  beforeEach(() => {
    // Limpiar mocks antes de cada prueba
    sendMailMock.mockClear();
  });

  it('debería enviar el formulario de contacto con datos válidos', async () => {
    const res = await request(app).post('/api/contact').send({
      name: 'Test User',
      email: 'test@example.com',
      message: 'Este es un mensaje de prueba.',
      company: 'Test Inc.',
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(res.body.message).toContain('Gracias por tu mensaje');
    expect(sendMailMock).toHaveBeenCalledTimes(1);
  });

  it('debería devolver un error 400 si el nombre está vacío', async () => {
    const res = await request(app).post('/api/contact').send({
      email: 'test@example.com',
      message: 'Mensaje de prueba.',
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body.success).toBe(false);
    expect(res.body.errors[0].path).toBe('name');
    expect(sendMailMock).not.toHaveBeenCalled();
  });

  it('debería devolver un error 400 si el email es inválido', async () => {
    const res = await request(app).post('/api/contact').send({
      name: 'Test User',
      email: 'email-invalido',
      message: 'Mensaje de prueba.',
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body.success).toBe(false);
    expect(res.body.errors[0].path).toBe('email');
    expect(sendMailMock).not.toHaveBeenCalled();
  });

  it('debería devolver un error 400 si el mensaje está vacío', async () => {
    const res = await request(app).post('/api/contact').send({
      name: 'Test User',
      email: 'test@example.com',
      message: '',
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body.success).toBe(false);
    expect(res.body.errors[0].path).toBe('message');
    expect(sendMailMock).not.toHaveBeenCalled();
  });
});

describe('Security Middleware', () => {
  it('debería bloquear una petición de un origen no permitido por CORS', async () => {
    const res = await request(app).post('/api/contact').set('Origin', 'http://evil.com').send({
      name: 'Test User',
      email: 'test@example.com',
      message: 'Este es un mensaje de prueba.',
    });

    // Las peticiones bloqueadas por CORS no devuelven un status code estándar,
    // sino que terminan en un error a nivel de red. Supertest lo captura como un error.
    // Por lo tanto, en lugar de esperar un código de estado, verificamos que la petición falle.
    // El comportamiento exacto puede variar, pero una petición exitosa (200) indicaría un fallo en la seguridad.
    expect(res.statusCode).not.toEqual(200);
  });

  it('debería incluir cabeceras de rate limiting en las respuestas de la API', async () => {
    // El rate limiter se aplica a /api, por lo que debemos usar una ruta que coincida
    const apiRes = await request(app).post('/api/contact').send({});

    expect(apiRes.headers).toHaveProperty('ratelimit-limit');
    expect(apiRes.headers).toHaveProperty('ratelimit-remaining');
  });
});
