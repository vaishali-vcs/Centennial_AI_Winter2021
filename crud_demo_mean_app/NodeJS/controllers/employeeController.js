const express = require('express');
var router = express.Router();
const Employee = require('../models/employee');
var ObjectId = require('mongoose').Types.ObjectId;


//retrieving all employee records
// url = localhost:3000/employees
router.get('/employees', (req, res) => {
    Employee.find({}, function(err, docs) {
        //if no error send employee details as json
        if(!err) {res.send(docs);}
        else {console.log('Error in retrieving Employees ' + JSON.stringify(err, undefined, 2));}
 
    });
});


//the default route to the home page
router.get('/',(req, res) =>{
    res.send('Welcome!');
});

//json data of new employee is sent in the body. 
// Use to it create a new Employee object
router.post('/insert',(req, res) => {
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });

    emp.save((err, doc) => {
        if (!err) { res.send(doc);}
        else {console.log('Error in inserting Employee ' + JSON.stringify(err, undefined, 2));}
    });
});

//Search an Employee
router.get('/employee/:id',(req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : $(req.params.id ');
    Employee.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc);}
        else {console.log('Error in searching Employee id: $(req.params.id' + JSON.stringify(err, undefined, 2));}
    });
} );

//update details of an existing employee
router.put('/employee/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : $(req.params.id)');

    var emp = new {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };

    //by setting new=True in this method, the updated object is sent back by the db. 
    // otherwise doc will have old object
    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc);}
        else {console.log('Error in updating Employee id: $(req.params.id)' + JSON.stringify(err, undefined, 2));}
    });
    
});


//remove an employee
router.delete('/remove/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id : $(req.params.id)');

    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc);}
        else {console.log('Error in deleting Employee id: $(req.params.id)' + JSON.stringify(err, undefined, 2));}
    
    });
})

module.exports = router;