import { Container, Row } from "reactstrap";
import { FaUserMd } from "react-icons/fa";
import { BsStarFill, BsTelephone, BsWhatsapp } from "react-icons/bs";

import { RxDoubleArrowRight } from "react-icons/rx";
import SlideHistory from "@/Components/SlideHistory";
import { LuMail } from "react-icons/lu";

const Drluis = () => {
  return (
    <div className="pagina-drluis">
      <div className="imagem-estatica">
        <img src="https://via.placeholder.com/1300x500.png" />
      </div>

      <Container className="container-drluis">
        <Row className="apresentacao-drluis">
          <Row>
            <FaUserMd />
          </Row>
          <Row className="estrelas-drluis">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </Row>
          <Row className="nome-drluis">
            <h3>Dr. Luis Fernando de Carvalho Bastos</h3>
          </Row>
          <Row className="crm-drluis">
            <span>Cirurgião Vascular - CRM/DF 11.886</span>
          </Row>
        </Row>

        <Row>
          <div>
            <h3>FORMAÇÃO, TÍTULOS E CARGOS</h3>
            <div className="informacoes">
              <div className="informacao">
                <span>
                  <RxDoubleArrowRight />
                </span>
                <span>
                  Formado em medicina pela Escola de Ciências Médicas de
                  Alagoas.
                </span>
              </div>
            </div>
          </div>
        </Row>

        <Row>
          <div className="titulo-subtitulo">
            <h3>HISTÓRIAS FELIZES</h3>
            <span>
              Confira alguns depoimentos de pacientes atendidos pelo Dr. Luís
              Fernando Bastos
            </span>
          </div>

          <Row>
            <SlideHistory />
          </Row>

          <div className="agendamento">
            <h3>AGENDE AGORA SUA CONSULTA</h3>
            <div className="contatos">
              <button className="button button--primary">
                <a>
                  <BsWhatsapp /> Whatsapp 
                </a>
              </button>
              <button className="button button--primary">
                <a>
                  <BsTelephone /> Telefone 
                </a>
              </button>
              <button className="button button--primary">
                <a>
                  <LuMail /> E-mail
                </a>
              </button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Drluis;
