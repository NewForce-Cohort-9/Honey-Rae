export const getAllCustomers = () => {
    return fetch("http://localhost:8088/customers?_expand=user")
    .then(res => res.json())
}

export const getSingleCustomer = (customerId) => {
    return fetch(`http://localhost:8088/customers/${customerId}?_expand=user`)
    .then(res => res.json())
}