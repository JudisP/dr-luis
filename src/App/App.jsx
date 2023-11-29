import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

import "bootstrap/dist/css/bootstrap.css";
import "@/scss/app.scss";

import Topbar from "@/Layout/Topbar/Topbar";
import Footer from "@/Layout/Footer/Footer";
import MenuContextProvider from "@/context/MenuContext";

function App() {
  return (
    <MenuContextProvider>
      <BrowserRouter>
        <Topbar />
        <Router />
        <Footer />
      </BrowserRouter>
    </MenuContextProvider>
  );
}

export default App;
