const Department = require('../models/department');

class DepartmentController {
    static async getAll(req, res) {
        const { limit , offset } = req.query;
        try {
            const departments = await Department.getAll(limit, offset);
            res.json(departments);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async getById(req, res) {
        try {
            const department = await Department.getById(req.params.id);
            if (department) {
                res.json(department);
            } else {
                res.status(404).json({ error: 'Department not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async create(req, res) {
        const { name, budget, established, department_code } = req.body;
        try {
            const newDepartment = await Department.create(name, budget, established, department_code);
            res.status(201).json(newDepartment);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async update(req, res) {
        const { name, budget, established, department_code } = req.body;
        try {
            await Department.update(req.params.id, name, budget, established, department_code);
            res.status(204).end();
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async delete(req, res) {
        try {
            await Department.delete(req.params.id);
            res.status(204).end();
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = DepartmentController;