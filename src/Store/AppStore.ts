import { create } from "zustand";

interface yourStore {
  search: string;
  setSearch: (search: string) => void;
}
export const appStore = create<yourStore>((set) => ({
  search: "",
  setSearch: (search) => set({ search }),
}));
