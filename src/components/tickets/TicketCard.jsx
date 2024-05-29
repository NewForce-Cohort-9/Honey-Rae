import { useState, useEffect } from "react"
import { getAllEmployees } from "../../services/EmployeeService.jsx"
import { createEmployeeTicket, editTicket } from "../../services/TicketService.jsx"

export const TicketCard = ({ticket, currentUser, resetState}) => {

    const [employees, setEmployees] = useState([])
    const [assignedEmployee, setAssignedEmployee] = useState({})

    useEffect(() => {
        getAllEmployees().then(employeeTickets => {
          setEmployees(employeeTickets)
        })
    }, [])


    useEffect(() => {
        const foundEmployee = employees.find((employee) => {      
          return employee.id === ticket?.employeeTickets[0]?.employeeId});
        
        setAssignedEmployee(foundEmployee)
    }, [employees, ticket]) 


// when claiming a ticket - this should post a new object to employee ticket with two foreign keys - employeeId and serviceTicketId when clicking the button
const handleClaim = () => {
  const currentEmployee = employees.find((singleEmployee) => singleEmployee.userId === currentUser.id)

  const newEmployeeTicket = {
    employeeId: currentEmployee.id,
    serviceTicketId: ticket.id
  }
  createEmployeeTicket(newEmployeeTicket).then(() => {
    resetState()
  })
}

//when closing a ticket - this should edit the object and add a date when clicking the button
//error: handle close is not a function even though it is very clearly a function
const handleClose = () => {
  const completedTicket =  {
    id: ticket.id,
    userId: ticket.userId, 
    description: ticket.description,
    emergency: ticket.emergency,
    dataCompleted: new Date()
  }
  editTicket(completedTicket).then(() => {
    resetState()
  })
}
 
    return <li className="ticket">
    {ticket?.description} - {ticket?.emergency ? "yes" : "no"} - {assignedEmployee?.user ? `Assigned to ${assignedEmployee?.user?.fullName}` : "Not assigned"}
    {assignedEmployee?.user ? "" : <button onClick={handleClaim}>Claim</button>}
    {(assignedEmployee?.userId === currentUser?.id && !ticket?.dateCompleted) ? <button onClick={handleClose}>Close</button> : ""}
  </li>
}