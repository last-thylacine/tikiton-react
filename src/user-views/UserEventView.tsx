import WebApp from '@twa-dev/sdk'
import { BackButton, MainButton } from '@twa-dev/sdk/react'
import { TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react'

import { EventCard } from "../components/EventCard"
import { Main } from "../components/Main"
import { TicketTypeList } from "../components/TicketTypeList"
import { ONE_NANOTON, SELLER_ADDRESS } from '../constants'
import { createTransaction } from '../helpers'
import { useStore } from '../store'
import { CartDrawer } from '../components/CartDrawer';

export const UserEventView = () => {
	const drawerOpen = useStore(state => state.drawerOpen)
	const [tonConnectUI, _setOptions] = useTonConnectUI()
	const pay = async () => {
		const transaction = createTransaction(SELLER_ADDRESS, ONE_NANOTON)
		try {
			await tonConnectUI.sendTransaction(transaction)
			WebApp.showAlert('success')
		} catch (e) {
			console.error(e)
			WebApp.showAlert('failure')
		}
	}
	return (
		<>
			<BackButton onClick={() => WebApp.showAlert('no going back')} />
			<MainButton text="Pay" onClick={pay} />
			<Main>
				<TonConnectButton style={{ float: "right" }} />
				<EventCard />
				<TicketTypeList />
				<button onClick={drawerOpen}>Open sheet</button>
				<CartDrawer />
			</Main>
		</>
	)
}
