const mongoose = require('mongoose');

async function connectToDB(){
    try{
        const connection_string = process.env.DATABASECONNECTION;
        const databaseName  = process.env.DATABASENAME;
        // connection_string = connection_string.concat('\\'+databaseName);
        const connection = await mongoose.connect(connection_string);
        connection.connection.useDb(databaseName);
        return connection;
    }catch(error){
        console.log('db error: '+error)
    }
}


module.exports = connectToDB;