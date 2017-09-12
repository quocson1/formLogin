const express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var cons = require('consolidate');
const router = express.Router();
const index = require('./routes/index') (router);
var passport = require('passport');




//Validator
var expressValidator = require('express-validator');
app.use(expressValidator())

//view ejs
var viewPath = path.join(__dirname, 'view');
app.set('views', viewPath);
app.set('view engine', 'ejs');
// use passport session
app.use(passport.initialize());
app.use(passport.session())


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',(router));

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

