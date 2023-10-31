import { Container, Row } from "reactstrap";
import { FaUserMd } from "react-icons/fa";
import { BsStarFill, BsTelephone, BsWhatsapp } from "react-icons/bs";
import SlideHistory from "@/Components/SlideHistory";

import { RxDoubleArrowRight } from "react-icons/rx";
import { LuMail } from "react-icons/lu";
import Maps from "@/Components/Maps";

const Drluis = () => {
  return (
    <div className="pagina-drluis">
      <div className="imagem-estatica">
        <img src="https://via.placeholder.com/1300x500.png" />
      </div>

      <Container className="container-drluis position-relative">
        <Row className="apresentacao-drluis">
          <Row className="background-doctor">
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

        <div className="position-relative">
          <Row className="backdrop-formacao">
            <div className="formacao-titulos-cargos">
              <h3>FORMAÇÃO, TÍTULOS E CARGOS</h3>
              <div className="informacoes">
                <div className="informacao">
                  <span className="background-arrow">
                    <RxDoubleArrowRight />
                  </span>
                  <span className="informacao-texto">
                    Formado em medicina pela Escola de Ciências Médicas de
                    Alagoas.
                  </span>
                </div>

                <div className="informacao">
                  <span className="background-arrow">
                    <RxDoubleArrowRight />
                  </span>
                  <span className="informacao-texto">
                    Título de especialista em Cirurgia Geral – Ministério da
                    Educação (MEC).
                  </span>
                </div>

                <div className="informacao">
                  <span className="background-arrow">
                    <RxDoubleArrowRight />
                  </span>
                  <span className="informacao-texto">
                    Título de especialista em Cirurgia Vascular – Ministério da
                    Educação (MEC).
                  </span>
                </div>

                <div className="informacao">
                  <span className="background-arrow">
                    <RxDoubleArrowRight />
                  </span>
                  <span className="informacao-texto">
                    Título de especialista em Cirurgia Vascular AMB – SBACV
                  </span>
                </div>

                <div className="informacao">
                  <span className="background-arrow">
                    <RxDoubleArrowRight />
                  </span>
                  <span className="informacao-texto">
                    Membro da Sociedade Brasileira de Angiologia e Cirurgia
                    Vascular.
                  </span>
                </div>

                <div className="informacao">
                  <span className="background-arrow">
                    <RxDoubleArrowRight />
                  </span>
                  <span className="informacao-texto">
                    Certificado de área de atuação Ecografia Vascular com
                    Doppler CBR- AMB – SBACV
                  </span>
                </div>

                <div className="informacao">
                  <span className="background-arrow">
                    <RxDoubleArrowRight />
                  </span>
                  <span className="informacao-texto">
                    Membro do Colégio Brasileiro de Radiologia.
                  </span>
                </div>
              </div>
            </div>
          </Row>
        </div>

        <Row className="feedbacks">
          <div className="titulo-subtitulo">
            <h3>HISTÓRIAS FELIZES</h3>
            <div className="linha"></div>
            <span>
              Confira alguns depoimentos de pacientes atendidos pelo Dr. Luís
              Fernando Bastos
            </span>
          </div>

          <Row className="container-slide">
            <SlideHistory />
          </Row>
        </Row>

        <div className="agendamento">
          <h3>AGENDE AGORA SUA CONSULTA</h3>
          <div className="contatos">
            <button className="button button--conteudo--text-white">
              <a>
                <BsWhatsapp /> Whatsapp
              </a>
            </button>
            <button className="button button--conteudo--text-white">
              <a>
                <BsTelephone /> Telefone
              </a>
            </button>
            <button className="button button--conteudo--text-white">
              <a>
                <LuMail /> E-mail
              </a>
            </button>
          </div>
        </div>
      </Container>
      <div className="container-div-loc">
        <Container className="container-localizacao position-relative">
          <Maps />
        </Container>
      </div>
    </div>
  );
};

export default Drluis;
