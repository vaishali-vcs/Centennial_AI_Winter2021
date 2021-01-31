// https://www.youtube.com/watch?v=UYh6EvpQquw

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//imported mongoose connection object
const {mongoose} = require('./db.js');
var employeeController = require('./controllers/employeeController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200' }));

//start the app server @port 300
app.listen(3000, () => console.log('Server started at port: 3000'));

app.use('/api', employeeController);