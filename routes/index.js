var Acount = require('../models/Acount');
var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');

module.exports = function(router){

 router.get('/',(req,res) => {
    res.render('homepage');
});


 router.get('/signup',(req,res)=>{
 	res.render('signup');
 })


//get login
router.get('/login',(req,res)=>{
	res.render('login');
})

//post signup
router.post('/signup',(req,res) =>{
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
});

//post login
router.post('/login',
	passport.authenticate('local', {successRedirect:'/', failureRedirect: '/login',failureFlash:true }),
	(req,res) =>{
		res.redirect('/');
});
};

