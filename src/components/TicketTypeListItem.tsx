import { useStore } from "../store"
import css from "./TicketTypeListItem.module.css"

const addToCart = (id) => {
	console.log(`ticket_type id=${id} added to cart`)
}

export const TicketTypeListItem = ({ ticket_type }) => {
	const { id, name, description, cost } = ticket_type
	const qty = useStore(state => state.cart[id])
	const cartIncr = useStore(state => state.cartIncr)
	const cartDecr = useStore(state => state.cartDecr)
	return (
		<div className={css.ticketTypeListItem} onClick={() => addToCart(id)}>
			<div>
				<div className={css.ticketTypeName}>
					{name}
				</div>
				<div className={css.ticketTypeDescription}>
					{description}
				</div>
			</div>
			<div className={css.ticketTypeCost}>
				{`${cost.value} ${cost.currency}`}
			</div>
			{ qty && (
				<>
					<div onClick={() => cartDecr(id)}>-</div>
					<div>{qty}</div>
					<div onClick={() => cartIncr(id)}>+</div>
				</>
			)}
			{ !qty && (
				<div onClick={() => cartIncr(id)}>add</div>
			)}
		</div>
	)
}
