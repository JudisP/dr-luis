import React, { useEffect, useState } from "react";
import { preLoadImages } from "@/utils/helpers";
import PropTypes from "prop-types";
import { LoadedCodeContext } from "@/context/LoadedCodeContext";
import { IoImageOutline } from "react-icons/io5";
import { useContext } from "react";
import Loading from "./Loading";

function ImagemLoad({ urlImg, descricaoImg }) {
  const [imagesLoad, setImagesLoad] = useState(false);
  const { toggleImagesLoaded, toggleImagesError, imagesError, resetContext } =
    useContext(LoadedCodeContext);

  useEffect(() => {

    const loadImages = async () => {
      try {
        toggleImagesError("Carregando");
        resetContext();
        const imageUrls = [urlImg];
        await preLoadImages(imageUrls);
        toggleImagesLoaded(true);
        setImagesLoad(true);
        toggleImagesError("Carregado");
      } catch (error) {
        toggleImagesError("Erro");
        toggleImagesLoaded(true);
        setImagesLoad(true);
      }
    };

    if (!imagesLoad) {
      loadImages();
    }
  }, [
    urlImg,
    toggleImagesLoaded,
    toggleImagesError,
    setImagesLoad,
    imagesLoad,
    resetContext,
  ]);

  return (
    <>
      {imagesLoad && imagesError === "Carregado" ? (
        <img src={urlImg} alt={descricaoImg} />
      ) : imagesError === "Carregando" ? (
        <Loading />
      ) : (
        imagesError === "Erro" && (
          <div className="imagem-error">
            <IoImageOutline />
            <h1>Imagem não carregada corretamente</h1>
          </div>
        )
      )}
    </>
  );
}

ImagemLoad.propTypes = {
  urlImg: PropTypes.string.isRequired,
  descricaoImg: PropTypes.string,
};

export default ImagemLoad;
