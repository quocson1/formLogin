var bcrypt =require('bcryptjs');


//create UserName
module.exports.createUser = (newUser,callback)=>{
	bcrypt.genSalt(10,(err,salt)=>{
		bcrypt.hash(newUser.PassWord,salt,(err,hash)=>{
			newUser.PassWord = hash;
			newUser.save(callback);
		});
	});
};





