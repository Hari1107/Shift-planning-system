import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment-timezone';

function ShiftCreation() {
  const [employees, setEmployees] = useState([]);
  const [shift, setShift] = useState({
    date: '',
    startTime: '',
    endTime: '',
    timezone: '',
    employeeId: '',
  });
  const [availableEmployees, setAvailableEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('/api/admin/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/admin/shifts', shift);
      setShift({ date: '', startTime: '', endTime: '', timezone: '', employeeId: '' });
      setAvailableEmployees([]);
      alert('Shift created successfully');
    } catch (error) {
      console.error('Error creating shift:', error);
    }
  };

  const checkAvailability = async () => {
    if (shift.date && shift.startTime && shift.endTime && shift.timezone) {
      try {
        const response = await axios.post('/api/admin/check-availability', {
          date: shift.date,
          startTime: shift.startTime,
          endTime: shift.endTime,
          timezone: shift.timezone,
        });
        setAvailableEmployees(response.data);
      } catch (error) {
        console.error('Error checking availability:', error);
      }
    }
  };

  useEffect(() => {
    checkAvailability();
  }, [shift.date, shift.startTime, shift.endTime, shift.timezone]);

  return (
    <div>
      <h2>Create Shift</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={shift.date}
          onChange={(e) => setShift({ ...shift, date: e.target.value })}
        />
        <input
          type="time"
          value={shift.startTime}
          onChange={(e) => setShift({ ...shift, startTime: e.target.value })}
        />
        <input
          type="time"
          value={shift.endTime}
          onChange={(e) => setShift({ ...shift, endTime: e.target.value })}
        />
        <select
          value={shift.timezone}
          onChange={(e) => setShift({ ...shift, timezone: e.target.value })}
        >
          <option value="">Select timezone</option>
          {moment.tz.names().map((tz) => (
            <option key={tz} value={tz}>
              {tz}
            </option>
          ))}
        </select>
        
        {availableEmployees.length > 0 && (
          <select
            value={shift.employeeId}
            onChange={(e) => setShift({ ...shift, employeeId: e.target.value })}
          >
            <option value="">Select an employee</option>
            {availableEmployees.map((employee) => (
              <option key={employee._id} value={employee._id}>
                {employee.name}
              </option>
            ))}
          </select>
        )}
        
        <button type="submit" disabled={!shift.employeeId}>Create Shift</button>
      </form>
    </div>
  );
}

export default ShiftCreation;