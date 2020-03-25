import { Meteor } from 'meteor/meteor';

//DB Connection Module
const DB_Connection = require('../dbConnection');

//Load model for testDB
require('../dbModel');
const testDB = DB_Connection.model('test');

//Query testDB (operation:findAll)
testDB
  .find({})
  .then(result => console.log(result))

Meteor.startup(() => {
  // code to run on server at startup
});
