const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const author = new Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    match: [/\S+@\S+\.\S+/, 'Please enter a valid email address.'],
    required: true
  }
});

module.exports = mongoose.model('Author', author);
