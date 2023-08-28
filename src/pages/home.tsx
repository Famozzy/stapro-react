import reactLogo from "@/assets/react.svg"
import { Moon, Sun } from "@/components"
import useTheme from "@/hooks/useTheme"
import { clsx } from "clsx"

const Home = () => {
  const { toggleTheme, theme } = useTheme()
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-y-5">
      <div
        className={clsx(
          "before:contents[''] relative before:absolute",
          "before:inset-0 before:bg-blue-400 before:blur-[72px] before:filter",
        )}
      >
        <a href="https://react.dev" target="_blank">
          <img className="h-32 animate-[spin_1s_ease-in-out_infinite]" src={reactLogo} alt="React logo" />
        </a>
      </div>

      <h1 className="text-2xl">React + Vite + SWC</h1>

      <button className="rounded-md border border-gray-200 p-2 dark:border-gray-600" onClick={toggleTheme}>
        {theme === "light" ? <Sun /> : <Moon />}
      </button>
    </section>
  )
}

export default Home
