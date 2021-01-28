//https://www.youtube.com/watch?v=wtIvu085uU0
// mongodb server path C:\Program Files\MongoDB\Server\4.4\bin
// mongod.exe --dbpath="c:\mongodb\data\db"

// import the dependenciesmodules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path'); //no need to install seperately. this is a core module

//to use Express methods for Express app
var app = express()

//path to the request routing file 
const route = require('./route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection display a message
mongoose.connection.on('connected', ()=>{
    console.log('Connected to database mongodb at 27017')
}
);

mongoose.connection.on('error', (err) =>{
    if(err)
    {
        console.log('Error in Database connection' + err);
    }
});

//need a port number
const port  = 3000;

//make cors accessible 
app.use(cors());

//make bodyparser accessible 
app.use(bodyparser.json());

//link path to static html files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);


//bind the server to the port
app.listen( port, () =>{
    console.log('Server started at port:' + port);
}
);