import {Outlet, Route, Routes} from "react-router-dom"
import { EmployeeNav } from "../components/nav/EmployeeNav"
import { CustomerDetails } from "../components/customers/CustomerDetails"
import { CustomerList } from "../components/customers/CustomersList"
import { TicketList } from "../components/tickets/TicketList"
import { EmployeeDetails } from "../components/employees/EmployeeDetails"
import { EmployeeList } from "../components/employees/EmployeeList"
import { EmployeeForm } from "../components/forms/EmployeeForm"

export const EmployeeViews = ({currentUser}) => {
    return (
        <Routes>
            <Route path="/" element={<>
            <Outlet/>
            <EmployeeNav />
            </>}>
            <Route path="/" element={<>Hello!</>} />
    <Route path="/tickets"
    element={<TicketList currentUser={currentUser} />} />
    <Route path="/customers" element={<CustomerList />} />
    <Route path="/customers/:customerId" element={<CustomerDetails />} />.
    <Route path="/employees" element={<EmployeeList />} />
    <Route path="/employees/:employeeId" element={<EmployeeDetails />} />
    <Route path="/profile" element={<EmployeeForm currentUser={currentUser} />}/>
            </Route>
        </Routes>
    )
}