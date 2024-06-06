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
import { TicketTypeList } from './TicketTypeList'

export const CartDrawer = () => {
	const drawer = useStore(state => state.drawer)
	const drawerClose = useStore(state => state.drawerClose)
	return (
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
				</DrawerBody>

				{/* <DrawerFooter>
					<Button variant='outline' mr={3} onClick={drawerClose}>
						Cancel
					</Button>
					<Button>Save</Button>
				</DrawerFooter> */}
			</DrawerContent>
		</Drawer>
	)
}
