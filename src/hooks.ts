import WebApp from '@twa-dev/sdk'
import { useTonConnectUI } from '@tonconnect/ui-react'

import { createTransaction } from './helpers'
import { ONE_NANOTON, SELLER_ADDRESS } from './constants'

export const usePay = () => {
	const [tonConnectUI, _setOptions] = useTonConnectUI()
	const pay = async () => {
		const transaction = createTransaction(SELLER_ADDRESS, ONE_NANOTON)
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
