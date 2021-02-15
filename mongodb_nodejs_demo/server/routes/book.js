let express = require('express');
let router = express.Router();

let bookcontroller = require('../controllers/book');

//create a GET Route for Books page (READ operation)
router.get('/', bookcontroller.displaybooklist);

//create a GET Route for displaying Add Book page (Write operation)
router.get('/addbook', bookcontroller.get_addbook);

//create a POST Route for processing Add Book page (Write operation)
router.post('/addbook', bookcontroller.post_addbook);

//create a GET Route for displaying Edit Book page (Update operation)
router.get('/editbook/:id', bookcontroller.get_editbook);

//create a POST Route for processing Edit Book page (Update operation)
router.post('/editbook/:id', bookcontroller.post_editbook);

//create a POST Route for Delete Book page (DELETE operation)
router.get('/deletebook/:id', bookcontroller.deletebook);

module.exports = router;