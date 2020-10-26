var mongoose = require('mongoose');

let Schema = mongoose.Schema;

let roleEsquema = new Schema({

    nombre: { type: String },
    idEmpresa: { type: String }

});

module.exports = mongoose.model('Role', roleEsquema);