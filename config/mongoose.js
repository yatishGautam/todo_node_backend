const mongoose = require('mongoose');

async function connectToDB(){
    try{
        const connection_string = process.env.DATABASECONNECTION;
        const databaseName  = process.env.DATABASENAME;
        const db = await mongoose.connect(connection_string);
        console.log(db);
        db.connection.useDb(databaseName);
        return db
    }catch(error){
        console.log('db error: '+error)
    }
}


module.exports = connectToDB;