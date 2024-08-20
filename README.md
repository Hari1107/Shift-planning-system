# Shift Planning System

## Overview

The Shift Planning System is a web application designed for managing employee schedules. It provides functionalities for both admins and employees to handle shift creation, availability, and more.

## Project Structure

- **`backend/`**: Server-side code, including models, routes, and server setup.
- **`public/`**: Static files like `index.html`.
- **`src/`**: Client-side React application.
  - **`components/`**: React components organized by functionality (Auth, Admin, Employee).
- **`node_modules/`**: Project dependencies.
- **`package.json`**: Metadata and dependencies.

## Setup and Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (for local development)

### Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/shift-planning-system.git
   cd shift-planning-system

Install Dependencies:

2. Navigate to the project root and install both backend and frontend dependencies.
# Install backend dependencies
cd backend
npm install

# Go back to the project root
cd ..

# Install frontend dependencies
- cd src
- npm install

3. Configure the Backend:

    Ensure MongoDB is running locally. Update the MongoDB URL in backend/server.js if necessary.

4. Start the Development Servers:

    In one terminal, start the backend server:
- cd backend
- npm run server

5. In another terminal, start the frontend server:

  ***bash
     cd src
     npm start

6. Alternatively, you can run both servers concurrently:
bash

cd ..
npm run dev
API Endpoints
Authentication:

POST /api/login: Login endpoint.
POST /api/register: Registration endpoint.
Employee:

POST /api/employee/availability: Create employee availability.
GET /api/employee/shifts: Retrieve assigned shifts.

## Admin:

GET /api/admin/availability: View employee availability.
POST /api/admin/shifts: Create new shifts.

## Frontend API URL Format

Ensure your Axios calls use the correct API URL format:

## Example GET request:

 
- Copy code
axios.get('http://localhost:5000/api/employee/shifts')
  .then(response => {
    // Handle response
  })
  .catch(error => {
    console.error('Error fetching shifts:', error);
  });

## Example POST request:

 
Copy code
axios.post('http://localhost:5000/api/employee/availability', { /* payload */ })
  .then(response => {
    // Handle response
  })
  .catch(error => {
    console.error('Error creating availability:', error);
  });

## Usage
- Login: Navigate to /login to access the login page.
- Register: Navigate to /register to create a new account.
- Employee Dashboard: Available at /employee/availability and /employee/shifts.
- Admin Dashboard: Available at /admin/availability and /admin/shifts.

# Troubleshooting
- White Screen Issue: Ensure both backend and frontend servers are running. Check that API endpoints are correctly set up and accessible.
- Invalid Hook Call: Ensure you are using compatible versions of React and React DOM. Ensure that all React Hooks are used within functional components.
- No React Component Found: Ensure your component paths are correct and all required components are properly imported.
- Contributing
- Feel free to open issues or submit pull requests to enhance the project.

## License
- This project is licensed under the MIT License. See the LICENSE file for details.

# OUTPUTs
Some output Samples for your reference

![image](https://github.com/user-attachments/assets/b56571d3-2952-4369-9847-3aecc6ec86f4)
![image](https://github.com/user-attachments/assets/e31d963d-b540-48e9-9d4f-a27581de5398)
![image](https://github.com/user-attachments/assets/73f9d444-f6d1-4126-af48-21aa5ba22cd2)
![image](https://github.com/user-attachments/assets/ddd1f512-ba3a-4f46-9915-393a7e9faff0)
![image](https://github.com/user-attachments/assets/f15cba5d-5fd1-4bff-9e41-33170eb53dc7)
![image](https://github.com/user-attachments/assets/b23d43bd-ec50-4736-a50e-b42d0eac15d5)
![image](https://github.com/user-attachments/assets/28dc7426-001f-46af-9006-090d4dd0e3fe)










