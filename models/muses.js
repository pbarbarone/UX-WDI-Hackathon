var mongoose = require('mongoose');

var museSchema = new mongoose.Schema({
	videoUrl: String,
	memeUrl:String
});

var Muses = mongoose.model('Muses', museSchema);

module.exports = Muses;