var express = require('express');
var router = express.Router();
var Report = require("./../models/Report");
var ml = require('machine_learning');

/* GET home page. */
router.get('/', function(req, res, next) {
  var data;
  Report.find({},function(err,reports){
  console.log(reports[0]);
  res.render('index.hbs', { title: 'SAFAI',markers:reports[0] });
  });
});
module.exports = router;
