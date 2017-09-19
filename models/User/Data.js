var mongoose = require('mongoose');


// properties User
var User = new mongoose.Schema({
	UserName:{type:String, index:true},
	PassWord:{type:String,select:true},
	NumberPhone:{type:Number},
	Email:{type:String,index:true}

});

//export data acount
module.exports.acount = mongoose.model('acount',User);


