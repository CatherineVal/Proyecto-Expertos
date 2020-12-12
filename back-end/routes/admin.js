var express = require('express');
var router = express.Router();

var Admin = require('../models/admin.modelo');
var conexion = require('../database/database');

router.post('/', function (req, res) {

    let body = req.body;

    let admin = new Admin({
        nombre: body.nombre,
        apellido: body.apellido,
        correo: body.correo,
        contrasenia: body.contrasenia,
        estado: Boolean(body.estado),
        role: body.rol
    });

    admin.save((error, nuevoAdmin) => {

        if (error) return res.send(error);

        res.send(nuevoAdmin);
        res.end()
    });

});

router.get('/', (req, res) => {

    Admin.find().then(administradores => {
        res.send(administradores);
        res.end()
    });

});

router.get('/:idAdmin', (req, res) => {
    let idAdmin = req.params.idAdmin;
    Admin.find({ _id: idAdmin }, { nombre: true, apellido: true, correo: true, role: true }).then(administradores => {
        res.send(administradores[0]);
        res.end()
    });

});


// LOGIN

router.post('/login', function (req, res) {

    Admin.findOne({ correo: req.body.correo, contrasenia: req.body.contrasenia }, {})
        .then((data) => {
            res.json(data);
            res.end();
        })
        .catch((error) => {
            res.json(error);
            res.end();
        })
});



router.delete('/:idAdmin', (req, res) => {

    Admin.remove({ _id: req.params.idAdmin })
        .then((data) => {
            res.json(data);
            res.end();
        })
        .catch((erro) => {
            res.json(error);
            res.end();
        })
});

;





module.exports = router;