export const getAllTickets = () => {
    return fetch("http://localhost:8088/serviceTickets")
    .then((response) => response.json())
}

export const getTicketsByAssignee = () => {
    return fetch("http://localhost:8088/serviceTickets?_expand=user&_embed=employeeTickets")
    .then((res) => res.json())
}