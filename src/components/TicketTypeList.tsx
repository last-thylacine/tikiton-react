import css from "./TicketTypeList.module.css"
import { TicketTypeListItem } from "./TicketTypeListItem"

export const TicketTypeList = ({ ticket_types }) => (
	<div className={css.ticketTypeList}>
		{ticket_types.map(ticket_type => (
			<TicketTypeListItem ticket_type={ticket_type} />
		))}
	</div>
)
