const LocalStrategy = require('passport-local').Strategy;
const ac = require('../models/User/Data');
var bcrypt =require('bcryptjs');
var jwt    = require('jsonwebtoken');

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
          console.log(user.id);
         // create a token with only our given payload ,Signing a token with 1 hour of expiration:
          var token = jwt.sign({id: user.id,
            exp: Math.floor(Date.now() / 1000) + (60 * 60)},'quocson');

          var jsonToken = {
            token: token,
            success: true
          }
          console.log(jsonToken);
          //send messenger to user id
          return done(null,user,req.flash('user' ,user.id));
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


exports.son = {

    'secret': 'ilovescotchyscotch',
    'database': 'mongodb://noder:noderauth&54;proximus.modulusmongo.net:27017/so9pojyN'

};