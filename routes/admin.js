var express = require('express');
var router = express.Router();
var Report = require("./../models/Report");
var spawn = require('child_process').spawn,
py    = spawn('python', ['compute_input.py']),
data,
dataString = '';

router.get('/', function(req, res, next) {
    Report.find({},function(err,reports){
        console.log(reports);
        
        //  py.stdout.on('data', function(data){
        //  dataString = reports;
        //  });
        //  py.stdout.on('end', function(){
        //  console.log(dataString);
        //  });
        // py.stdin.write(data);
        // py.stdin.end();
    });

});
module.exports = router;