// Contato.js
var mongoose = require('mongoose');

var ActivitySchema = new mongoose.Schema({
  summary: String,
  description: String,
  time: {type: Number, default: 1},
});

mongoose.model('Activity', ActivitySchema);
