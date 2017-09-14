var mongoose = require('mongoose');


var receiptSchema = new mongoose.Schema({
	UserName:{type:String, index:true},
	PassWord:{type:String,select:true},
	Email:{type:String,index:true}

});
var acount = module.exports = mongoose.model('acount',receiptSchema);
