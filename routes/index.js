var express = require('express');
var router = express.Router();
var tweetTweet = require('../tweet-tweet.js')();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'twitter clouds' });
});

router.post('/', function(req, res, next) {
  res.render('index', { title: 'twitter clouds' });
});

router.get('/twitter', function(req, res, next) {

  require('dotenv').load();

  var app = express();

  var Twitter = require('twitter');

  var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_TOKEN_SECRET
  });

  var params = { screen_name: req.query.handle };
  client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
      console.log(tweets[0].text);
      res.render('twitter', { title: 'twitter clouds', tweets: tweets });
    }
  });

});

module.exports = router;
