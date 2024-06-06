import { MainButton } from "@twa-dev/sdk/react"

import { useStore } from "../store"
import { usePay } from "../hooks"

export const ActionButton = () => {
	const action = useStore(state => state.action)
	const actionHide = useStore(state => state.actionHide)
	const drawerOpen = useStore(state => state.drawerOpen)
	const pay = usePay()
	const onBuy = () => {
		actionHide()
		drawerOpen()
	}
	const onPay = () => {
		actionHide()
		pay()
	}
	return (
		<>
			{action === 'Buy' && <MainButton text={action} onClick={onBuy} />}
			{action === 'Pay' && <MainButton text={action} onClick={onPay} />}
		</>
	)
}
