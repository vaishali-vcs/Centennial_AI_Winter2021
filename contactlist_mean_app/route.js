const express  = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

//route to get contacts
router.get('/contacts', (req, res, next) =>{
   Contact.find(function (err, contacts)
   {
       res.json(contacts);
   });
    
});

//the default route to the home page
router.get('/',(req, res) =>{
    res.send('Welcome!');
});

//route to add contact
router.post('/contact', (req, res, next) =>{
    let newContact  = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });
});

//route to delete contact
router.delete('/contact/:id', (req, res, next) =>{
    //
});

module.exports = router;