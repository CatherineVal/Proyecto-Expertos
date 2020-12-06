var express = require('express');
var router = express.Router();

var Empresa = require('../models/empresa.modelo');
var conexion = require('../database/database');
var mongoose = require('mongoose');

router.post( '/', function(req, res){

    let body = req.body;

    let empresa = new Empresa({
        nombre: body.nombre,
        descripcion : body.descripcion,
        rtn: body.rtn,
        correo: body.correo,
        contrasenia: body.contrasenia,
        direccion: body.direccion,  
        banco: [],
        productos:[],
        plan: body.plan,
        estado: true, 
        paginas:[],

    });

    empresa.save( (error, nuevaEmpresa) => {

        //if(error) return res.send(error);
        res.send(nuevaEmpresa);
        res.end()
    });

});

router.get('/',(req, res)=>{

    Empresa.find({},{nombre: true, descripcion: true, paginas:true, correo:true, direccion:true, plan:true, rtn: true, productos:true, estado: true, banco: true}).then( empresas => {
        res.send(empresas);
        res.end();
    });

});



router.get('/:idEmpresa',(req, res)=>{
    let idEmpresa = req.params.idEmpresa;

    Empresa.find({_id:idEmpresa},{nombre:true, descripcion:true, paginas:true, rtn:true, correo:true, direccion:true, plan:true, estado: true, productos: true, banco:true, productos: true}).then( empresas => {
        res.send(empresas[0]);
        res.end();
    });

});

//agregar productos
router.post('/:idEmpresa/productos', function (req, res) {

    let body = req.body;
    let idEmpresa = req.params.idEmpresa;

    Empresa.update(
        {
            _id: idEmpresa,
        },
        {
            $push: {
                "productos": {
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


//agregar paginas
router.post('/:idEmpresa/paginas', function (req, res) {

    let body = req.body;
    let idEmpresa = req.params.idEmpresa;

    Empresa.update(
        {
            _id: idEmpresa,
        },
        {
            $push: {
                "paginas": {
                    _id: mongoose.Types.ObjectId(),
                    nombre: body.nombre,
                    descripcion: body.descripcion,
                    palabraClave: body.palabraClave,
                    encabezado: body.encabezado,
                    piePage: body.piePage,
                    urlLogo: body.urlLogo,
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


//eliminar productos
router.delete('/:idEmpresa/productos/eliminar/:idProducto', function (req, res) {

    let body = req.body;
    let idEmpresa = req.params.idEmpresa;
    let idProducto = req.params.idProducto;

    Empresa.update(
        {
            _id: idEmpresa,

        },
        {
            $pull: {
                "productos": { _id: mongoose.Types.ObjectId(idProducto) }
            }
        }
    ).then(result => {
        res.send({result, mensaje:'Producto eliminado con exito'});
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
});

//eliminar paginas
router.delete('/:idEmpresa/pagina/eliminar/:idPagina', function (req, res) {

    let body = req.body;
    let idEmpresa = req.params.idEmpresa;
    let idPagina = req.params.idPagina;

    Empresa.update(
        {
            _id: idEmpresa,

        },
        {
            $pull: {
                "paginas": { _id: mongoose.Types.ObjectId(idPagina) }
            }
        }
    ).then(result => {
        res.send({result, mensaje:'Pagina eliminada con exito'});
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
});


router.delete('/:idEmpresa', (req, res) => {

Empresa.remove({ _id: req.params.idEmpresa })
        .then((data) => {
            res.json(data);
            res.end();
        })
        .catch((erro) => {
            res.json(error);
            res.end();
        })
});

//agregar Imagenes
router.post('/image/:idEmpresa', function (req, res) {

    let body = req.body;
    let idEmpresa = req.params.idEmpresa;

    Empresa.update(
        {
            _id: idEmpresa,
        },
        {
            $push: {
                "banco": {
                    _id: mongoose.Types.ObjectId(),
                    nombre: body.nombre,
                    tipo: body.tipo,
                    url: body.url
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

module.exports = router;