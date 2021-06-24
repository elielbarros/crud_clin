const router = require('./routes/index');

//Responsavel por rotas, Requests, Responses... Funciona como SERVLET
const express = require('express');

//Responsavel por renderizar as Views
const mustache = require('mustache-express');

const app = express();

//Configurações de lei
//Mostra qual eh a pasta publica, dentro contem imagens, css...
//pasta que pode ser acessada de qualquer lugar
app.use(express.static(__dirname + '/public'));

//Torna acessivel o uso de json no express
app.use(express.json());
//CONFIGURAÇÃO
app.use(express.urlencoded({extended:true}));

//Configura mustache
//mst - extensao do mustache
//views/partials - headers, footers, navBars, feito em um lugar soh, configurado para varios
app.set('view engine', 'mst');
app.set('views', __dirname + '/views');
app.engine('mst', mustache(__dirname + '/views/partials', '.mst'));

//Use o ROUTER pra cuidar das rotas
app.use('/', router);

module.exports = app;