const os = require('os');
console.log('La memoria total del equipo es: '+os.totalmem());
console.log('La memoria libre del equipos es: '+os.freemem());
console.log('El sistema operativo es: '+ os.platform());
