// mostrarContenido.js

const http = require('http');
const fs = require('fs');

function mostrarContenido() {
  const server = http.createServer((req, res) => {
    try {
      const contenido = fs.readFileSync('archivo.txt', 'utf8');
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(contenido);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error al leer el archivo.');
    }
  });

  server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
  });
}

module.exports = mostrarContenido;