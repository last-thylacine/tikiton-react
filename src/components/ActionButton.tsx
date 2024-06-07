import { MainButton } from "@twa-dev/sdk/react"

import { useStore } from "../store"
import { usePay } from "../hooks"

export const ActionButton = () => {
	const modal = useStore(state => state.modal)
	const modalTrue = useStore(state => state.modalTrue)
	const modalFalse = useStore(state => state.modalFalse)
	const drawer = useStore(state => state.drawer)
	const drawerOpen = useStore(state => state.drawerOpen)
	const drawerClose = useStore(state => state.drawerClose)
	const cartNotEmpty = useStore(state => Object.values(state.cart).some(qty => qty > 0))
	const pay = usePay()
	const onBuy = () => {
		drawerOpen()
	}
	const onPay = async () => {
		modalTrue()
		drawerClose()
		await pay()
		modalFalse()
	}
	const showBuyButton = !modal && !drawer
	const showPayButton = !modal && drawer && cartNotEmpty
	return (
		<>
			{showBuyButton && <MainButton text='Buy tickets' onClick={onBuy} />}
			{showPayButton && <MainButton text='Pay with TON' onClick={onPay} />}
		</>
	)
}
