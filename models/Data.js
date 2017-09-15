var mongoose = require('mongoose');


// properties User
var User = new mongoose.Schema({
	UserName:{type:String, index:true},
	PassWord:{type:String,select:true},
	NumberPhone:{type:Number},
	Email:{type:String,index:true}

});

//properties Booking
var Booking = new mongoose.Schema({

	User_id:{type:String, index:true},
	Name:{type:String},
	Phone:{type:Number},
	Email:{type:String},
	Place:{type:String,select:true},
	AmountfPeople:{type:Number,index:true}

})
//export data acount
module.exports.acount = mongoose.model('acount',User);

//export data Booking
module.exports.Book = mongoose.model('Book',Booking);
