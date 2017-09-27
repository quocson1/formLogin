exports.checkLogin = function check(req,res,next){

	let username = req.body.username;
	let password = req.body.password;

    // Validation
  req.checkBody('username','username not null').notEmpty();
  req.checkBody('username','user name Contains invalid characters').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i");
  req.checkBody('password','password leght > 3 char').notEmpty().isLength({min:4});
  req.checkBody('password','password Contains invalid characters').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i");
 // err
 var er = req.validationErrors();
  if(er){
      var messages = [];
      er.forEach(function(error){
        messages.push(error.msg);
      });
      
      //next err to user
      next(messages);

    }

    //secessful
    next();

     
    
}