require('dotenv').config();
const express = require('express');
const cors = require('cors')
const departmentRoutes = require('./routes/departmentRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
app.use(cors())
app.use(express.json());
app.use(departmentRoutes);
app.use(employeeRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});