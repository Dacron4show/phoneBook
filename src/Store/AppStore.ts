import { create } from 'zustand';

export interface Contact {
  id: string; 
  name: string;
  email: string;
  tel: string;
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
  contacts: Array<Contact>;
  setContact: (contacts: Array<Contact>) => void;
  addContact: (name: string, email: string, tel: string) => void;
  updateContact: (id: string, name: string, email: string, tel: string) => void;
  
  // Dialog control
  isDialogOpen: boolean;
  setIsDialogOpen: (isDialogOpen: boolean) => void;
  editingContactId: string | null;
  setEditingContactId: (id: string | null) => void;
  resetForm: () => void;
}

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
      id: '1', // Add ID to initial contact
      name: 'Joe Smith',
      email: 'joe@example.com',
      tel: '08012345678',
    },
  ],
  setContact: (contacts) => set({ contacts }),
  addContact(name: string, email: string, tel: string) {
    const state = get();
    set({
      contacts: [...state.contacts, { 
        id: crypto.randomUUID(), // Generate unique ID
        name, 
        email, 
        tel 
      }],
    });
  },
  updateContact(id: string, name: string, email: string, tel: string) {
    const state = get();
    set({
      contacts: state.contacts.map(contact =>
        contact.id === id ? { ...contact, name, email, tel } : contact
      ),
    });
  },
  
  // Dialog control
  isDialogOpen: false,
  setIsDialogOpen: (isDialogOpen) => set({ isDialogOpen }),
  editingContactId: null,
  setEditingContactId: (id) => set({ editingContactId: id }),
  resetForm: () => set({ name: '', email: '', tel: '', editingContactId: null }),
}));
