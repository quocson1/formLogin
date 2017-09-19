const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cons = require('consolidate');
const router = express.Router();

//const index = require('./routes/index') (router);
const passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');

var mongoose = require('mongoose');

//Validator
const expressValidator = require('express-validator');
app.use(expressValidator())
// Set Static Folder
var viewPath = path.join(__dirname, 'view');

//view ejs
app.set('views', viewPath);
app.set('view engine', 'ejs');

// Passport init
app.use(passport.initialize());
app.use(passport.session());
app.use(session({ cookie: { maxAge: 60000 }, 
                  secret: 'woot',
                  resave: false, 
                  saveUninitialized: false}));
//use body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(flash());
//exports 
require('./routes/user') (router);
require('./routes/booking')(router);
app.use('/',(router));


//app.use('/',(router1));

require('./controller/PassportController.js')(passport);


//connect
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/data',function(err){
	if(err){
		console.log('connecting to mongodb failure!');
	}
	//start server
	app.listen(port);
	console.log('Listening on localhost:'+ port);
});

