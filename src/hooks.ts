import WebApp from '@twa-dev/sdk'
import { useTonConnectUI } from '@tonconnect/ui-react'

import { createTransaction } from './helpers'
import { SELLER_ADDRESS } from './constants'
import { useStore } from './store'

export const usePay = () => {
	const [tonConnectUI, _setOptions] = useTonConnectUI()
	const cart = useStore(state => state.cart)
	const ticket_types = useStore(state => state.events[state.event].ticket_types)
	const total = Object.entries(cart).reduce((acc, [ticket_id, ticket_qty]) =>
		acc + ticket_types[ticket_id].cost.value * ticket_qty, 0)
	const pay = async () => {
		const transaction = createTransaction(SELLER_ADDRESS, String(total))
		try {
			await tonConnectUI.sendTransaction(transaction)
			WebApp.showAlert('success')
		} catch (e) {
			console.error(e)
			WebApp.showAlert(e)
		}
	}
	return pay
}
