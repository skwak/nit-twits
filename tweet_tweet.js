require('dotenv').load();

var express = require('express');

var app = express();

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_TOKEN_SECRET
});

var params = {screen_name: 'kwakstop'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});


// app.get('/tweets/kwakstop', function(req, res) {
//   var username = req.query.handle;
//
// })

// app.get('/', function (req, res) {
//   var handleIt = req.query.handle;
//   res.render('index.jade', { handleIt: handleIt} );
// });
// app.post('/game.html', function(req, res){
//     var user = req.param('name');
//     console.log(user);
//     res.render( 'game.html', { user:user } );
// });

// app.get('/', function (req, res){
//   console.log('I got the ' + handle + '!');
  // var params = {screen_name: handle};
  // client.get('friends/list', params, function(error, tweets, response) {
  //   if (!error) {
  //     console.log(tweets);
  //   }
  // });
// });
