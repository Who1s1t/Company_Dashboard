import React, {useEffect, useState} from 'react';
import DateObject from "react-date-object";
import {addEmployee, getDepartments, updateEmployee} from "../services/api";
import classes from "../style/EmployeeForm.module.css"

const EmployeeForm = ({ setFormVisible, selectedEmployee, setUpdate}) => {
    const [employee, setEmployee] = useState(selectedEmployee ?
        {...selectedEmployee, hire_date: new DateObject(selectedEmployee.hire_date).format("YYYY-MM-DD")} :
        {
        first_name : '',
        last_name : '',
        salary : '',
        hire_date : new DateObject('').format("YYYY-MM-DD"),
        department_id : '',
        employee_code: ''
    })
    const [departments,setDepartments] = useState([])

    useEffect(()=>{
            getDepartments()
                .then(response=>setDepartments(response.data.data))
                .catch(error => console.error('Error fetching departments data:', error))
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedEmployee) {
            updateEmployee(selectedEmployee.employee_id, employee)
                .then(() => {
                    setFormVisible({add: false, update: false})
                    setUpdate(prevState => !prevState)
                })
                .catch(error => console.error('Error updating employee:', error));
        } else {
            addEmployee(employee)
                .then(() => {
                    setFormVisible({add: false, update: false})
                    setUpdate(prevState => !prevState)
                })
                .catch(error => console.error('Error adding employee:', error));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.inputBox}>
                <input className={classes.cstmInput} type="text" value={employee.first_name} onChange={(e)=>setEmployee({...employee, first_name: e.target.value})} placeholder="First Name" required />
                <input className={classes.cstmInput} type="text" value={employee.last_name} onChange={(e)=>setEmployee({...employee, last_name: e.target.value})}  placeholder="Last Name" required />
                <input className={classes.cstmInput} type="text" pattern="\d{1,10}\.\d{2}" value={employee.salary} onChange={(e)=>setEmployee({...employee, salary: e.target.value})} placeholder="Salary" required />
                <input className={classes.cstmInput} type="date" value={employee.hire_date} onChange={(e)=>setEmployee({...employee, hire_date: e.target.value})} placeholder="Hire Date" required />
                <input className={classes.cstmInput} type="text" pattern="\d{4,6}" value={employee.employee_code} onChange={(e)=>setEmployee({...employee, employee_code: e.target.value})} placeholder="Employee Code" required />
                <select className={classes.cstmSelect} value={employee.department_id} onChange={(e)=>setEmployee({...employee, department_id: e.target.value})} required>
                    <option value="">Select Department</option>
                    {departments.map(dept => (
                        <option key={dept.department_id} value={dept.department_id}>{dept.name}</option>
                    ))}
                </select>
                <button className={classes.cstmBtn} type="submit">{selectedEmployee ? 'Изменить' : 'Добавить'} Сотрудника</button>
            </div>
        </form>
    );
};

export default EmployeeForm;