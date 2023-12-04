import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "@/scss/app.scss";
import MenuContextProvider from "@/context/MenuContext";
import LoadedCodeContextProvider from "@/context/LoadedCodeContext";
import AppContent from "./AppContent";

function App() {
  // const { imagesLoaded } = MenuContext(LoadedCodeContext);
  return (
    <MenuContextProvider>
      <LoadedCodeContextProvider>
        <BrowserRouter>
          {/* {imagesLoaded && ( */}
          <AppContent />
          {/* )} */}
        </BrowserRouter>
      </LoadedCodeContextProvider>
    </MenuContextProvider>
  );
}

export default App;
