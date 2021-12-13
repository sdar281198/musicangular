'use strict'
//librerias//Importando librerias
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Cargar rutas


//Comandos necesarios para que bodyParser funcioone
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Configurar cabeceras HTTP

//Cargar de rutas base

//Ejemplo de metodo
app.get('/pruebas', function(req, res){
  res.status(200).send({message: 'Bienvenido a spotify2'});


});

//Exportamos modulo
module.exports = app;
