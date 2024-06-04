import css from "./TicketTypeListItem.module.css"

export const TicketTypeListItem = ({ ticket_type }) => (
	<div className={css.ticketTypeListItem}>
		<div>
			<div className={css.ticketTypeName}>
				{ticket_type.name}
			</div>
			<div className={css.ticketTypeDescription}>
				{ticket_type.description}
			</div>
		</div>
		<div className={css.ticketTypeCost}>
			{`${ticket_type.cost.value} ${ticket_type.cost.currency}`}
		</div>
	</div>
)
