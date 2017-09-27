const LocalStrategy = require('passport-local').Strategy;
const ac = require('../models/User/Data');
var bcrypt =require('bcryptjs');
module.exports = function(passport){


//use acount in data
var Acount = ac.acount;

//get User by UserName
function getUserByUsername(username,callback){
  var query ={UserName: username};
  Acount.findOne(query,callback);

}

//decryption compare password present vs password BD 
function comparePassword(candidatePassword,hash,callback){
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if(err) throw err;
    callback(null,isMatch);
});
}
//get User by ID
function getUserById (id,callback) {
  Acount.findById(id,callback);
}
//decode password
passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
},function(req,UserName, PassWord, done) {
    //get User by UserName
    getUserByUsername(UserName,function(err,user){

      if(err) throw err;
      if(!user){
        return done(null,false);
      }
      //compare pass now and password DB
      comparePassword(PassWord,user.PassWord,function(err,isMatch){
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
  getUserById (id, function(err, user) {
    done(err, user);
  });
});
}