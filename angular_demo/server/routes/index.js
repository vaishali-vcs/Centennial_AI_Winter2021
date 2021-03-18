var express = require('express');
var router = express.Router();
var indexcontroller = require('../controllers/index')

/* GET Home page. */
router.get('/', indexcontroller.displayHomePage);

/* GET Home page. */
router.get('/home', indexcontroller.displayHomePage);

/* GET About page. */
router.get('/about', indexcontroller.displayAboutPage);

/* GET Products page. */
router.get('/products', indexcontroller.displayProductsPage);

/* GET Services page. */
router.get('/services',indexcontroller.displayServicesPage);

/* GET Contact page. */
router.get('/contact', indexcontroller.displayContactPage);

/* GET for Login Page */
router.get('/login', indexcontroller.displayLoginPage);

/* Post for processing Login page*/
router.post('/login', indexcontroller.processLoginPage);

/* GET for Register Page */
router.get('/register', indexcontroller.displayRegisterPage);

/* Post for processing Register page*/
router.post('/register', indexcontroller.processRegisterPage);

/* GET for logout Page */
router.get('/logout', indexcontroller.performLogout);


module.exports = router;
