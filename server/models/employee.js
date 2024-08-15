const db = require('./db');

class Employee {
    static async getAll() {
        return db.any('SELECT * FROM employees');
    }

    static async getById(id) {
        return db.oneOrNone('SELECT * FROM employees WHERE employee_id = $1', [id]);
    }

    static async create(first_name, last_name, salary, hire_date, department_id, employee_code) {
        return db.one('INSERT INTO employees(first_name, last_name, salary, hire_date, department_id, employee_code) VALUES($1, $2, $3, $4, $5, $6) RETURNING *', [first_name, last_name, salary, hire_date, department_id, employee_code]);
    }

    static async update(id, first_name, last_name, salary, hire_date, department_id, employee_code) {
        return db.none('UPDATE employees SET first_name=$1, last_name=$2, salary=$3, hire_date=$4, department_id=$5, employee_code=$6 WHERE employee_id=$7', [first_name, last_name, salary, hire_date, department_id, employee_code, id]);
    }

    static async delete(id) {
        return db.none('DELETE FROM employees WHERE employee_id=$1', [id]);
    }
}

module.exports = Employee