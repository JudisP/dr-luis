import { BrowserRouter} from "react-router-dom"
import Router from "./Router"

import 'bootstrap/dist/css/bootstrap.css';
import '@/scss/app.scss';

import Topbar from "@/Layout/Topbar/Topbar"
import { Footer } from "@/Layout/footer/Footer";

function App() {

  return (
    <BrowserRouter>
      <Topbar />
      <Router />
      <Footer />
    </BrowserRouter>
  )
}

export default App
