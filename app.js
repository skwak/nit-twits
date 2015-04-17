var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var http = require("http");
var Twitter = require('twitter');

var app = express();

require('dotenv').load();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



// set up twitter

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_TOKEN_SECRET
});


// var params = {screen_name: 'kwakstop'};
// client.get('friends/list', params, function(error, tweets, response){
//   if (!error) {
//     console.log(tweets);
//   }
// });

// var handle = req.query.handle;
// console.log(handle);

// app.get('/', function (req, res) {
//   var handle = req.query.handle;
//   console.log(handle);
// });

// app.get('/', function(req, res) {
//   var handle = req.param('handle');
//   console.log(handle);
// });

// app.get('/', function(req, res) {
    // var handle = req.query.handle;
    // res.send(handle);
// });

// app.get('/', function (req, res){
//   var handle = req.body.handle;
//   alert('handle: ' + req.query.handle);
//   client.get('friends/list', params, function(error, list, response) {
//     if (!error) {
//
//     }
//   });
// });

// var params = {screen_name: 'nodejs'};
// client.get('friends/list', params, function(error, list, response){
//   if (!error) {
//     console.log(list);
//   }
// });



module.exports = app;
