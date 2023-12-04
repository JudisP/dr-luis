import Imagem from "@/Components/Imagem";
import { Container } from "reactstrap";

const Blog = () => {
  return (
    <div className="pagina-blog">
      <div className="imagem-estatica">
        {/* <img src="https://drive.google.com/uc?export=view&id=18pbLTshjPpe7ImoKg6wPUedB302jXozJ" /> */}
        <Imagem
          urlImg={
            "https://drive.google.com/uc?export=view&id=18pbLTshjPpe7ImoKg6wPUedB302jXoz"
          }
          descricaoImg={"Imagem Pricipal do Slide"}
        />
      </div>

      <Container className="container-blog">
        <div className="linha"></div>
        <h1>BLOG EM CONSTRUÇÃO</h1>
      </Container>
    </div>
  );
};

export default Blog;
