var passport = require('passport');
var Acount = require('../models/Acount');
//display HomePage
exports.HomePage = (req,res) =>{
	res.send('xin chao ban ');
}

//Handle Genre login
exports.Login = passport.authenticate('local', {successRedirect:'/', failureRedirect: '/login',failureFlash:true }),
	(req,res) =>{
		res.redirect('/');
}	

//DisPlay Logout
exports.Logout = (req,res) =>{
	res.send('see you again :)');
}

//Handle Genre SignUp
exports.Signup = (req,res) => {
	let acount = req.body;
    let password2 = req.body.password2;
    let password = req.body.PassWord;
    let email = req.body.Email;
    let username = req.body.UserName;
    var Invalid = Acount.check(password2,password,username,email,Acount);
    //signup success
    if(Invalid == true){
    	res.redirect('/');
    }
    //fail
    else{
    	res.render('signup');
    }
}

