import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

import "bootstrap/dist/css/bootstrap.css";
import "@/scss/app.scss";

import Topbar from "@/Layout/Topbar/Topbar";
import Footer from "@/Layout/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <body>
        <Router />
      </body>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
