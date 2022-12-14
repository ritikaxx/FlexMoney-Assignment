const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  batch: {
    type: String,
    required: true
  }
}, {
  collection: 'students'
})

module.exports = mongoose.model('Student', studentSchema)