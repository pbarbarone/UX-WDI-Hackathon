var mongoose = require('mongoose');

var museSchema = new mongoose.Schema({
	videos: [{
				videoUrl: String,
			}],
	memes: [{
						memeUrl:String,
					}],
});

var Muses = mongoose.model('Muses', museSchema);

module.exports = Muses;