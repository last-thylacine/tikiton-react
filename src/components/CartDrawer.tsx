import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
} from '@chakra-ui/react'
import { MainButton } from '@twa-dev/sdk/react'

import { useStore } from '../store'
import { usePay } from '../hooks'
import { TicketTypeList } from './TicketTypeList'

export const CartDrawer = () => {
	const drawer = useStore(state => state.drawer)
	const drawerClose = useStore(state => state.drawerClose)
	const pay = usePay()
	const showPayButton = drawer
	return (
		<>
			<Drawer
				isOpen={drawer}
				placement='bottom'
				onClose={drawerClose}
			// finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					{/* <DrawerHeader>Create your account</DrawerHeader> */}

					<DrawerBody>
						<TicketTypeList />
						<Button onClick={pay}>Pay</Button>
					</DrawerBody>

					{/* <DrawerFooter>
					<Button variant='outline' mr={3} onClick={drawerClose}>
						Cancel
					</Button>
					<Button>Save</Button>
				</DrawerFooter> */}
				</DrawerContent>
			</Drawer>
			{showPayButton && <MainButton text="Pay" onClick={pay} />}
		</>
	)
}
