var mongoose = require('mongoose');

let Schema = mongoose.Schema;

let esquema = new Schema({

    nombre: { type: String },
    rtn: { type: String },
    correo: { type: String },
    contrasenia: { type: String },
    direccion: { type: String },
    banco: { type: Array },
    productos: { type: Array },
    plan: { type: String },
    estado: { type: Boolean, default: true},
    descripcion : {type: String},
    paginas : {type: Array},
    categorias : {type: Array}

});

module.exports = mongoose.model('Empresa', esquema);