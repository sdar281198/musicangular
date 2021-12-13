'use strict'
//Conexion a base de datos
var mongoose = require('mongoose');
//cargar app /fichero de carga central
var app = require ('./app');
//puerto
var port = process.env.PORT || 3977;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_mean2', (err, res) => {
  if (err) {
    throw err;

  }else {
    console.log('La conexion a la  base de datos esta corriendo correctamente...');
    //poner servidor a escuchar
    app.listen(port, function(){
      console.log("Servidor del api rest de musica escuchando en http://localhost:"+port);
    });
  }

});
