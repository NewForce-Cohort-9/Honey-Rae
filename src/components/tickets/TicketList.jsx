import { getAllTickets, getTicketsByAssignee } from "../../services/TicketService"
import { getTicketsByEmployee } from "../../services/EmployeeService"
import { useState, useEffect } from "react"
import { TicketCard } from "./TicketCard"
import { TicketSearch } from "./TicketSearch"


// {
//   "id": 1,
//   "userId": 3,
//   "description": "Cracked phone screen",
//   "emergency": false,
//   "dateCompleted": "Fri Apr 29 2022 14:02:20 GMT-0500 (Central Daylight Time)"
//   },

export const TicketList = ({currentUser}) => {
  const [allTickets, setAllTickets] = useState([])
  const [showEmergency, setShowEmegency] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([])
  const [searchQuery, setsearchQuery] = useState("")


  //future Sarah: we need to run this fetch call and not getAllTickets so we have all information for TicketCard
const resetState = () => {
  getTicketsByAssignee().then(ticketArray => {
    setAllTickets(ticketArray)
  })
}
  // Initial UseEffect:
  // useEffect to fetch tickets and set to allTickets on initial render
  // useEffect(() => {}, [])
  useEffect(() => {
    resetState()
  }, [])

  useEffect(() => {
    if(showEmergency){
      const emergencyTickets = allTickets.filter((ticket) => ticket.emergency === true)
      setFilteredTickets(emergencyTickets)
    } else {
      setFilteredTickets(allTickets)
    }
  }, [showEmergency, allTickets])


  useEffect(() => {
    const searchedTickets = allTickets.filter((singleTicket) => 
    singleTicket.description.toLowerCase().includes(searchQuery.toLowerCase()))
    setFilteredTickets(searchedTickets)
  }, [searchQuery, allTickets])

//tiernary operator - condition ? true : false replaces if/else in JSX 
// if(ticket.emergency === true){
  // return "yes"
// } else { return "no"}
//{ticket.emergency ? "yes" : "no"}

  return <article className="tickets"> TICKETS
    <button onClick={() => setShowEmegency(true)}>Emergency Tickets</button>
    <button onClick={() => setShowEmegency(false)}>All Tickets</button>
    <TicketSearch setSearchQuery={setsearchQuery} searchQuery={searchQuery} />
      <ul>
      {filteredTickets.map(ticket => {
        return <TicketCard key={ticket.id} ticket={ticket} currentUser={currentUser} resetState={resetState}/>
      })}
      </ul>
    </article>
  
}