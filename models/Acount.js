var mongoose = require('mongoose');
var bcrypt =require('bcryptjs');
//bill Schema
var receiptSchema = new mongoose.Schema({
	UserName:{type:String, index:true},
	PassWord:{type:String,select:true},
	Email:{type:String,index:true}

});


var acount = module.exports = mongoose.model('acount',receiptSchema);
//module.exports = AC;
var createUserName = module.exports.createUser = (newUser,callback)=>{
	bcrypt.genSalt(10,(err,salt)=>{
		bcrypt.hash(newUser.PassWord,salt,(err,hash)=>{
			newUser.PassWord = hash;
			newUser.save(callback);
		});
	});
};

module.exports.getUserByUsername= (username,callback) =>{
	var query ={UserName: username};
	acount.findOne(query,callback);
}

module.exports.getUserById= (id,callback) =>{
	acount.findById(id,callback);
}

module.exports.comparePassword = (candidatePassword,hash,callback)=>{
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
		if(err) throw err;
		callback(null,isMatch);
});
}
module.exports.addAcount= (acountNew,limit) =>{
	return new Promise((resolve,resject) => {
		resolve(acount.create(acountNew,limit))
	});
};

module.exports.check =(PASS,PASS2,User,PassW,E,limit)=>{
	if(PASS == PASS2 ){
		var acountNew = new acount({
			UserName:User,
			PassWord:PassW,
			Email:E
		});
		
		createUserName(acountNew,(err,user)=>{
    		if(err) throw err;
    		//
    	})
    	return true ;
	}
}

