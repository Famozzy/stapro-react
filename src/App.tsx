import { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layouts"
import useTheme from "./hooks/useTheme"

const HomePage = lazy(() => import("./pages").then((m) => ({ default: m.Home })))
const NotFoundPage = lazy(() => import("./pages").then((m) => ({ default: m.NotFound })))

function App() {
  useTheme()
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
