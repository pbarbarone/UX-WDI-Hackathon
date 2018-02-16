var Muses = require('./models/muses')

var muse_list = [
  {
    videoUrl: 'wwwwwwww',
    memeUrl: 'wwwww'
  },
  {
    videoUrl: 'xxxxxx',
    memeUrl: 'xxxxx'
  },
  {
    videoUrl: 'ttttt',
    memeUrl: 'tttttt'
  },
  {
    videoUrl: 'bbbbbb',
    memeUrl: 'bbbbb'
  },
  {
    videoUrl: 'qqqqqqq',
    memeUrl: 'qqqqq'
  },
  {
    videoUrl: 'eeeeeee',
    memeUrl: 'eeeee'
  },
];


Muses.create(muse_list, function(err, vids){
  if (err) { return console.log('err', err); }
  console.log('created seedsss ', vids.length, " vid seeds that is" );
  process.exit();
});

