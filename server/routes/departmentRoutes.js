const express = require('express');
const DepartmentController = require('../controllers/departmentController');
const router = express.Router();

router.get('/api/departments', DepartmentController.getAll);
router.get('/api/departments/:id', DepartmentController.getById);
router.post('/api/departments', DepartmentController.create);
router.put('/api/departments/:id', DepartmentController.update);
router.delete('/api/departments/:id', DepartmentController.delete);

module.exports = router;