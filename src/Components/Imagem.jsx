import React, { useEffect, useState } from "react";
import { preLoadImages } from "@/utils/helpers";
import PropTypes from "prop-types";
import { LoadedCodeContext } from "@/context/LoadedCodeContext";
import { IoImageOutline } from "react-icons/io5";
import { useContext } from "react";
import Loading from "./Loading";

function Imagem({ urlImg, descricaoImg }) {
  const [imagesLoad, setImagesLoad] = useState(false);
  const { toggleImagesLoaded, toggleImagesError, imagesError, resetContext } =
    useContext(LoadedCodeContext);


  useEffect(() => {
    // const imageUrls = [urlImg];
    // if (imagesLoad && resetNeeded) {
    //   console.log("resetNeeded",resetNeeded);
    //   console.log("Entrou no ResetNeed");
    //   resetContext();
    //   setResetNeeded(false);
    //   console.log("vai sair do ResetNeed");
    //   console.log("resetNeeded",resetNeeded);
    // }

    const loadImages = async () => {
      try {
        toggleImagesError("Carregando");
        resetContext();
        const imageUrls = [urlImg];
        await preLoadImages(imageUrls);
        toggleImagesLoaded(true);
        setImagesLoad(true);
      } catch (error) {
        toggleImagesError("Carregado");
        toggleImagesLoaded(true);
        setImagesLoad(true);
      }
    };
    
    console.log("antes !imagesLoad");
    if (!imagesLoad) {
      console.log("dentro !imagesLoad");
      loadImages();
      console.log("depois !imagesLoad");
    }
    
    // preLoadImages(imageUrls)
    // .then(() => {
    //   setImagesLoad(true);
    //   toggleImagesLoaded(true);
    //   // resetContext();
    //   })
    //   .catch(() => {
    //     toggleImagesError("Carregado");
    //     toggleImagesLoaded(true);
    //   });
  }, [
    urlImg,
    toggleImagesLoaded,
    toggleImagesError,
    setImagesLoad, 
    imagesLoad,
    resetContext
  ]);

  console.log("teste lógico", imagesError == false);

  return (
    <>
      {imagesLoad && !imagesError ? (
        <img src={urlImg} alt={descricaoImg} />
      ) : imagesError === "Carregando" ? (
        <Loading />
      ) : (
        imagesError === "Carregado" && (
          <div className="imagem-error">
            <IoImageOutline />
            <h1>Imagem não carregada corretamente</h1>
          </div>
        )
      )}
    </>
  );
}

Imagem.propTypes = {
  urlImg: PropTypes.string.isRequired,
  descricaoImg: PropTypes.string,
};

export default Imagem;
