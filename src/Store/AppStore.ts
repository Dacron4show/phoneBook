import { create } from 'zustand';

interface Contact {
	name: string;
	email: string;
	tel: string;
}

interface AppStore {
	search: string;
	setSearch: (search: string) => void;
	isDarkMode: boolean;
	setIsDarkMode: (isDarkMode: boolean) => void;
	addContact: (name: string, email: string, tel: string) => void;
	contacts: Contact[];
	setContact: (contact: []) => void;
}
export const appStore = create<AppStore>((set, get) => ({
	search: '',
	setSearch: (search) => set({ search }),
	isDarkMode: true,
	setIsDarkMode: (isDarkMode) => set({ isDarkMode }),
	contacts: [
		{
			name: 'Joe Smith',
			email: 'joe@example.com',
			tel: '08012345678',
		},
	],
	setContact: (contacts) => set({ contacts }),

	addContact(name: string, email: string, tel: string) {
		const state = get();
		set({
			contacts: [...state.contacts, { name, email, tel }],
		});
	},
}));
