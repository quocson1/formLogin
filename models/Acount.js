
var bcrypt =require('bcryptjs');
var acount = require('./dbAcount');

//create UserName
var createUserName = module.exports.createUser = (newUser,callback)=>{
	bcrypt.genSalt(10,(err,salt)=>{
		bcrypt.hash(newUser.PassWord,salt,(err,hash)=>{
			newUser.PassWord = hash;
			newUser.save(callback);
		});
	});
};

//get User by UserName
module.exports.getUserByUsername= (username,callback) =>{
	var query ={UserName: username};
	acount.findOne(query,callback);
}

//get User by ID
module.exports.getUserById= (id,callback) =>{
	acount.findById(id,callback);
}

//decryption compare password present vs password BD 
module.exports.comparePassword = (candidatePassword,hash,callback)=>{
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
		if(err) throw err;
		callback(null,isMatch);
});
}


// check Invalid and create UserName encode password
module.exports.check =(PASS,PASS2,User,E,limit)=>{
	if(PASS == PASS2 ){
		var acountNew = new acount({
			UserName:User,
			PassWord:PASS,
			Email:E
		});
		
		createUserName(acountNew,(err,user)=>{
    		if(err) throw err;
    		//
    	})
    	return true ;
	}
}

