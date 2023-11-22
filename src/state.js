import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStateStore = create(
  persist(
    (set, get) => ({
      darkMode: true,
      toggleDarkMode: () => set({ darkMode: !get().darkMode })
    }),
    {
      name: "qk-mode", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage) // (optional) by default, 'localStorage' is used
    }
  )
);
