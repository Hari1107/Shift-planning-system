import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment-timezone';

function Shifts() {
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    fetchShifts();
  }, []);

  const fetchShifts = async () => {
    try {
      const response = await axios.get('/api/employee/shifts');
      setShifts(response.data);
    } catch (error) {
      console.error('Error fetching shifts:', error);
    }
  };

  return (
    <div>
      <h2>Your Shifts</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Admin Timezone</th>
            <th>Your Timezone</th>
          </tr>
        </thead>
        <tbody>
          {shifts.map((shift, index) => (
            <tr key={index}>
              <td>{moment(shift.date).format('YYYY-MM-DD')}</td>
              <td>{shift.startTime}</td>
              <td>{shift.endTime}</td>
              <td>{shift.timezone}</td>
              <td>
                {moment.tz(`${shift.date} ${shift.startTime}`, shift.timezone).tz(moment.tz.guess()).format('HH:mm')} - 
                {moment.tz(`${shift.date} ${shift.endTime}`, shift.timezone).tz(moment.tz.guess()).format('HH:mm')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Shifts;