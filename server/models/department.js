const db = require('./db');

class Department {
    static async getAll(limit, offset) {
        let res = {data: await db.any('SELECT * FROM departments LIMIT $1 OFFSET $2', [limit, offset])};
        res.lastId = await ((db.one('SELECT COUNT(*) FROM departments')).then(r => r.count))
        return res
    }

    static async getById(id) {
        return db.oneOrNone('SELECT * FROM departments WHERE department_id = $1', [id]);
    }

    static async create(name, budget, established, department_code) {
        return db.one('INSERT INTO departments(name, budget, established, department_code) VALUES($1, $2, $3, $4) RETURNING *', [name, budget, established, department_code]);
    }

    static async update(id, name, budget, established, department_code) {
        return db.none('UPDATE departments SET name=$1, budget=$2, established=$3, department_code=$4 WHERE department_id=$5', [name, budget, established, department_code, id]);
    }

    static async delete(id) {
        return db.none('DELETE FROM departments WHERE department_id=$1', [id]);
    }
}

module.exports = Department;