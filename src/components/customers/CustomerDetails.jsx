import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getSingleCustomer } from "../../services/CustmerService"
import { UserCard } from "../users/UserCard"


export const CustomerDetails = () => {
const [ customer, setCustomer] = useState({})

const {customerId} = useParams()

useEffect(() => {
    getSingleCustomer(customerId).then((singleCustomer) => {
        setCustomer(singleCustomer)
    })
}, [])

return <>
    <UserCard user={customer} key={customer.id}/>
</>

}