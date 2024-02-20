// Obtén el id del proceso
const processId = process.pid;
const processTitle = process.title;
const nodeVersion = process.version;
const operatingSystem = process.plataform;

function proceso(params) {
    // Muestra la información por consola
console.log('ID del proceso:', processId);
console.log('Título del proceso:', processTitle);
console.log('Versión de Node.js:', nodeVersion);
console.log('Sistema Operativo:', operatingSystem);
}

module.exports = proceso;