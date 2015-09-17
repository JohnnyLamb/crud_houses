var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var House = new Schema({
  location:String,
  price:Number,
  garage:Boolean
});

mongoose.connect(process.env.MONGOLAB_URI||'mongodb://localhost/houses');

module.exports = mongoose.model('houses', House);

