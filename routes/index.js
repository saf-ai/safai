var express = require('express');
var router = express.Router();
var Report = require("./../models/Report");

/* GET home page. */
router.get('/', function(req, res, next) {
  Report.find({},function(err,reports){
  res.render('index', { title: 'SAFAI',markers:reports });
  });
});

module.exports = router;
