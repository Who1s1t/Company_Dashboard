const express = require('express');
const EmployeeController = require('../controllers/employeeController');
const router = express.Router();

router.get('/api/employees', EmployeeController.getAll);
router.get('/api/employees/:id', EmployeeController.getById);
router.post('/api/employees', EmployeeController.create);
router.put('/api/employees/:id', EmployeeController.update);
router.delete('/api/employees/:id', EmployeeController.delete);

module.exports = router;