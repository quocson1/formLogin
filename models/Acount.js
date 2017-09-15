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


// module.exports.getUserByUsername= (username,callback) =>{
// 	var query ={UserName: username};
// 	acount.findOne(query,callback);
// }


// module.exports.getUserById= (id,callback) =>{
// 	acount.findById(id,callback);
// }


// module.exports.comparePassword = (candidatePassword,hash,callback)=>{
// 	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
// 		if(err) throw err;
// 		callback(null,isMatch);
// });
// }


