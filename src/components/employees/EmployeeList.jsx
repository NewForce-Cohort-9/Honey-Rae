import { useEffect, useState } from "react";
import { getAllEmployees } from "../../services/EmployeeService";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
const [employees, setEmployees] = useState([])

useEffect(() => {
    getAllEmployees().then(employeeArray => setEmployees(employeeArray))
}, [])

return <>
    <div>
        <h1>Employees</h1>
        {employees.map((singleEmployee) => {
            return(
                <Link to={`/employees/${singleEmployee.id}`} key={singleEmployee.id}>
                <p>{singleEmployee.user?.fullName}</p>
                </Link>
            )
        })}
    </div>
</>

}