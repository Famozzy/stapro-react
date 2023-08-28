declare module "@types" {
  export type Theme = "dark" | "light"
  export interface ThemeState {
    theme: Theme
    setTheme: (theme: Theme) => void
  }
}
