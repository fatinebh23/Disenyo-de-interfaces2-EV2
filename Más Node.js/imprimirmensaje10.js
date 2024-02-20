
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

function imprimirMensaje10(params) {
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
      
        // Bucle para imprimir el mensaje diez veces
        for (let i = 0; i < 10; i++) {
          console.log('Node.js es muy chulo');
        }
      
        res.end(); // Finaliza la respuesta
      });
      
      server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
      });
}
module.exports = imprimirMensaje10;