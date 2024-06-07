import WebApp from '@twa-dev/sdk'
import { BackButton } from '@twa-dev/sdk/react'
import { TonConnectButton } from '@tonconnect/ui-react'
import { Avatar, Button, Flex } from '@chakra-ui/react'

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
			<BackButton onClick={() => WebApp.showAlert('no going back')} />
			<Main>
				<Flex align="center" justify="space-between">
					<Avatar boxSize="40px" bgColor="rgb(18, 18, 20)" />
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
