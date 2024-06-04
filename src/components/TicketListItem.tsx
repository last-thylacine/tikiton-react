import css from "./TicketListItem.module.css"

export const TicketListItem = ({ ticket }) => (
    <div className={css.ticketListItem}>
        <div>
            <div>{ticket.name}</div>
            <div>{ticket.description}</div>
        </div>
        <div>{ticket.cost.value} {ticket.cost.currency}</div>
    </div>
)
