const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');
const Shift = require('../models/Shift');

router.get('/employees', (req, res) => {
  Employee.find({}, (err, employees) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching employees');
    } else {
      res.json(employees);
    }
  });
});

router.get('/availability/:employeeId', (req, res) => {
  const employeeId = req.params.employeeId;
  Employee.findById(employeeId, (err, employee) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching employee');
    } else {
      const availability = employee.availability;
      res.json(availability);
    }
  });
});

router.post('/shifts', (req, res) => {
  const { date, startTime, endTime, timezone, employeeId } = req.body;
  const shift = new Shift({ date, startTime, endTime, timezone, employee: employeeId });
  shift.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating shift');
    } else {
      res.status(201).json({ message: 'Shift created successfully' });
    }
  });
});

router.get('/shifts', (req, res) => {
  Shift.find({}, (err, shifts) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching shifts');
    } else {
      res.json(shifts);
    }
  });
});

module.exports = router;