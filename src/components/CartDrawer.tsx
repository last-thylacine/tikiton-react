import { Sheet } from 'react-modal-sheet'

import { useStore } from '../store'
import { TicketTypeList } from './TicketTypeList'

export const CartDrawer = () => {
	const drawer = useStore(state => state.drawer)
	const drawerClose = useStore(state => state.drawerClose)
	return (
		<Sheet isOpen={drawer} onClose={drawerClose}>
			<Sheet.Container style={{ background: 'grey' }}>
				<Sheet.Header />
				<Sheet.Content>
					<TicketTypeList />
				</Sheet.Content>
			</Sheet.Container>
			<Sheet.Backdrop />
		</Sheet>
	)
}
