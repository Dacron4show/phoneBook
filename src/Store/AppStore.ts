import { create } from 'zustand';
import ShortUniqueId from 'short-unique-id';

interface Contact {
	name: string;
	email: string;
	tel: string;
	id: string;
}

interface AppStore {
  // Form fields
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  tel: string;
  setTel: (tel: string) => void;
  
  // Search and theme
  search: string;
  setSearch: (search: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
  
  // Contacts management
  contacts: Contact[];
  setContact: (contacts: Contact[]) => void;
  addContact: (name: string, email: string, tel: string) => void;

  //Dialog control
  isDialogOpen: boolean;
  setIsDialogOpen: (isDialogOpen: boolean) => void;
}

const uid = new ShortUniqueId();
export const appStore = create<AppStore>((set, get) => ({
  // Form fields
  name: '',
  setName: (name) => set({ name }),
  email: '',
  setEmail: (email) => set({ email }),
  tel: '',
  setTel: (tel) => set({ tel }),
  
  // Search and theme
  search: '',
  setSearch: (search) => set({ search }),
  isDarkMode: true,
  setIsDarkMode: (isDarkMode) => set({ isDarkMode }),
  
  // Contacts management
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
   //Dialog control
   isDialogOpen: true,
   setIsDialogOpen: (isDialogOpen) => set({isDialogOpen	}),
}));

