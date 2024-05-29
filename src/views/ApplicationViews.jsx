import { useEffect, useState } from "react"
import { CustomerDetails } from "../components/customers/CustomerDetails"
import { CustomerList } from "../components/customers/CustomersList"
import { TicketList } from "../components/tickets/TicketList"
import { Routes, Route } from "react-router-dom"

//routes
// - auth
// - tickets done
// - employees 
// - customers done
// - customer details 

export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
      const localHoneyUser = localStorage.getItem("honey_user");
      const honeyUserObj = JSON.parse(localHoneyUser);
      setCurrentUser(honeyUserObj);
    }, []);

    
    return <>
    <Routes>
        <Route path="/" element={<>Hello!</>} />
    <Route path="/tickets"
    element={<TicketList currentUser={currentUser} />} />
    <Route path="/customers"
    element={<CustomerList />} />
    <Route path="/customers/:customerId" element={<CustomerDetails />} />
    </Routes>
    </>
}