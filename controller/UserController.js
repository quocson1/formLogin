var passport = require('passport');
var Acount = require('../models/ModuleAcount');
var ac = require('../models/Data');

//display HomePage
exports.HomePage = (req,res) =>{
	res.send('xin chao ban ');
}

//Handle Genre login
exports.Login = passport.authenticate('local', {successRedirect:'/', failureRedirect: '/login',failureFlash:true }),
	(req,res) =>{
		//res.redirect('/');
        res.send('ban da dang nhap thanh cong')
}	

//DisPlay Logout
exports.Logout = (req,res) =>{
	res.send('see you again :)');
}

//Handle Genre SignUp
exports.Signup = (req,res) => {
	let acount = req.body;
    let password2 = req.body.PassWord2;
    let password = req.body.PassWord;
    let email = req.body.Email;
    let username = req.body.UserName;
    if(password2 == password){
        var acountNew = new ac.acount({
            UserName:username,
            PassWord:password,
            Email:email
        });
        
        Acount.createUser(acountNew,(err,user)=>{
            if(err) throw err;
            //
        })
         res.send("dang ky thanh cong");
    }

    else{
        res.send("xin vui long nhap lai");
    }
}

