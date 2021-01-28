const express  = require('express');
const router = express.Router();

//route to get contacts
router.get('/contacts', (req, res, next) =>{
    res.send('Retrieving contact list..');
});

//the default route to the home page
router.get('/',(req, res) =>{
    res.send('Welcome!');
});

//route to add contact
router.post('/contact', (req, res, next) =>{
    //
});

//route to delete contact
router.delete('/contact/:id', (req, res, next) =>{
    //
});

module.exports = router;