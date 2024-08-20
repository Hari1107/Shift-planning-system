import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment-timezone';

function EmployeeAvailability() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [availability, setAvailability] = useState([]);
  const [selectedTimezone, setSelectedTimezone] = useState('');

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

  const fetchAvailability = async (employeeId) => {
    try {
      const response = await axios.get(`/api/admin/availability/${employeeId}`);
      setAvailability(response.data);
      setSelectedTimezone(response.data[0].timezone);
    } catch (error) {
      console.error('Error fetching availability:', error);
    }
  };

  const handleEmployeeChange = (e) => {
    setSelectedEmployee(e.target.value);
    fetchAvailability(e.target.value);
  };

  const convertTimezone = (date, time, fromTz, toTz) => {
    return moment.tz(`${date} ${time}`, fromTz).tz(toTz).format('HH:mm');
  };

  return (
    <div>
      <h2>Employee Availability</h2>
      <select value={selectedEmployee} onChange={handleEmployeeChange}>
        <option value="">Select an employee</option>
        {employees.map((employee) => (
          <option key={employee._id} value={employee._id}>
            {employee.name}
          </option>
        ))}
      </select>

      {availability.length > 0 && (
        <>
          <h3>Availability for {employees.find((e) => e._id === selectedEmployee).name}</h3>
          <select
            value={selectedTimezone}
            onChange={(e) => setSelectedTimezone(e.target.value)}
          >
            {moment.tz.names().map((tz) => (
              <option key={tz} value={tz}>
                {tz}
              </option>
            ))}
          </select>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Start Time</th>
                <th>End Time</th>
              </tr>
            </thead>
            <tbody>
              {availability.map((a, index) => (
                <tr key={index}>
                  <td>{moment(a.date).format('YYYY-MM-DD')}</td>
                  <td>{convertTimezone(a.date, a.startTime, a.timezone, selectedTimezone)}</td>
                  <td>{convertTimezone(a.date, a.endTime, a.timezone, selectedTimezone)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default EmployeeAvailability;