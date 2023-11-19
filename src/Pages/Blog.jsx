import { Container } from "reactstrap";

const Blog = () => {
  return (
    <div className="pagina-blog">
      <div className="imagem-estatica">
        <img src="https://via.placeholder.com/1300x500.png" />
      </div>

      <Container className="container-blog">
        <div className="linha"></div>
        <h1>BLOG EM CONSTRUÇÃO</h1>
      </Container>
    </div>
  );
};

export default Blog;
