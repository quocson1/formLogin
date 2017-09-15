var booking = require('../models/Booking');
const data = require('../models/Data');

function getUserById (id,callback) {
  Acount.findById(id,callback);
}

exports.Booking = (req,res) => {
	let Place = req.body.Place;
    let AmountfPeople = req.body.AmountfPeople;
    let id = req.body.User_id;
    // if id =data.id {
    	//Get data from login id

    //}

    //else Capture user input
}