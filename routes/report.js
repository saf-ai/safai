var express = require('express');
var router = express.Router();
var Report = require("./../models/Report");

router.get('/', function(req, res, next) {
  res.render('report.hbs', {});
});

router.post('/submit', function(req, res, next) {
  Report.find({latitude:req.body.latitude,longitude:req.body.longitude},function(err,report){
    if(err){
        res.status(500).send({error:"Could not get to Database"});
        console.log("Could get to database");
    }
    else{
        if (report.length!=0) {
            if(report[0].latitude!=null && report[0].longitude){
                console.log("Report already exist username:");
                res.render('index.hbs', {
                    hmsg:"Report in this area already submitted"
                });                      
            }                                 
        }
        else{
                var report = new Report();
                report.latitude = req.body.latitude;
                report.longitude = req.body.longitude;
                report.severity = req.body.severity;
                // Saving report coordinates to database
                report.save(function(err, submittedreport){
                    if(err){
                        res.status(500).send({error:err});
                        console.log("Could not save register user");
                    }
                    else{
                        res.render('index.hbs', {
                            hmsg:"Report submitted. Report again next day if truck not reached to you"
                        });
                        console.log(submittedreport);            
                    }
                });
        }             
    }
});
});
module.exports = router;