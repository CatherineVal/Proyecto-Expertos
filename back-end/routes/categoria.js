var express = require('express');
var router = express.Router();

var Categoria = require('../models/categoria.modelo');
var conexion = require('../database/database');

router.post('/', function (req, res) {

    let body = req.body;

    let categoria = new Categoria({
        nombre: body.nombre,
        descripcion: body.descripcion

    });

    categoria.save((error, nuevaCategoria) => {

        //if(error) return res.send(error);
        res.send(nuevaCategoria);
        res.end()
    });

});

router.get('/', (req, res) => {

    Categoria.find({}, { nombre: true, descripcion: true }).then(categorias => {
        res.send(categorias);
        res.end()
    });

});

router.get('/:idCategoria', (req, res) => {
    let idCategoria = req.params.idCategoria;
    Categoria.find({ _id: idCategoria }, { nombre: true, descripcion: true }).then(categorias => {
        res.send(categorias[0]);
        res.end()
    });

});


router.delete('/:idCategoria', (req, res) => {
    let idCategoria = req.params.idCategoria;
    Categoria.remove({ _id: idCategoria }).then(data => {
        res.send(data);
        res.end()
    });

});







module.exports = router;