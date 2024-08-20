const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  availability: [
    {
      date: Date,
      startTime: String,
      endTime: String,
      timezone: String
    }
  ]
});

module.exports = mongoose.model('Employee', employeeSchema);