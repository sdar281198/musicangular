'use strict'
//librerias//Importando librerias
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Cargar rutas
var user_routes = require('./routes/user');


//Comandos necesarios para que bodyParser funcioone
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Configurar cabeceras HTTP

//Cargar de rutas base//Middleware
app.use('/api', user_routes);

//Exportamos modulo
module.exports = app;
