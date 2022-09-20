var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET recorder page. */
router.get('/recorder',function (req,res,next) {
  res.render('recorder');
});
/* GET WebRTC page. */
router.get('/WenRTC',function (req,res,next) {
  res.render('WebRTC');
});

module.exports = router;
