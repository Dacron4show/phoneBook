import { create } from 'zustand';
import ShortUniqueId from 'short-unique-id';

interface Contact {
	name: string;
	email: string;
	tel: string;
	id: string;
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

const uid = new ShortUniqueId();
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
			id: uid.randomUUID(),
		},
	],
	setContact: (contacts) => set({ contacts }),

	addContact(name: string, email: string, tel: string) {
		const state = get();
		set({
			contacts: [...state.contacts, { name, email, tel, id: uid.randomUUID() }],
		});
	},
}));
