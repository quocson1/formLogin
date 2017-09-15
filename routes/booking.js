var book = require('../controller/BookingController');
module.exports = function(router){



//router.post('/login/booking/insert',book.LoginBooking);
router.post('/booking/insert',book.insert);

router.post('/booking/update/place',book.UdatePlace);

router.post('/booking/update/AmountfPeople',book.UpdateAmountfPeople);

router.post('/booking/delete',book.delete)
};
