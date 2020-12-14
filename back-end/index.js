var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
app.use( express.static(__dirname + '/public'));
app.use(cors());
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );

app.set('puerto', process.env.PORT || 3000);

// Importar rutas

var rutaApp = require('./routes/app');
var rutaRole = require('./routes/role');
var rutaEmpresa = require('./routes/empresa');
var rutaCliente = require('./routes/cliente');
var rutaAdmin = require('./routes/admin');
var rutaPlan = require('./routes/plan');
var rutaCategoria = require('./routes/categoria');
var rutaContenido = require('./routes/contenido');


// Usar la ruta

app.use( '/app', rutaApp );
app.use( '/roles', rutaRole );
app.use( '/empresa', rutaEmpresa );
app.use( '/cliente', rutaCliente );
app.use( '/admin', rutaAdmin );
app.use( '/plan', rutaPlan );
app.use( '/categoria', rutaCategoria );
app.use( '/contenido', rutaContenido );


app.listen( app.get('puerto'), () => {
    console.log('Servido corriendo en el puerto : ' + app.get('puerto'));
});


