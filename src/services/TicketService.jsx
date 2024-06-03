export const getAllTickets = () => {
    return fetch("http://localhost:8088/serviceTickets")
    .then((response) => response.json())
}

export const getTicketsByAssignee = () => {
    return fetch("http://localhost:8088/serviceTickets?_expand=user&_embed=employeeTickets")
    .then((res) => res.json())
}

export const createEmployeeTicket = (employeeTicket) => {
    return fetch(`http://localhost:8088/employeeTickets`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(employeeTicket)
    })
}


export const editTicket = (ticket) => {
    return fetch(`http://localhost:8088/serviceTickets/${ticket.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(ticket)
    })
}