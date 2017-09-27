var passport = require('passport');
var Acount = require('../models/User/ModelUser');
var ac = require('../models/User/Data');

//display HomePage
exports.HomePage = function(req,res){
	res.send('xin chao ban ');
}

exports.getLogin = (req,res)=>{
    res.send('sai ten dang nhap vui long nhap lai ');
}


        
//Handle Genre login
exports.Login = passport.authenticate('local', {successRedirect:'/', failureRedirect: '/login',failureFlash:true });
	

//DisPlay Logout
exports.Logout = function(req,res){
	res.send('see you again :)');
}

//Handle Genre SignUp
exports.Signup = function(req,res) {
    let username = req.body.UserName;
    let password2 = req.body.PassWord2;
    let password = req.body.PassWord;
    let email = req.body.Email;
    if(password2 == password){
        var acountNew = new ac.acount({
            UserName:username,
            PassWord:password,
            Email:email
        });
        
        Acount.createUser(acountNew,function(err,user){
            if(err) throw err;
            //
        })
         res.send("dang ky thanh cong");
    }

    else{
        res.send("xin vui long nhap lai");
    }
}

