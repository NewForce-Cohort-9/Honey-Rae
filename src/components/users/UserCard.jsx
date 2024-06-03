export const UserCard = ( {user} ) => {

return <>
<div>{user?.user?.fullName}</div>
<div>{user?.user?.email}</div>
</>
}