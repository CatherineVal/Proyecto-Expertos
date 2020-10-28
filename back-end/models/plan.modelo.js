var mongoose = require('mongoose');

let Schema = mongoose.Schema;

let esquema = new Schema({

    nombrePlan: { type: String },
    descripcion: { type: String },
    precio: { type: String}


});

module.exports = mongoose.model('Plan', esquema);