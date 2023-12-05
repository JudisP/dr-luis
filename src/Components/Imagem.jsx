import React, { useEffect, useState } from "react";
import { preLoadImages } from "@/utils/helpers";
import PropTypes from "prop-types";
import { LoadedCodeContext } from "@/context/LoadedCodeContext";
import { IoImageOutline } from "react-icons/io5";
import { useContext } from "react";
import Loading from "./Loading";

function Imagem({ urlImg, descricaoImg }) {
  const [imagesLoad, setImagesLoad] = useState(false);
  const { toggleImagesLoaded } = useContext(LoadedCodeContext);

  console.log(urlImg);

  useEffect(() => {
    const imageUrls = [{ urlImg }];

    console.log("Antes do carregamento de imagens");
    preLoadImages(imageUrls)
      .then(() => {
        // console.log("antes", imagesLoad);
        setImagesLoad(true);
        toggleImagesLoaded(true);
        // console.log("depois", imagesLoad);
      })
      .catch((error) => {
        console.error("Erro ao carregar imagens:", error);
        toggleImagesLoaded(false);
      });
    console.log("Após o carregamento de imagens");
  }, [urlImg, imagesLoad, toggleImagesLoaded]);

  return (
    <>
      {imagesLoad ? (
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
