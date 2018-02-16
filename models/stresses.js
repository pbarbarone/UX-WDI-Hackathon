var mongoose = require('mongoose');

var stressSchema = new mongoose.Schema({
	videos: [{
				videoUrl: String,
			}],
	memes: [{
						memeUrl:String,
					}],
});

var Stresses = mongoose.model('Stresses', stressSchema);

module.exports = Stresses;