var passport = require('passport');
var Acount = require('../models/User/ModelUser');
var ac = require('../models/User/Data');
var jwt    = require('jsonwebtoken');
//display HomePage
exports.HomePage = function(req,res){
    
    //res.send('xin chao hi hi');
    var a = {message:req.flash('user')};
    res.send(a);
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

exports.CheckToken = function(req,res,next){
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
     if (token) {

    // verifies secret and checks exp
    jwt.verify(token,'quocson' ,function(err, decoded) {
         
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        
           req.flash('user' ,decoded)
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;   
        console.log(req.decoded);
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });

  }

}












