var mongoose = require("mongoose");

var servidor = "localhost:27017";
var nombreBaseDatos ="dbProyectoExpertos";

class Database{
    constructor(){
        this.conexionMongoAtlas();
    }

    conectar(){
        mongoose.connect(`mongodb://${servidor}/${nombreBaseDatos}`)
        .then(()=>{
            console.log("Se conecto a la base de datos...");
        })
        .catch(error=>{
            console.error(JSON.stringify(error));   
        });
    }

    conexionMongoAtlas(){
        mongoose.connect(`mongodb+srv://catherine:Cathy1234@proyectoexpertos.z08lb.mongodb.net/dbproyecto?retryWrites=true&w=majority`)
        .then(()=>{
            console.log("Se conecto a la base de datos...");
        })
        .catch(error=>{
            
            console.error(JSON.stringify(error));   
        });
    }
}


module.exports = new Database();
