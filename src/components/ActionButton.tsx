import { MainButton } from "@twa-dev/sdk/react"

import { useStore } from "../store"
import { usePay } from "../hooks"

export const ActionButton = () => {
	const drawer = useStore(state => state.drawer)
	const drawerOpen = useStore(state => state.drawerOpen)
	const cartNotEmpty = useStore(state => Object.values(state.cart).some(qty => qty > 0))
	const modalTrue = useStore(state => state.modalTrue)
	const modalFalse = useStore(state => state.modalFalse)
	const pay = usePay()
	const onBuy = () => {
		drawerOpen()
	}
	const onPay = async () => {
		modalTrue()
		await pay()
		modalFalse()
	}
	const showBuyButton = !drawer
	const showPayButton = drawer && cartNotEmpty
	return (
		<>
			{showBuyButton && <MainButton text='Buy' onClick={onBuy} />}
			{showPayButton && <MainButton text='Pay' onClick={onPay} />}
		</>
	)
}
