import "./style/tailwind.css"
import App from "./App.tsx"
import { BrowserRouter } from "react-router-dom"
import { createRoot } from "react-dom/client"

const element = document.getElementById("root") as HTMLElement
const root = createRoot(element)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
