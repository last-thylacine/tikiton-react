import { TicketTypeListItem } from "./TicketTypeListItem"

import css from "./TicketTypeList.module.css"

export const TicketTypeList = ({ ticket_types }) => {
	return (
		<div className={css.ticketTypeList}>
			{ticket_types.map(ticket_type => (
				<TicketTypeListItem ticket_type={ticket_type} />
			))}
		</div>
	)
}
