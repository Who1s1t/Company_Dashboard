const Employee = require('../models/employee');

class EmployeeController {
    static async getAll(req, res) {
        try {
            const employees = await Employee.getAll();
            res.json(employees);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async getById(req, res) {
        try {
            const employee = await Employee.getById(req.params.id);
            if (employee) {
                res.json(employee);
            } else {
                res.status(404).json({ error: 'Employee not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async create(req, res) {
        const { first_name, last_name, salary, hire_date, department_id, employee_code } = req.body;
        try {
            const newEmployee = await Employee.create(first_name, last_name, salary, hire_date, department_id, employee_code);
            res.status(201).json(newEmployee);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async update(req, res) {
        const { first_name, last_name, salary, hire_date, department_id, employee_code } = req.body;
        try {
            await Employee.update(req.params.id, first_name, last_name, salary, hire_date, department_id, employee_code);
            res.status(204).end();
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async delete(req, res) {
        try {
            await Employee.delete(req.params.id);
            res.status(204).end();
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = EmployeeController;