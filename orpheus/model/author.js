const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reqTracker = require('../orpheus/trackResolver')

const authorSchema = new Schema({
  name: String,
  age: Number,
});
// timer for author resolver
authorSchema.pre('findOne', function(){reqTracker.preRequest(this)});
authorSchema.post('findOne', function(){
reqTracker.postRequest(this, 'authorSchema')});

module.exports = mongoose.model('Author', authorSchema)