import WebApp from '@twa-dev/sdk'
import { BackButton } from '@twa-dev/sdk/react'
import { TonConnectButton } from '@tonconnect/ui-react'
import { Avatar, Box, Button, Flex } from '@chakra-ui/react'
import { GiTicket } from "react-icons/gi"

import { EventCard } from "../components/EventCard"
import { Main } from "../components/Main"
import { CartDrawer } from '../components/CartDrawer'
import { ActionButton } from '../components/ActionButton'
import { IN_BROWSER } from '../constants'
import { useStore } from '../store'

export const UserEventView = () => {
	const drawerOpen = useStore(state => state.drawerOpen)
	return (
		<>
			<BackButton onClick={() => WebApp.close()} />
			<Main>
				<Flex align="center" justify="space-between">
					<Box>
						<Avatar
							bg="rgb(18, 18, 20)"
							boxSize="40px"
							mr={3}
						/>
						<Avatar
							bg="rgb(18, 18, 20)"
							boxSize="40px"
							icon={<GiTicket fontSize="30px" />}
						/>
					</Box>
					<TonConnectButton />
				</Flex>
				<EventCard />
				{IN_BROWSER && <Button onClick={drawerOpen}>Buy</Button>}
			</Main>
			<CartDrawer />
			<ActionButton />
		</>
	)
}
