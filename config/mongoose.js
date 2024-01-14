const mongoose = require('mongoose');
const connection_string = PROCESS.ENV.DATABASECONNECTION 
const databaseName  = PROCESS.ENV.DATABASENAME
mongoose.connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
mongoose.connection.useDb()
  module.exports = mongoose.connection