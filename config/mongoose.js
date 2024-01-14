const mongoose = require('mongoose');

function connectToDB(){
    const connection_string = process.env.DATABASECONNECTION;
    const databaseName  = process.env.DATABASENAME;
    console.log(' this  ');
    console.log(connection_string);
    mongoose.connect(connection_string);
    const db = mongoose.connection.useDb(databaseName);
}


module.exports = connectToDB;