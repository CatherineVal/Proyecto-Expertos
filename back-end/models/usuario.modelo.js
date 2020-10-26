var mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioEsquema = new Schema({

    nombre: { type: String },
    apellido: { type: String },
    email: { type: String },
    contrasenia: { type: String },
    direccion: { type: String },
    
  });

module.exports = mongoose.model('Usuario', usuarioEsquema);