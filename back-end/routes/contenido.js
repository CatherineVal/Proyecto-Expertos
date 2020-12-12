var express = require('express');
var router = express.Router();

var Contenido = require('../models/contenido.modelo');
var conexion = require('../database/database');
const { mongoose } = require('mongoose');

router.post('/', function (req, res) {

    let body = req.body;

    let contenido = new Contenido({
        idEmpresa: body.idEmpresa,
        idPagina: body.idPagina,
        contenido: body.contenido

    });

    contenido.save((error, nuevoContenido) => {

        //if(error) return res.send(error);
        res.send(nuevoContenido);
        res.end()
    });

});

router.get('/', (req, res) => {

    Contenido.find({}, { idEmpresa: true, idPagina: true, contenido: true }).then(contenidos => {
        res.send(contenidos);
        res.end()
    });

});


router.get('/:idEmpresa/contenido/:idPagina', (req, res) => {

    Contenido.findOne({ idPagina: req.params.idEmpresa, idPagina: req.params.idPagina }, {}).then(contenidos => {
        res.send(contenidos);
        res.end()
    });

});

router.get('/:idContenido', (req, res) => {
    let idContenido = req.params.idRole;
    Contenido.find({ _id: idContenido }, { idEmpresa: true, idPagina: true, contenido: true }).then(contenidos => {
        res.send(contenidos[0]);
        res.end()
    });

});


router.put('/:idContenido', (req, res) => {

    let idContenido = req.params.idContenido;

    Contenido.update({ _id: idContenido }, {
        contenido: req.body.contenido
    }).then(data => {
        res.send(data);
        res.end()
    });

});


module.exports = router;