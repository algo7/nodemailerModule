/*eslint-env node*/

//Dependencies
const mongoose = require('mongoose');

//Global Constant
const Schema = mongoose.Schema;

// Create Schema
const testSchema = new Schema({
    activity: {
        type: String,

    },

}, {
    collection: 'Activity'
});

//Export Schema
mongoose.model('test', testSchema);