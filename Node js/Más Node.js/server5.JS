const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
const os = require('os');

// Obtén el id del proceso
const processId = process.pid;

// Obtén el título del proceso (nombre del script en ejecución)
const processTitle = process.title;

// Obtén la versión de Node.js
const nodeVersion = process.version;

// Obtén el sistema operativo
const operatingSystem = os.type();

// Muestra la información por consola
console.log('ID del proceso:', processId);
console.log('Título del proceso:', processTitle);
console.log('Versión de Node.js:', nodeVersion);
console.log('Sistema Operativo:', operatingSystem);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);});
