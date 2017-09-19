var UserController = require('../controller/UserController');
module.exports = function(router){

//view HomePage
router.get('/',UserController.HomePage);

//post signup
router.post('/signup',UserController.Signup);

//post login
router.post('/login',UserController.Login);

//logout
router.get('/Logout',UserController.Logout);
};
