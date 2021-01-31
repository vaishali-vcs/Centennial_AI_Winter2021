const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CrudDB', (err) => {
    if(!err)
        console.log('MongoDB connection succeeded...');
    else
        console.log('Error in DB connection: ' + JSON.stringify(err, undefined, 2 ));
});

//to export the mongoose connection object so that
//we can do crud operations outside this file, do export.
module.exports = mongoose;