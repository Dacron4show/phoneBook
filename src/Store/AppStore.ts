import { create } from "zustand";

interface Contact {
  name: string;
  email: string;
  tel: string;
}

interface AppStore {
  search: string;
  name: string;
  email: string;
  tel: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setTel: (tel: string) => void;
  setSearch: (search: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
  saveContact: () => void;
  contact: Array<Contact>;
  setContact: (contact: []) => void;
}
export const appStore = create<AppStore>((set, get) => ({
  search: "",
  name: "",
  email: "",
  tel: "",
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setTel: (tel) => set({ tel }),
  setSearch: (search) => set({ search }),
  isDarkMode: true,
  setIsDarkMode: (isDarkMode) => set({ isDarkMode }),
  contact: [
    {
      name: "Joe Smith",
      email: "joe@example.com",
      tel: "08012345678",
    },
  ],
  setContact: (contact) => set({ contact }),
  saveContact() {
    const state = get();
    set({
      contact: [
        ...state.contact,
        { name: state.name, email: state.email, tel: state.tel },
      ],
    });
  },
}));
