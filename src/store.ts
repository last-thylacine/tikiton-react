import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

// ticketTypes: {
// 	['TTY-001']: {
// 		id: 'TTY-001',
// 		name: 'Standard ticket',
// 		description: 'One line description',
// 		cost: { value: 1, currency: 'TON' },
// 	},
// 	['TTY-002']: {
// 		id: 'TTY-002',
// 		name: 'VIP ticket',
// 		description: 'One line description',
// 		cost: { value: 5, currency: 'TON' },
// 	}
// },

const INITIAL_EVENTS = {
	['EVT-001']: {
		id: 'EVT-001',
		name: 'TON Bootcamp Tbilisi',
		description: 'Join us and enjoy good company and new technology',
		ticket_types: [{
			id: 'TTY-001',
			name: 'Standard ticket',
			description: 'One line description',
			cost: { value: 1, currency: 'TON' },
		}, {
			id: 'TTY-002',
			name: 'VIP ticket',
			description: 'One line description',
			cost: { value: 5, currency: 'TON' },
		}],
	},
}

export const useStore = create()(
	immer((set) => ({
		events: INITIAL_EVENTS,
		event: 'EVT-001',
		cart: {
			['TTY-001']: 1,
		},
		drawer: false,
		drawerOpen: () => set((state) => {
			state.drawer = true
		}),
		drawerClose: () => set((state) => {
			state.drawer = false
		}),
		cartIncr: (id) => set((state) => {
			const qty = state.cart[id] ?? 0
			state.cart[id] = qty + 1
		}),
		cartDecr: (id) => set((state) => {
			const qty = state.cart[id] ?? 0
			if (qty === 1) {
				delete state.cart[id]
			} else {
				state.cart[id] = qty - 1
			}
		}),
	})),
)
