var UserController = require('../controller/UserController');
var validationLogin = require('../validation/login');
module.exports = function(router){

//view HomePage
router.get('/',UserController.HomePage);

//post signup
router.post('/signup',UserController.Signup);


//check login
router.post('/login',validationLogin.checkLogin);

//post login
router.post('/login',UserController.Login);

//logout
router.get('/Logout',UserController.Logout);

router.get('/login',UserController.getLogin);
};





