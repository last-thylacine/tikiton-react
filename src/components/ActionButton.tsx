import { MainButton } from "@twa-dev/sdk/react"

import { useStore } from "../store"
import { usePay } from "../hooks"

export const ActionButton = () => {
	const drawer = useStore(state => state.drawer)
	const drawerOpen = useStore(state => state.drawerOpen)
	const pay = usePay()
	const showBuyButton = !drawer
	const showPayButton = drawer
	return (
		<>
			{showBuyButton && <MainButton text="Buy" onClick={drawerOpen} />}
			{showPayButton && <MainButton text="Pay" onClick={pay} />}
		</>
	)
}
