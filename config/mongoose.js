const mongoose = require('mongoose');

async function connectToDB(){
    try{
        const connection_string = process.env.DATABASECONNECTION;
        const databaseName  = process.env.DATABASENAME;
        const connection = await mongoose.connect(connection_string);
        return connection;
    }catch(error){
        console.log('db error: '+error)
    }
}


module.exports = connectToDB;