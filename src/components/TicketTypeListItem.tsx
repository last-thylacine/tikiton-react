import css from "./TicketTypeListItem.module.css"

const addToCart = (id) => {
	console.log(`ticket_type id=${id} added to cart`)
}

export const TicketTypeListItem = ({ ticket_type }) => (
	<div className={css.ticketTypeListItem} onClick={() => addToCart(ticket_type.id)}>
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
