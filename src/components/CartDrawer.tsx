import WebApp from '@twa-dev/sdk'
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

import { useStore } from '../store'
import { usePay } from '../hooks'
import { TicketTypeList } from './TicketTypeList'

export const CartDrawer = () => {
	const drawer = useStore(state => state.drawer)
	const drawerClose = useStore(state => state.drawerClose)
	const pay = usePay()
	return (
		<>
			<Drawer
				isOpen={drawer}
				placement='bottom'
				onClose={drawerClose}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					{/* <DrawerHeader>Create your account</DrawerHeader> */}

					<DrawerBody>
						<TicketTypeList />
						{WebApp.platform === 'unknown' && <Button onClick={pay}>Pay</Button>}
					</DrawerBody>

					{/* <DrawerFooter>
					<Button variant='outline' mr={3} onClick={drawerClose}>
						Cancel
					</Button>
					<Button>Save</Button>
				</DrawerFooter> */}
				</DrawerContent>
			</Drawer>
		</>
	)
}
