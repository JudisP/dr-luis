import Slide from "@/components/Slide";
import { Button } from "reactstrap";
// import { Container } from 'reactstrap';

const Home = () => {
  return (
    <div className="pagina-home position-relative">
      <div className="hero-slide">
      <Slide />

      <div className="slide-conteudo">
      <h1 className="slide-text">Estética</h1>
        <Button className="button-slide button--conteudo--text-white">Saiba Mais</Button>
      </div>

      </div>
    </div>
  );
};

export default Home;
