const mongoose = require('mongoose');

const shiftSchema = new mongoose.Schema({
  date: Date,
  startTime: String,
  endTime: String,
  timezone: String,
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  }
});

module.exports = mongoose.model('Shift', shiftSchema);