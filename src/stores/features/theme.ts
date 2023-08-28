import type { ThemeState } from "@types"
import type { StateCreator } from "zustand"
import { create } from "zustand"
import { persist } from "zustand/middleware"

const store: StateCreator<ThemeState> = (set) => ({
  theme: "dark",
  setTheme: (theme) => set({ theme }),
})

const useThemeStore = create(
  persist(store, {
    name: "app_theme",
    partialize: (state) => state.theme,
  }),
)

export default useThemeStore
