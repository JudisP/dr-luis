import Slide from "@/components/Slide";
import { Button, Col, Container, Row } from "reactstrap";
// import { Container } from 'reactstrap';

import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  return (
    <div className="pagina-home position-relative">
      <div className="hero-slide">
        <Slide />

        <div className="slide-conteudo">
          <h1 className="slide-text">Estética</h1>
          <Button className="button-slide button--primary">Saiba Mais</Button>
        </div>
      </div>

      <Container className="conteiner-boas-vindas">
        <Row className="row-boas-vindas">
          <Col className="apresentacao">
            <div className="titulo">
              <h3>Bem vindo a</h3>
              <h3>Clínica Vascular</h3>
            </div>
            <div className="linha"></div>
            <span>
              Atendimento seguro e inovação que proporcionam os melhores
              serviços na área de Cirurgia de varizes. O Melhor em recursos da
              tecnologia aplicada aos tratamentos de doenças das artérias, veias
              e vasos linfáticos.
            </span>
            <Row>
              <div>
                <div>
                  <h5>Dr. Luis Fernando de Carvalho Bastos</h5>
                  <span>Cirurgião Vascular - CRM/DF 11.886</span>
                </div>
              </div>
              <div>
                <div>
                  <h5>Horário de Funcionamento</h5>
                  <span>Segunda a Sexta - 8hrs às 18hrs</span>
                </div>
              </div>
            </Row>
            <button className="button button--primary">
              <a>
                Agendar uma consulta <AiOutlineArrowRight />
              </a>
            </button>
            <button className="button button--primary">
              <a>
                Agendar uma consulta <AiOutlineArrowRight />
              </a>
            </button>
          </Col>
          <Col
            className="imagens"
            style={{ display:"none", width: "100%", height: "100%", position: "relative" }}
          >
            <div style={{ width: "100%", height: 500 }}>
              <div className="imagens-sobrepostas">
                <img
                  className="img-comprida"
                  src="https://via.placeholder.com/222x378"
                />
                <img
                  className="img-quadrada"
                  src="https://via.placeholder.com/299x183"
                />
              </div>
              <div
                className="bolinhas"
                style={{
                  width: 243,
                  height: 78,
                  left: 24,
                  top: 0,
                  position: "absolute",
                }}
              >
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 43,
                    top: 137,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 92,
                    top: 137,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 141,
                    top: 137,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 190,
                    top: 137,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 238,
                    top: 137,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 287,
                    top: 137,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 336,
                    top: 137,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 0,
                    top: 137,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 43,
                    top: 171,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 92,
                    top: 171,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 141,
                    top: 171,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 6,
                    height: 7,
                    left: 190,
                    top: 171,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 238,
                    top: 171,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 287,
                    top: 171,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 336,
                    top: 171,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 0,
                    top: 171,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 43,
                    top: 103,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 92,
                    top: 103,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 141,
                    top: 103,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 6,
                    height: 7,
                    left: 190,
                    top: 103,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 238,
                    top: 103,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 287,
                    top: 103,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 336,
                    top: 103,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 0,
                    top: 103,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 8,
                    left: 43,
                    top: 68,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 8,
                    left: 92,
                    top: 68,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 8,
                    left: 141,
                    top: 68,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 6,
                    height: 8,
                    left: 190,
                    top: 68,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 8,
                    left: 238,
                    top: 68,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 8,
                    left: 287,
                    top: 68,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 8,
                    left: 336,
                    top: 68,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 8,
                    left: 0,
                    top: 68,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 43,
                    top: 34,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 92,
                    top: 34,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 141,
                    top: 34,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 6,
                    height: 7,
                    left: 190,
                    top: 34,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 238,
                    top: 34,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 287,
                    top: 34,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 336,
                    top: 34,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 0,
                    top: 34,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 43,
                    top: 0,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 92,
                    top: 0,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 141,
                    top: 0,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 6,
                    height: 7,
                    left: 190,
                    top: 0,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 238,
                    top: 0,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 287,
                    top: 0,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 336,
                    top: 0,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 7,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    background: "rgba(218, 172, 76, 0.40)",
                    borderRadius: 9999,
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
