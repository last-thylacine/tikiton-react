import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { INITIAL_EVENTS } from './data'

export const useStore = create()(
	immer((set) => ({
		events: INITIAL_EVENTS,
		event: 'EVT-001',

		modal: false,
		modalTrue: () => set((state) => {
			state.modal = true
		}),
		modalFalse: () => set((state) => {
			state.modal = false
		}),

		drawer: false,
		drawerOpen: () => set((state) => {
			state.drawer = true
		}),
		drawerClose: () => set((state) => {
			state.drawer = false
		}),

		cart: {},
		cartIncr: (id) => set((state) => {
			const qty = state.cart[id] ?? 0
			state.cart[id] = qty + 1
		}),
		cartDecr: (id) => set((state) => {
			const qty = state.cart[id] ?? 0
			if (qty <= 1) {
				delete state.cart[id]
			} else {
				state.cart[id] = qty - 1
			}
		}),
	})),
)
