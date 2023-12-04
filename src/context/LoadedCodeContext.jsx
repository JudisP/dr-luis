import { createContext, useState } from "react";

export const LoadedCodeContext = createContext();

function LoadedCodeContextProvider({ children }) {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const toggleImagesLoaded = (value) => {
    console.log("imagesLoaded", imagesLoaded);
    setImagesLoaded(value);
  };

  return (
    <LoadedCodeContext.Provider value={{ imagesLoaded, toggleImagesLoaded }}>
      {children}
    </LoadedCodeContext.Provider>
  );
}

export default LoadedCodeContextProvider;
