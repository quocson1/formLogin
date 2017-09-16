var book = require('../controller/BookingController');
module.exports = function(router){


//inser to login booking
//router.post('/login/booking/insert',book.LoginBooking);

//insert to booking
router.post('/booking/insert',book.insert);

//update booking place
router.post('/booking/update/place',book.UdatePlace);

//update booking AmountfPeople
router.post('/booking/update/AmountfPeople',book.UpdateAmountfPeople);

//dell booking 
router.post('/booking/delete',book.delete)
};
