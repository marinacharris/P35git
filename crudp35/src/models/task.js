const mongoose = require('mongoose');
const {Schema} = mongoose;

//Esquema, es la forma como lucen los datos
const articulos_esq = new Schema({
    _id: String,
    descripcion: String,
    precio: Number
});


//Modelo, permite realizar operaciones crud
module.exports = mongoose.model('articulos', articulos_esq);