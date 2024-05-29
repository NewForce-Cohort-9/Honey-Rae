export const TicketSearch = ({searchQuery, setSearchQuery}) => {
    return <>
    <input type="text" placeholder="Please search here" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/></>
}