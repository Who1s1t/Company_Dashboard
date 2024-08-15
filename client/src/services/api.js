import axios from 'axios';

const API_URL = "http://localhost:3000";

const api = axios.create({
    baseURL: API_URL
});

export const getDepartmentsWithOffset= (offset, limit) => api.get(`/api/departments?limit=${limit}&offset=${offset}`);
export const getDepartments= () => api.get(`/api/departments`);
export const getEmployees = () => api.get(`/api/employees`);
export const addEmployee = (employee) => api.post('/api/employees', employee);
export const updateEmployee = (employeeId, employee) => api.put(`/api/employees/${employeeId}`, employee);
export const deleteEmployee = (employeeId) => api.delete(`/api/employees/${employeeId}`)