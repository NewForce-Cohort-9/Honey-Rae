import { getAllTickets } from "./services/TicketService"
import { useState, useEffect } from "react"


// {
//   "id": 1,
//   "userId": 3,
//   "description": "Cracked phone screen",
//   "emergency": false,
//   "dateCompleted": "Fri Apr 29 2022 14:02:20 GMT-0500 (Central Daylight Time)"
//   },

export const App = () => {
  const [allTickets, setAllTickets] = useState([])
  const [showEmergency, setShowEmegency] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([])

  // Initial UseEffect:
  // useEffect to fetch tickets and set to allTickets on initial render
  // useEffect(() => {}, [])
  useEffect(() => {
    getAllTickets().then(ticketsArray => {
      setAllTickets(ticketsArray)
    })
  }, [])

  useEffect(() => {
    if(showEmergency){
      const emergencyTickets = allTickets.filter((ticket) => ticket.emergency === true)
      setFilteredTickets(emergencyTickets)
    } else {
      setFilteredTickets(allTickets)
    }
  }, [showEmergency, allTickets])




//tiernary operator - condition ? true : false replaces if/else in JSX 
// if(ticket.emergency === true){
  // return "yes"
// } else { return "no"}
//{ticket.emergency ? "yes" : "no"}

  return <article className="tickets"> TICKETS
    <button onClick={() => setShowEmegency(true)}>Emergency Tickets</button>
    <button onClick={() => setShowEmegency(false)}>All Tickets</button>
      <ul>
      {filteredTickets.map(ticket => {
        return <li className="ticket" key={ticket.id}>
            {ticket.description} - {ticket.emergency ? "yes" : "no"}
          </li>
      })}
      </ul>
    </article>
  
}