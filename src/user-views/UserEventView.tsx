import WebApp from '@twa-dev/sdk'
import { BackButton } from '@twa-dev/sdk/react'
import { TonConnectButton } from '@tonconnect/ui-react'
import { Button } from '@chakra-ui/react'

import { EventCard } from "../components/EventCard"
import { Main } from "../components/Main"
import { useStore } from '../store'
import { CartDrawer } from '../components/CartDrawer'
import { ActionButton } from '../components/ActionButton'

export const UserEventView = () => {
	console.log(WebApp.platform)
	const drawerOpen = useStore(state => state.drawerOpen)
	return (
		<>
			<BackButton onClick={() => WebApp.showAlert('no going back')} />
			<Main>
				<TonConnectButton style={{ float: "right" }} />
				<EventCard />
				{WebApp.platform === 'unknown' && <Button onClick={drawerOpen}>Buy</Button>}
				<div>{WebApp.platform}</div>
			</Main>
			<CartDrawer />
			<ActionButton />
		</>
	)
}
