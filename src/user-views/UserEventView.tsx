import WebApp from '@twa-dev/sdk'
import { BackButton, MainButton } from '@twa-dev/sdk/react'
import { TonConnectButton } from '@tonconnect/ui-react'
import { Button } from '@chakra-ui/react'

import { EventCard } from "../components/EventCard"
import { Main } from "../components/Main"
import { useStore } from '../store'
import { CartDrawer } from '../components/CartDrawer'

export const UserEventView = () => {
	const drawer = useStore(state => state.drawer)
	const drawerOpen = useStore(state => state.drawerOpen)
	const showBuyButton = !drawer
	return (
		<>
			<BackButton onClick={() => WebApp.showAlert('no going back')} />
			<Main>
				<TonConnectButton style={{ float: "right" }} />
				<EventCard />
			</Main>
			<CartDrawer />
			<Button onClick={drawerOpen}>Buy</Button>
			{showBuyButton && <MainButton text="Buy" onClick={drawerOpen} />}
		</>
	)
}
