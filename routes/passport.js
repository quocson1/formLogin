const LocalStrategy = require('passport-local').Strategy;
const Acount = require('../models/Acount');

module.exports = function(passport){

//decode password
passport.use(new LocalStrategy(
  function(username, password, done) {
    //get User by UserName
  	Acount.getUserByUsername(username,(err,user)=>{
  		if(err) throw err;
  		if(!user){
  			return done(null,false);
  		}
      //compare pass now and password DB
  		Acount.comparePassword(password,user.PassWord,(err,isMatch)=>{
  			if(err) throw err;
  			if(isMatch){
  				return done(null,user);
  			}else{
  				return done(null,false);
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
}

