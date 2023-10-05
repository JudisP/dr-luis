import { BrowserRouter} from "react-router-dom"
import Router from "./Router"
import Topbar from "@/Layout/Topbar/Topbar"

function App() {

  return (
    <BrowserRouter>
      <Topbar />

      <Router />
    </BrowserRouter>
  )
}

export default App
