var mongoose = require('mongoose');

let Schema = mongoose.Schema;

let esquema = new Schema({

    nombre: { type: String },
    descripcion: { type: String }

});

module.exports = mongoose.model('Role', esquema);