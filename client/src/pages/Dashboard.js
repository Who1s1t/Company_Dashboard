import React, {useEffect, useState} from 'react';
import EmployeesTable from '../components/EmployeesTable';
import InfiniteDepartmentsTable from '../components/InfiniteDepartmentsTable';
import classes from "../style/Dashboard.module.css"
import EmployeeForm from '../components/EmployeeForm';
import {deleteEmployee} from "../services/api";

const Dashboard = () => {
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [formVisible, setFormVisible] = useState({add : false, update : false});
    const [update, setUpdate] = useState(false)
    useEffect(() =>{
        setFormVisible({...formVisible, update: false})
    },[selectedEmployee])

    return (
        <div className={classes.dashboard}>
            <h1>Company Dashboard</h1>
            <InfiniteDepartmentsTable/>
            <div className={classes.btnBox}>
                <button className={classes.button} onClick={() => setFormVisible({add: false, update: !formVisible.update})} disabled={!selectedEmployee}>
                    {formVisible.update? 'Отмена' : 'Изменить'}
                </button>
                <button className={classes.button} onClick={() => {setFormVisible({update: false, add: !formVisible.add})}} >
                    {formVisible.add? 'Отмена' : 'Добавить'}
                </button>
                <button className={classes.button} onClick={()=> {
                    deleteEmployee(selectedEmployee.employee_id)
                        .then(()=>setUpdate(!update))
                        .catch(error => console.error('Error adding employee:', error));
                }} disabled={!selectedEmployee}> Удалить</button>
            </div>
            {formVisible.update && <EmployeeForm setFormVisible={setFormVisible} selectedEmployee={selectedEmployee} setUpdate={setUpdate}/>}
            {formVisible.add && <EmployeeForm setFormVisible={setFormVisible}   setUpdate={setUpdate}/>}
            <EmployeesTable setSelectedEmployee={setSelectedEmployee} update={update}/>
        </div>
    );
};

export default Dashboard;
