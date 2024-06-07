import { useStore } from "../store"
import { TicketTypeListItem } from "./TicketTypeListItem"

import css from "./TicketTypeList.module.css"

export const TicketTypeList = () => {
	const ticket_types = useStore(state => state.events[state.event].ticket_types)
	return (
		<div className={css.ticketTypeList}>
			{ticket_types.map(ticket_type => (
				<TicketTypeListItem
					key={ticket_type.id}
					ticket_type={ticket_type}
				/>
			))}
		</div>
	)
}
