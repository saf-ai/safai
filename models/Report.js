var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var report = new Schema({
    severity: {type:Number, index:true,default:null},
    latitude: {type:Number,default:null},
    longitude: {type:Number,default:null}
});

module.exports = mongoose.model("Report",report);