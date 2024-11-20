import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/employees')
            .then(response => response.json())
            .then(data => setEmployees(data))
            .catch(error => {
                console.error('Error fetching employees:', error);
            });
    }, []);

    const handleEdit = (id) => {
        navigate(`/employeeUpdate/${id}`);
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/employees/${id}`, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    setEmployees(employees.filter(employee => employee.id !== id));
                }
            })
            .catch(error => {
                console.error('Error deleting employee:', error);
            });
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Employee List</h2>
            <table className="table table-striped table-hover table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Unique ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Designation</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>
                                <img src={employee.image} alt={employee.name} width='50' height='50' className="img-thumbnail" />
                            </td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.gender}</td>
                            <td>
                                <button className="btn btn-outline-warning btn-sm mx-1" onClick={() => handleEdit(employee.id)}>Update</button>
                                <button className="btn btn-outline-danger btn-sm mx-1" onClick={() => handleDelete(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
