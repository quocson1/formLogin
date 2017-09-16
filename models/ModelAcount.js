var bcrypt =require('bcryptjs');


//create UserName
module.exports.createUser = function(newUser,callback){
	bcrypt.genSalt(10,function(err,salt){
		bcrypt.hash(newUser.PassWord,salt,function(err,hash){
			newUser.PassWord = hash;
			newUser.save(callback);
		});
	});
};





