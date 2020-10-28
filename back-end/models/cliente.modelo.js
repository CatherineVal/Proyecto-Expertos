var mongoose = require('mongoose');

let Schema = mongoose.Schema;

let esquema = new Schema({

    nombre: { type: String },
    apellido: { type: String },
    usuario: {type: String},
    correo: { type: String },
    contrasenia: { type: String },
    compras: { type: Array },
    estado:{type: Boolean, default:true}


});

module.exports = mongoose.model('Cliente', esquema);