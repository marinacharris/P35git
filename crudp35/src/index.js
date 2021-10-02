const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/crudp35a')
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.error(err))


//configuración del puerto
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'),()=>{
    console.log("Server en puerto #", app.get('port'))
});

//Archivos estáticos
//console.log(__dirname+'\\public')
app.use(express.static(__dirname+'\\public'));

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(require('./routes/tasks'))

