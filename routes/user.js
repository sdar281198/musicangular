'use strict'
var express = require('express');
var UserController = require('../controllers/user');

var api = express.Router();

//crear ruta
api.get('/probando-controlador', UserController.pruebas);

module.exports = api;
