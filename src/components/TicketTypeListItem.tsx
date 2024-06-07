import { Flex, IconButton, Text } from "@chakra-ui/react"
import { FaPlus, FaMinus } from "react-icons/fa6"

import { useStore } from "../store"

const addToCart = (id) => {
	console.log(`ticket_type id=${id} added to cart`)
}

export const TicketTypeListItem = ({ ticket_type }) => {
	const { id, name, cost } = ticket_type
	const qty = useStore(state => state.cart[id])
	const cartIncr = useStore(state => state.cartIncr)
	const cartDecr = useStore(state => state.cartDecr)
	return (
		<Flex
			p={2}
			align="center"
			justify="space-between"
			onClick={() => addToCart(id)}
		>
			<Text>{name}</Text>
			<Flex>
				<Text mr={4}>
					{`${cost.value} ${cost.currency}`}
				</Text>
				<IconButton
					mr={2}
					onClick={() => cartDecr(id)}
					isRound={true}
					variant='solid'
					aria-label='-'
					fontSize='14px'
					boxSize="20px"
					icon={<FaMinus />}
				/>
				<div>{qty ?? 0}</div>
				<IconButton
					ml={2}
					onClick={() => cartIncr(id)}
					isRound={true}
					variant='solid'
					aria-label='+'
					fontSize='14px'
					boxSize="20px"
					icon={<FaPlus />}
				/>
			</Flex>
		</Flex>
	)
}
