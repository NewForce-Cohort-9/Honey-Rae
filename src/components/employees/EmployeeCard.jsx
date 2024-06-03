export const EmployeeCard = ( {user} ) => {
console.log(user)
    return <>
    <div>Name: {user?.user?.fullName}</div>
    <div>Email: {user?.user?.email}</div>
    <div>Speciality: {user.specialty}</div>
    <div>Rate: {user.rate}</div>
    </>
    }