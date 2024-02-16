import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "@/scss/app.scss";
import MenuContextProvider from "@/context/MenuContext";
import LoadedCodeContextProvider from "@/context/LoadedCodeContext";
import Topbar from "@/Layout/Topbar/Topbar";
import Router from "./Router";
import Footer from "@/Layout/footer/Footer";
import WhatsappButton from "@/Components/WhatsappButton";

function App() {
  // const { imagesLoaded } = MenuContext(LoadedCodeContext);
  return (
    <MenuContextProvider>
      <LoadedCodeContextProvider>
        <BrowserRouter>
          <Topbar />
          <Router />
          <WhatsappButton />
          <Footer />
        </BrowserRouter>
      </LoadedCodeContextProvider>
    </MenuContextProvider>
  );
}

export default App;
