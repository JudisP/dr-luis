import { createContext, useState } from "react";

export const LoadedCodeContext = createContext();

function LoadedCodeContextProvider({ children }) {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [imagesError, setImagesError] = useState("Carregando");

  const toggleImagesError = (value) => {
    setImagesError(value);
  };
  const toggleImagesLoaded = (value) => {
    setImagesLoaded(value);
  };

  const resetContext = () => {
    setImagesLoaded(false);
    setImagesError("Carregando");
  };

  return (
    <LoadedCodeContext.Provider
      value={{
        imagesLoaded,
        toggleImagesLoaded,
        toggleImagesError,
        imagesError,
        resetContext
      }}
    >
      {children}
    </LoadedCodeContext.Provider>
  );
}

export default LoadedCodeContextProvider;
