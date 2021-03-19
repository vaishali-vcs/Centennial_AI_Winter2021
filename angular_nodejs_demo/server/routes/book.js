let express = require('express');
let router = express.Router();

let bookcontroller = require('../controllers/book');
let passport = require('passport');

//helper function for guard purposes
function requireAuth(req, res, next)
{
    //check if the user is logged in 
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
} 

//create a GET Route for Books page (READ operation)
router.get('/',  bookcontroller.displaybooklist);

//create a GET Route for displaying Add Book page (Write operation)
router.get('/addbook', requireAuth, bookcontroller.get_addbook);

//create a POST Route for processing Add Book page (Write operation)
router.post('/addbook', requireAuth, bookcontroller.post_addbook);

//create a GET Route for displaying Edit Book page (Update operation)
router.get('/editbook/:id', requireAuth, bookcontroller.get_editbook);

//create a POST Route for processing Edit Book page (Update operation)
router.post('/editbook/:id', requireAuth, bookcontroller.post_editbook);

//create a POST Route for Delete Book page (DELETE operation)
router.get('/deletebook/:id', requireAuth, bookcontroller.deletebook);

module.exports = router;