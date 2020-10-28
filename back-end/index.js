var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
app.use( express.static(__dirname + '/public'));
app.use(cors());
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );


// Importar rutas

var rutaApp = require('./routes/app');
var rutaRole = require('./routes/role');
var rutaEmpresa = require('./routes/empresa');
var rutaCliente = require('./routes/cliente');
var rutaAdmin = require('./routes/admin');
var rutaPlan = require('./routes/plan');







// Usar la ruta

app.use( '/app', rutaApp );
app.use( '/roles', rutaRole );
app.use( '/empresa', rutaEmpresa );
app.use( '/cliente', rutaCliente );
app.use( '/admin', rutaAdmin );
app.use( '/plan', rutaPlan );







app.listen( 3000, () => {
    console.log('Servido corriendo en el puerto 3000 ')
});


