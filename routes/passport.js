var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Acount = require('../models/Acount');

passport.use(new LocalStrategy(
  function(username, password, done) {
  	Acount.getUserByUsername(username,(err,user)=>{
  		if(err) throw err;
  		if(!user){
  			return done(null,false,console.log(user));
  		}
  		Acount.comparePassword(password,user.PassWord,(err,isMatch)=>{
  			if(err) throw err;
  			if(isMatch){
  				return done(null,user);
  			}else{
  				return done(null,false,console.log('loi mat khau'));
  			}
  		});

  });
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  Acount.getUserById (id, function(err, user) {
    done(err, user);
  });
});

