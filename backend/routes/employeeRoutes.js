const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');
const Shift = require('../models/Shift');

router.get('/availability', (req, res) => {
  const employee = req.user;
  const availability = employee.availability;
  res.json(availability);
});

router.post('/availability', (req, res) => {
  const employee = req.user;
  const { date, startTime, endTime, timezone } = req.body;
  employee.availability.push({ date, startTime, endTime, timezone });
  employee.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating availability');
    } else {
      res.status(201).json({ message: 'Availability created successfully' });
    }
  });
});

router.get('/shifts', (req, res) => {
  const employee = req.user;
  Shift.find({ employee: employee._id }, (err, shifts) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching shifts');
    } else {
      res.json(shifts);
    }
  });
});

module.exports = router;