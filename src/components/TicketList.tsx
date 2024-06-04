import css from "./TicketList.module.css"
import { TicketListItem } from "./TicketListItem"

export const TicketList = ({ tickets }) => (
    <div className={css.ticketList}>
        {tickets.map(ticket => (
            <TicketListItem ticket={ticket} />
        ))}
    </div>
)
