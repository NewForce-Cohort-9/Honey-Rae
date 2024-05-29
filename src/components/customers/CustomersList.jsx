import { useEffect, useState } from "react";
import { getAllCustomers } from "../../services/CustmerService";

export const CustomerList = () => {
const [customers, setCustomers] = useState([])

useEffect(() => {
    getAllCustomers().then(customerArray => setCustomers(customerArray))
}, [])

return <>
    <div>
        <h1>CUSTOMERS</h1>
        {customers.map((singleCustomer) => {
            return(
                <p>{singleCustomer.user?.fullName}</p>
            )
        })}
    </div>
</>

}