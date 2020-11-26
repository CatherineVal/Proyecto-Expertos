var express = require('express');
var router = express.Router();

var Plan = require('../models/plan.modelo');
var conexion = require('../database/database');

router.post( '/', function(req, res){

    let body = req.body;

    let plan = new Plan({
        nombrePlan: body.nombrePlan,
        descripcion : body.descripcion,
        precio: body.precio
    });

    plan.save( (error, nuevoPlan ) => {

        //if(error) return res.send(error);
        res.send(nuevoPlan);
        res.end()
    });

});

router.get('/',(req, res)=>{

    Plan.find({},{nombrePlan:true, descripcion:true, precio:true}).then( planes => {
        res.send(planes);
        res.end()
    });

});

router.get('/:idPlan',(req, res)=>{
    let idPlan = req.params.idPlan;
    Plan.find({_id:idPlan},{nombrePlan:true, descripcion:true, precio:true}).then( planes => {
        res.send(planes[0]);
        res.end()
    });

});


router.delete('/:idPlan', (req, res) => {

    Plan.remove({ _id: req.params.idPlan })
        .then((data) => {
            res.json(data);
            res.end();
        })
        .catch((erro) => {
            res.json(error);
            res.end();
        })
});
module.exports = router;