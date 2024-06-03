//edit employee specialty and rate

import { useEffect, useState } from "react"
import { editEmployee, getEmployeeByUserId } from "../../services/EmployeeService"
import { useNavigate } from "react-router-dom"



export const EmployeeForm = ({currentUser}) => {
const [employee, setEmployee] = useState({})
const navigate = useNavigate()

useEffect(() => {
    getEmployeeByUserId(currentUser.id).then((singleEmployee) => {
        const employeeObject = singleEmployee[0]
        setEmployee(employeeObject)
    })
}, [currentUser])


const handleEdit = (e) => {
    e.preventDefault()

    const editedEmployee = {
        id: employee.id,
        specialty: employee.specialty,
        rate: employee.rate,
        userId: employee.userId
    }

    editEmployee(editedEmployee).then(() => {
        navigate(`/employees/${employee.id}`)
    })

}


return(
    <>
    <form>
        <label>Specialty:</label>
        <input
        type="text"
        value={employee?.specialty}
        onChange={(e) => {
            const copy = {...employee}
            copy.specialty = e.target.value
            setEmployee(copy)
        }}/>
        <label>Rate:</label>
        <input
        type="number"
        value={employee?.rate}
        onChange={(e) => {
            const copy = {...employee}
            copy.rate = e.target.value
            setEmployee(copy)
        }}
        />
        
        <button onClick={(e) => {handleEdit(e)}}>Save</button>
    </form>
    </>
)

}