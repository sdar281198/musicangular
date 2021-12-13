'use strict'

var bcrypt = require('bcrypt-nodejs');//modulo para encriptar contraseñas
var User = require('../models/user');

function pruebas(req, res){
  res.status(200).send({
    message: 'Probando una accion del controlador de usuarios del apirest con node y mongo'
  });

}

function saveUser(req, res){
  var user = new User();

  var params = req.body;//Recoger todos los datos que vienen por post

  console.log(params);

  user.name = params.name;
  user.surname = params.surname;
  user.email = params.email;
  user.role = 'ROLE_USER';
  user.image = 'null';

  if(params.password){
    //Encriptar contraseña y guardar datos
    bcrypt.hash(params.password, null, null, function(err, hash){
      user.password = hash;
      if (user.name != null && user.surname != null && user.email != null) {
        //Guardar usuario
        user.save((err, userStored) => {
          if(err){
            res.status(500).send({message: 'Error al guardar el usuario'});

          }else{
            if (!userStored) {
              res.status(200).send({message: 'Probando una accion del controlador de usuarios del apirest con node y mongo'});

            }else{
              res.status(200).send({user: userStored});
            }

          }
        });

      }else{
        res.status(200).send({message: 'Rellena todos los campos'});

      }

    });
  }else{
    res.status(500).send({message: 'Introduce la contraseña'});
  }

}

function loginUser(req, res){
  var params = req.body;

  var email = params.email;

  var password = params.password;
//Buscar usuarios con mismo email
  User.findOne({email: email.toLowerCase()}, (err, user) => {
    if(err){
      res.status(500).send({message: 'Error en la peticion'});
    }else{
      if (!user) {
        res.status(404).send({message: 'El usuario no existe'});

      }else {
        //Comprobar la contraseña
        bcrypt.compare(password, user.password, function(err, check){
          if (check) {
            //Devolver los datos del usuario logueado
            if (params.gethash) {
              //Devolver un token de JWT

            }else{
              res.status(200).send({user});
            }


          }else {
            res.status(404).send({message: 'No se pudo loguear'});
          }


        });

      }
    }
  });

}
module.exports = {
  pruebas,
  saveUser,
  loginUser
};
