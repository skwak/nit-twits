var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'twitter clouds' });
});

router.post('/', function(req, res, next) {
  res.render('index', { title: 'twitter clouds' });
});


module.exports = router;
