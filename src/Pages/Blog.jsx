import ImagemLoad from "@/Components/ImagemLoad";
import Loading from "@/Components/Loading";
import { LoadedCodeContext } from "@/context/LoadedCodeContext";
import React, { useContext } from "react";
import { Container } from "reactstrap";

const Blog = () => {
  const { imagesLoaded } = useContext(LoadedCodeContext);

  return (
    <div className="pagina-blog">
      <div className="imagem-estatica">
        {/* <img src="https://drive.google.com/uc?export=view&id=18pbLTshjPpe7ImoKg6wPUedB302jXozJ" /> */}
        <ImagemLoad

          urlImg={
            "https://drive.google.com/uc?export=view&id=18pbLTshjPpe7ImoKg6wPUedB302jXozJ"
          }
          descricaoImg={"Imagem Pricipal do Slide"}
        />
      </div>

      {imagesLoaded ? (
        <Container className="container-blog">
          <div className="linha"></div>
          <h1>BLOG EM CONSTRUÇÃO</h1>
        </Container>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Blog;
