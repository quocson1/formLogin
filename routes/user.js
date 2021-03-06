var UserController = require('../controller/UserController');
var validationLogin = require('../validation/login');
module.exports = function(router){

//view HomePage
router.get('/',UserController.HomePage);

//post signup
router.post('/signup',UserController.Signup);

//check login if (true) => login , else faile :)
router.post('/login',validationLogin.checkLogin,UserController.Login);


//Route Middleware to Protect API Routes token
router.get('/token',UserController.CheckToken,UserController.HomePage);
//logout
router.get('/Logout',UserController.Logout);

router.get('/login',UserController.getLogin);
};





