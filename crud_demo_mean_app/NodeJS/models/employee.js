const express = require('express');
const mongoose  = require('mongoose');

//create a model for employee and also its schema
// the employee will be stored in the collection with same model name
// with 's', employees in our case
var Employee = mongoose.model('Employee', {
    name: {type: String},
    position: {type: String},
    office: {type: String},
    salary: {type: Number}
});

module.exports = Employee;