import { create } from "zustand";

interface yourStore {
  yourState: any;
  yourAction: (val: any) => void;
}
export const appStore = create<yourStore>((set) => ({
  yourState: "VALUE",
  yourAction: (val) => set((state) => ({ yourState: state.yourState })),
}));
