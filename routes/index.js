// TODO: Images don't work

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AllGrounds' });
});

/* GET stadium / ALS */
router.get('/stadions/abelenstrastadion', function(req, res, next) {
  res.render('abelenstrastadion', { title: 'Abe Lenstra Stadion Heerenveen' });
});


module.exports = router;
