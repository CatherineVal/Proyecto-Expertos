var mongoose = require('mongoose');

let Schema = mongoose.Schema;

let esquema = new Schema({

    nombre: { type: String },
    apellido: { type: String },
    correo: { type: String },
    contrasenia: { type: String },
    role: { type: String },
    estado: { type: Boolean , default:true}
    

});

module.exports = mongoose.model('Admin', esquema);