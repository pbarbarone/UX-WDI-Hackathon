var db = require('.models')

var muse_list = [
  {
    videoUrl: 'wwwwwwww'
  },
  {
    videoUrl: 'xxxxxx'
  },
  {
    videoUrl: 'ttttt'
  },
  {
    videoUrl: 'bbbbbb'
  },
  {
    videoUrl: 'qqqqqqq'
  },
  {
    videoUrl: 'eeeeeee'
  },
];


db.Muses.videos.create(muse_list, function(err, vids){
  if (err) { return console.log('err', err); }
  console.log('created seedsss ', vids.length, " vid seeds that is" );
  process.exit();
});

