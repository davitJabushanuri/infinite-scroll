import { create } from 'zustand'

interface IHistory {
	id: number
	name: string
}

interface IUserHistory {
	history: IHistory[]
	addHistory: (history: IHistory) => void
	clearHistory: () => void
}

export const useUserHistory = create<IUserHistory>(set => ({
	history: [],
	addHistory: (history: IHistory) =>
		set(state => ({ history: [...state.history, history] })),
	clearHistory: () => set({ history: [] }),
}))
