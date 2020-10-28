var express = require('express');
var router = express.Router();

var Role = require('../models/role.modelo');
var conexion = require('../database/database');

router.post('/', function (req, res) {

    let body = req.body;

    let role = new Role({
        nombre: body.nombre,
        descripcion: body.descripcion

    });

    role.save((error, nuevoRole) => {

        //if(error) return res.send(error);
        res.send(nuevoRole);
        res.end()
    });

});

router.get('/', (req, res) => {

    Role.find({}, { nombre: true, descripcion: true }).then(roles => {
        res.send(roles);
        res.end()
    });

});

router.get('/:idRole', (req, res) => {
    let idRole = req.params.idRole;
    Role.find({ _id: idRole }, { nombre: true, descripcion: true }).then(roles => {
        res.send(roles[0]);
        res.end()
    });

});


router.delete('/:idRole', (req, res) => {
    let idRole = req.params.idRole;
    Role.remove({ _id: idRole }).then(data => {
        res.send(data);
        res.end()
    });

});


module.exports = router;