var tweetTweet = (function() {

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

  app.post('/twitter', function(request, response){
      console.log(request.body.handle);

  });

})();

module.exports = tweetTweet;
