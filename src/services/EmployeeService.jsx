export const getTicketsByEmployee = () => {
    return fetch("http://localhost:8088/employees?_embed=employeeTickets&_expand=user")
    .then(res => res.json())
}

export const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees?_expand=user")
    .then(response => response.json())
}

export const getSingleEmployee = (employeeId) => {
    return fetch(`http://localhost:8088/employees/${employeeId}?_expand=user`)
    .then(res => res.json())
}

export const getEmployeeByUserId = (userId) => {
    return fetch(`http://localhost:8088/employees/?_expand=user&userId=${userId}`)
    .then(res => res.json())
}

export const editEmployee = (employee) => {
    return fetch(`http://localhost:8088/employees/${employee.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(employee)
    })
}