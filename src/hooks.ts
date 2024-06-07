import WebApp from '@twa-dev/sdk'
import { useTonConnectUI } from '@tonconnect/ui-react'

import { createTransaction } from './helpers'
import { SELLER_ADDRESS } from './constants'
import { useStore } from './store'

export const usePay = () => {
	const [tonConnectUI, _setOptions] = useTonConnectUI()
	const cart = useStore(state => state.cart)
	const ticket_types = useStore(state => state.events[state.event].ticket_types)
	const total = ticket_types.reduce((partial_sum, ticket_type) => {
		const qty = cart[ticket_type.id] ?? 0
		const cost = ticket_type.cost.value
		return partial_sum + cost * qty
	}, 0)
	const pay = async () => {
		const transaction = createTransaction(SELLER_ADDRESS, String(total * 10 ** 9))
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
