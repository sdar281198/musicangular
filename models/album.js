'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlbumSchema = Schema({
  title: String,
  description: String,
  year:String,
  image:String,
  artist:{type: Schema.ObjectId, ref: 'Artist'}//referenciando al id de artista

});
module.exports = mongoose.model('Album', AlbumSchema);
