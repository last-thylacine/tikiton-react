import WebApp from '@twa-dev/sdk'
import { BackButton, MainButton } from '@twa-dev/sdk/react'
import { TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react'

import { EventCard } from "../components/EventCard"
import { Main } from "../components/Main"
import { TicketTypeList } from "../components/TicketTypeList"
import { EVENT } from '../data/mock'
import { ONE_NANOTON, SELLER_ADDRESS } from '../data/constants'
import { createTransaction } from '../helpers'

export const UserEventView = () => {
	const event = EVENT
    const [tonConnectUI, setOptions] = useTonConnectUI()
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
			<MainButton text="Submit" onClick={() => WebApp.showAlert('submitted')} />
			<Main>
				<TonConnectButton style={{ float: "right" }} />
				<EventCard event={event} />
				<TicketTypeList ticket_types={event.ticket_types} />
				<button onClick={pay}>
					Pay
				</button>
				<div>{state}</div>
			</Main>
		</>
	)
}
