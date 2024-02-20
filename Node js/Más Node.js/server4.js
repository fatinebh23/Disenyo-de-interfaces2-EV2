// Utiliza  fs.readFileSync() para mostrar el contenido de un fichero en la web.
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

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

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
