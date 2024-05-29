import { useState, useEffect } from "react"
import { getAllEmployees } from "../../services/EmployeeService.jsx"

export const TicketCard = ({ticket}) => {

    const [employees, setEmployees] = useState([])
    const [assignedEmployee, setAssignedEmployee] = useState({})

    useEffect(() => {
        getAllEmployees().then(employeeTickets => {
          setEmployees(employeeTickets)
        })
    }, [])


    useEffect(() => {
        const foundEmployee = employees.find((employee) => employee.id === ticket.employeeTickets[0]?.employeeId);
        setAssignedEmployee(foundEmployee)
    }, [employees, ticket]) 

    // return <></>
    return <li className="ticket">
      {/* come back to fix assigned to later */}
    {ticket?.description} - {ticket?.emergency ? "yes" : "no"} - {assignedEmployee?.user ? `Assigned to - ${assignedEmployee?.user?.name}` : "Not assigned"}
  </li>
}