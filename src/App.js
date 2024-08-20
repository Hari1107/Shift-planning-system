import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Availability from './components/Employee/Availability';
import EmployeeShifts from './components/Employee/Shifts';
import EmployeeAvailability from './components/Admin/EmployeeAvailability';
import ShiftCreation from './components/Admin/ShiftCreation';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/employee/availability" component={Availability} />
        <Route path="/employee/shifts" component={EmployeeShifts} />
        <Route path="/admin/availability" component={EmployeeAvailability} />
        <Route path="/admin/shifts" component={ShiftCreation} />
      </Switch>
    </div>
  );
}

export default App;
