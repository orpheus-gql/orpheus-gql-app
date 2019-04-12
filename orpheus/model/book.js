const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reqTracker = require('../orpheus/trackResolver')

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String
})
// timers for displayed seconds on front end
bookSchema.pre('find', function(){reqTracker.preRequest(this)})
bookSchema.post('find', function(){
  reqTracker.postRequest(this, 'bookSchema')});

module.exports = mongoose.model('Book', bookSchema)