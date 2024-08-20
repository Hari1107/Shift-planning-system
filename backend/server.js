const express = require('express');
const app = express();
const mongoose = require('mongoose');
const employeeRoutes = require('./routes/employeeRoutes');
const adminRoutes = require('./routes/adminRoutes');

// mongoose.connect('mongodb://localhost/shift-planning-system', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb://localhost:27017/shift-planning');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/employee', employeeRoutes);
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
  res.send('Shift Planning System');
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Shift Planning System listening on port ${PORT}`);
});