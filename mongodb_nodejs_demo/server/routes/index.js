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

module.exports = router;
