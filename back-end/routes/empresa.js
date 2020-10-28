var express = require('express');
var router = express.Router();

var Empresa = require('../models/empresa.modelo');
var conexion = require('../database/database');

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
        estado: true 

    });

    empresa.save( (error, nuevaEmpresa) => {

        //if(error) return res.send(error);
        res.send(nuevaEmpresa);
        res.end()
    });

});

router.get('/',(req, res)=>{

    Empresa.find({},{nombre: true, descripcion: true, correo:true, direccion:true, plan:true, rtn: true}).then( empresas => {
        res.send(empresas);
        res.end();
    });

});



router.get('/:idEmpresa',(req, res)=>{
    let idEmpresa = req.params.idEmpresa;

    Empresa.find({_id:idEmpresa},{nombre:true, descripcion:true, rtn:true, correo:true, direccion:true, plan:true, productos: true, banco:true }).then( empresas => {
        res.send(empresas[0]);
        res.end();
    });

});






module.exports = router;