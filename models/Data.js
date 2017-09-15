var mongoose = require('mongoose');


// properties User
var User = new mongoose.Schema({
	UserName:{type:String, index:true},
	PassWord:{type:String,select:true},
	Email:{type:String,index:true}

});

//properties Booking
var Booking = new mongoose.Schema({

	User_id:{type:String, index:true},
	Place:{type:String,select:true},
	AmountfPeople:{type:Number,index:true}

})
//export data acount
var acount = module.exports = mongoose.model('acount',User);

//export data Booking
var Book = module.exports = mongoose.model('Book,',Booking);
