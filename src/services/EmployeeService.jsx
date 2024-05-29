export const getTicketsByEmployee = () => {
    return fetch("http://localhost:8088/employees?_embed=employeeTickets&_expand=user")
    .then(res => res.json())
}

export const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees?_expand=user")
    .then(response => response.json())
}