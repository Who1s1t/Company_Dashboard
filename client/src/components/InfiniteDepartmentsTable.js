import React, { useState} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import {getDepartmentsWithOffset} from "../services/api";

const InfiniteDepartmentsTable = ({}) => {
    const [columnDefs] = useState([
        { headerName: "Department ID", field: "department_id" },
        { headerName: "Name", field: "name" },
        { headerName: "Budget", field: "budget" },
        { headerName: "Established", field: "established", valueFormatter: (p)=> new Date(p.value).toLocaleDateString() },
        { headerName: "Department Code", field: "department_code" },
    ]);

    const dataSource = {
        getRows: params => {
            const { startRow, endRow } = params;
            getDepartmentsWithOffset(startRow, endRow-startRow)
                .then(response => {
                    params.successCallback(response.data.data,+response.data.lastId);
                })
                .catch(error => {
                    console.error('Error fetching departments data:', error);
                    params.failCallback();
                });
        }
    };



    return (
        <div className="ag-theme-quartz ag-theme-first" >
            <AgGridReact
                defaultColDef={{width: 170, sortable: false}}
                columnDefs={columnDefs}
                rowModelType="infinite"
                datasource={dataSource}
                rowSelection="single"
                cacheBlockSize={10}>
            </AgGridReact>
        </div>
    );
};

export default InfiniteDepartmentsTable;