import React, { useContext } from "react";
import { MenuContext } from "@/context/MenuContext";
import { LoadedCodeContext } from "@/context/LoadedCodeContext";
import Topbar from "@/Layout/Topbar/Topbar";
import Router from "./Router";
import Footer from "@/Layout/Footer/Footer";

function AppContent() {
  const { imagesLoaded } = useContext(LoadedCodeContext);
  

  console.log("AppContent");
  console.log(imagesLoaded);

  return (
    <>
      <Topbar />
      {imagesLoaded && (
        <>
          <Router />
          <Footer />
        </>
      )}
    </>
  );
}

export default AppContent;
