import { useEffect } from "react"
import { useThemeStore } from "@/stores"

const useTheme = () => {
  const [theme, setTheme] = useThemeStore((store) => [store.theme, store.setTheme])

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  useEffect(() => {
    const htmlElement = document.documentElement
    htmlElement.className = theme
  }, [theme])

  return { theme, toggleTheme }
}

export default useTheme
