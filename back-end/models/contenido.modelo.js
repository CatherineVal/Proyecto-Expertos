var mongoose = require('mongoose');

let Schema = mongoose.Schema;

let esquema = new Schema({

    idEmpresa: { type: String },
    idPagina: { type: String },
    contenido: { type: String },
   

});

module.exports = mongoose.model('contenido', esquema);