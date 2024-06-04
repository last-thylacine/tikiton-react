import css from "./TicketTypeListItem.module.css"

export const TicketTypeListItem = ({ ticket_type }) => (
	<div className={css.ticketTypeListItem}>
		<div>
			<div>{ticket_type.name}</div>
			<div>{ticket_type.description}</div>
		</div>
		<div>{ticket_type.cost.value} {ticket_type.cost.currency}</div>
	</div>
)
