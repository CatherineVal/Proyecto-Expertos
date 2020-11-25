var express = require('express');
var router = express.Router();

var Cliente = require('../models/cliente.modelo');
var conexion = require('../database/database');
var mongoose = require('mongoose');



router.post('/', function (req, res) {

    let body = req.body;

    let cliente = new Cliente({
        nombre: body.nombre,
        apellido: body.apellido,
        usuario: body.usuario,
        correo: body.correo,
        contrasenia: body.contrasenia,
        compras: [],
        estado: Boolean(body.estado)
    });

    cliente.save((error, nuevoCliente) => {

        //if(error) return res.send(error);
        res.send(nuevoCliente);
        res.end()
    });

});

router.get('/', (req, res) => {

    Cliente.find({}, { nombre: true, apellido: true, usuario: true, correo: true, compras: true, estado: true }).then(clientes => {
        res.send(clientes);
        res.end()
    });

});


router.get('/:idCliente', (req, res) => {
    let idCliente = req.params.idCliente;
    Cliente.find({ _id: idCliente }, { nombre: true, apellido: true, usuario: true, correo: true, compras: true, estado:true }).then(clientes => {
        res.send(clientes[0]);
        res.end()
    });

});


router.delete('/:idCliente', (req, res) => {

    Cliente.remove({ _id: req.params.idCliente })
        .then((data) => {
            res.json(data);
            res.end();
        })
        .catch((erro) => {
            res.json(error);
            res.end();
        })
});

// Agreagar priductos a cliete

//Agregar producto
router.post('/:idCliente/compras', function (req, res) {

    let body = req.body;
    let idCliente = req.params.idCliente;

    Cliente.update(
        {
            _id: idCliente,
        },
        {
            $push: {
                "compras": {
                    _id: mongoose.Types.ObjectId(),
                    nombre: body.nombreProducto,
                    descripcion: body.descripcion,
                    precio: body.precio
                }
            }
        }
    ).then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
});


router.post('/:idCliente/compras/eliminar/:idProducto', function (req, res) {

    let body = req.body;
    let idCliente = req.params.idCliente;
    let idProducto = req.params.idProducto;

    Cliente.update(
        {
            _id: idCliente,

        },
        {
            $pull: {
                "compras": { _id: mongoose.Types.ObjectId(idProducto) }
            }
        }
    ).then(result => {
        res.send({ result, mensaje: 'Producto eliminado con exito' });
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
});



module.exports = router;