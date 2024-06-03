import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { UserCard } from "../users/UserCard"
import { getSingleEmployee } from "../../services/EmployeeService"
import { EmployeeCard } from "./EmployeeCard"


export const EmployeeDetails = () => {
const [ employee, setEmployee] = useState({})

const {employeeId} = useParams()

useEffect(() => {
    getSingleEmployee(employeeId).then((singleEmployee) => {
        setEmployee(singleEmployee)
    })
}, [])

return <>
    <EmployeeCard user={employee} key={employee.id} />
</>

}