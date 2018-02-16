var mongoose = require('mongoose');

var stressSchema = new mongoose.Schema({

	videoUrl: String,

	memeUrl:String
});

var Stresses = mongoose.model('Stresses', stressSchema);

module.exports = Stresses;