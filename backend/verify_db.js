const http = require('http');
console.log('Sending Contact Form Data...');
const data = JSON.stringify({
  name: 'SQLite Test User',
  email: 'test@sqlite.com',
  company: 'SQLite Inc.',
  message: 'Testing SQLite persistence.'
});
const req = http.request({
  hostname: 'localhost',
  port: 3000,
  path: '/api/contact',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}, (res) => {
  console.log('Status:', res.statusCode);
  res.on('data', (d) => process.stdout.write(d));
});
req.on('error', (e) => console.error(e));
req.write(data);
req.end();
