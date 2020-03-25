//Dependencies
const mongoose = require('mongoose')

//Global Variables (Credentials)
const MongodbPass = require('./mongoKey');

//Connect to DB
const DB_Connection = mongoose.createConnection(MongodbPass.Database, {
    //Handle deprecation
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//Connection Report
DB_Connection
    .once('open', () => console.info('DB Connected'))
    .catch(err => console.error('Error Connecting to DB' + ' ' + err));

//Export the Module
module.exports = DB_Connection;