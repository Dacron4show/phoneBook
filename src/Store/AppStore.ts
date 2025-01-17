import { create } from "zustand";

interface AppStore {
  search: string;
  setSearch: (search: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode:boolean) => void;
}
export const appStore = create<AppStore>((set) => ({
  search: "",
  setSearch: (search) => set({ search }),
  isDarkMode: true,
  setIsDarkMode: (isDarkMode) => set({ isDarkMode }),

}));
