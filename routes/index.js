var express = require('express');
var router = express.Router();

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

  var params = { screen_name: req.query.handle, count: 50, include_rts: false };
  client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
      var tweetArr = [];

      for (var i in tweets) {
        var splitArr = tweets[i].text.split(/\s|\n/);

        for (var i in splitArr) {
          splitArr[i].toLowerCase();
          splitArr[i] = splitArr[i].replace(/\(/g, "");
          splitArr[i] = splitArr[i].replace(/\)/g, "");
          splitArr[i] = splitArr[i].replace(/\*/g, "");
          splitArr[i] = splitArr[i].replace(/!/g, "");
          splitArr[i] = splitArr[i].replace(/\?/g, "");
          splitArr[i] = splitArr[i].replace(/"/g, "");
          splitArr[i] = splitArr[i].replace(/\[/g, "");
          splitArr[i] = splitArr[i].replace(/\]/g, "");
          splitArr[i] = splitArr[i].replace(/:/g, "");
          splitArr[i] = splitArr[i].replace(/,/g, "");
          splitArr[i] = splitArr[i].replace(/;/g, "");
          splitArr[i] = splitArr[i].replace(/\./g, "");
          splitArr[i] = splitArr[i].replace(/\+/g, "");

          if (!/\d/.test(splitArr[i]) && !/@/.test(splitArr[i]) && !/http/.test(splitArr[i])) {
            tweetArr.push(splitArr[i].toLowerCase());
          }
        }
      }

      var common = require('common-words');

      function removeCommonWords(words, common) {
        common.forEach(function(obj) {
          var word = obj.word;
          while (words.indexOf(word) !== -1) {
            words.splice(words.indexOf(word), 1);
          }
        });
        return words;
      };

      var strippedWords = removeCommonWords(tweetArr, common);

      var twitHash = {};

      for (var i in strippedWords) {
        if (strippedWords[i] !== "" && strippedWords[i] !== "i'm" && strippedWords[i] !== "&amp" && strippedWords[i] !== "is" && strippedWords[i] !== "can't" && strippedWords[i] !== "don't" && strippedWords[i] !== "it's" && strippedWords[i] !== "are" &&
        strippedWords[i] !== "got" && strippedWords[i] !== "i" && strippedWords[i] !== "me" && strippedWords[i] !== "why") {
          strippedWords[i] = strippedWords[i].replace(/'/g, "");
          if (twitHash[strippedWords[i]]) {
            twitHash[strippedWords[i]] += 1;
          } else {
            twitHash[strippedWords[i]] = 1;
          }
        }
      }

      var sortedKeys = Object.keys(twitHash).sort(function(a, b) { return twitHash[a] - twitHash[b]});
      console.log(sortedKeys.reverse());

      console.log(twitHash);
      res.render('twitter', { title: 'twitter clouds', tweets: tweets, tweetHash: twitHash });
    }
  });

});

module.exports = router;
