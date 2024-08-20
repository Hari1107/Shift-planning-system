import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment-timezone';

function Availability() {
  const [availability, setAvailability] = useState([]);
  const [newAvailability, setNewAvailability] = useState({
    date: '',
    startTime: '',
    endTime: '',
    timezone: '',
  });

  useEffect(() => {
    fetchAvailability();
  }, []);

  const fetchAvailability = async () => {
    try {
      const response = await axios.get('/api/employee/availability');
      setAvailability(response.data);
    } catch (error) {
      console.error('Error fetching availability:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/employee/availability', newAvailability);
      fetchAvailability();
      setNewAvailability({ date: '', startTime: '', endTime: '', timezone: '' });
    } catch (error) {
      console.error('Error creating availability:', error);
    }
  };

  return (
    <div>
      <h2>Create Availability</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={newAvailability.date}
          onChange={(e) => setNewAvailability({ ...newAvailability, date: e.target.value })}
        />
        <input
          type="time"
          value={newAvailability.startTime}
          onChange={(e) => setNewAvailability({ ...newAvailability, startTime: e.target.value })}
        />
        <input
          type="time"
          value={newAvailability.endTime}
          onChange={(e) => setNewAvailability({ ...newAvailability, endTime: e.target.value })}
        />
        <select
          value={newAvailability.timezone}
          onChange={(e) => setNewAvailability({ ...newAvailability, timezone: e.target.value })}
        >
          {moment.tz.names().map((tz) => (
            <option key={tz} value={tz}>
              {tz}
            </option>
          ))}
        </select>
        <button type="submit">Create Availability</button>
      </form>

      <h2>Availability Table</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Timezone</th>
          </tr>
        </thead>
        <tbody>
          {availability.map((a, index) => (
            <tr key={index}>
              <td>{moment(a.date).format('YYYY-MM-DD')}</td>
              <td>{a.startTime}</td>
              <td>{a.endTime}</td>
              <td>{a.timezone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Availability;