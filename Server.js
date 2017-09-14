const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cons = require('consolidate');
const router = express.Router();
const index = require('./routes/index') (router);
const passport = require('passport');


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
app.use(passport.session())

//use body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//exports 
app.use('/',(router));

require('./routes/passport.js')(passport);


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

