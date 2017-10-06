
// =======================
// get the packages we need ============
// =======================
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cons = require('consolidate');
const router = express.Router();
const validator = require('express-validator');
//const index = require('./routes/index') (router);
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

const morgan      = require('morgan');
const mongoose = require('mongoose');


// Set Static Folder
const viewPath = path.join(__dirname, 'view');

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

//use validator 
app.use(validator());
//exports 
require('./routes/user') (router);
require('./routes/booking')(router);
app.use('/',(router));

//app.use('/',(router1));
require('./config/Passport.js')(passport);

//error handing middleware
app.use(function (err, req, res, next) {	
  res.status(500).send(err);
});


// use morgan to log requests to the console
app.use(morgan('dev'));

//connect
const port = process.env.PORT || 3000;
//connect mongo
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/data',function(err){
	if(err){
		console.log('connecting to mongodb failure!');
	}
	//start server
	app.listen(port);
	console.log('Listening on localhost:'+ port);
});

