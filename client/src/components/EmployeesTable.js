import React, {useState, useEffect, useRef} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css'
import '../style/AgGrid.css';
import {getEmployees} from "../services/api";

const EmployeesTable = ({ setSelectedEmployee, update }) => {
    const [rowData, setRowData] = useState([]);
    const gridRef = useRef(null)
    const [columnDefs] = useState([
        { headerName: "Employee ID", field: "employee_id",sort: "asc" },
        { headerName: "First Name", field: "first_name" },
        { headerName: "Last Name", field: "last_name" },
        { headerName: "Salary", field: "salary" },
        { headerName: "Hire Date", field: "hire_date", valueFormatter: (p)=> new Date(p.value).toLocaleDateString() },
        { headerName: "Department ID", field: "department_id" },
        { headerName: "Employee Code", field: "employee_code" },
    ]);

    useEffect(() => {

        getEmployees()
                .then(response => setRowData(response.data))
                .catch(error => console.error('Error fetching employees data:', error));

    }, [update]);



    return (
        <div className={"ag-theme-quartz ag-theme-second"}>
            <AgGridReact
                defaultColDef={{width: 170}}
                ref={gridRef}
                rowData={rowData}
                onSelectionChanged={(e)=> {setSelectedEmployee(e.api.getSelectedRows()[0])}}
                rowSelection="single"
                columnDefs={columnDefs}>
            </AgGridReact>
        </div>
    );
};

export default EmployeesTable;