import React, { useContext } from "react";
import { Col, Container, Row } from "reactstrap";

import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsAsterisk } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

import { BsWhatsapp } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { LuMail } from "react-icons/lu";
import { AiOutlineClockCircle } from "react-icons/ai";
import { TfiLocationPin } from "react-icons/tfi";
import { MdOutlineAttachMoney } from "react-icons/md";
import {
  abreEmail,
  abreGoogleMaps,
  abreNumeroTelefone,
  abreWhatsapp,
} from "@/utils/helpers";
import MapsImg from "@/Components/MapsImg";
import ImagemLoad from "@/Components/ImagemLoad";

import { LoadedCodeContext } from "@/context/LoadedCodeContext";

const Agendamento = () => {
  const { imagesLoaded } = useContext(LoadedCodeContext);
  return (
    <div className="pagina-agendamento">
      <div className="imagem-estatica">
        <ImagemLoad

          urlImg={
            "https://firebasestorage.googleapis.com/v0/b/site-drluis.appspot.com/o/ImagensEstaticasSite%2FPagina-Agendamento%2FSlide%2FImagem.png?alt=media&token=484ad820-c871-46d0-9a9b-4f9a1501e72e"
          }
        />
      </div>

      {imagesLoaded ? (
        <>
          <Container className="container-agendamento">
            <Row className="row-agendamento">
              <Col className="atendimento">
                <h2>Atendimento Vascular</h2>

                <p>
                  Você não precisa mais esperar para cuidar da saúde das suas
                  pernas, agende agora sua consulta e conheça como funciona os
                  tratamentos para varizes e tire todas as suas dúvidas. O
                  atendimento é individual, sigiloso, on-line ou presencial.
                </p>

                <button
                  className="button button--primary"
                  onClick={abreWhatsapp}
                  style={{ display: "none" }}
                >
                  Agendar uma consulta <AiOutlineArrowRight />
                </button>

                <Col className="redes">
                  <a href="">
                    <BsFacebook />
                  </a>
                  <a href="">
                    <BsInstagram />
                  </a>
                  <a href="">
                    <BsAsterisk />
                  </a>
                </Col>

                <Row className="afirmacoes">
                  <span className="row-check">
                    <AiOutlineCheck /> Clínica de Varizes DF
                  </span>
                  <span className="row-check">
                    <AiOutlineCheck /> Angiologista DF
                  </span>
                  <span className="row-check">
                    <AiOutlineCheck /> Médico de Varizes
                  </span>
                </Row>
              </Col>

              <Col className="agendamento">
                <h2>Agendamento e Informações</h2>
                <Row className="informacoes">
                  <div
                    className="informacao cursor"
                    onClick={abreNumeroTelefone}
                  >
                    <BsTelephone />
                    <span>(61) 2099-2889</span>
                  </div>
                  <div className="informacao cursor" onClick={abreWhatsapp}>
                    <BsWhatsapp />
                    <span>(61) 99935-5005</span>
                  </div>
                  <div className="informacao cursor" onClick={abreEmail}>
                    <LuMail />
                    <span>drluis.site@gmail.com</span>
                  </div>
                  <div className="informacao">
                    <AiOutlineClockCircle />
                    <span>Segunda a Sexta - 08:00 às 18:00</span>
                  </div>
                  <div
                    className="informacao endereco cursor"
                    onClick={abreGoogleMaps}
                  >
                    <TfiLocationPin />
                    <a>
                      710/910 Sul, Ed. Via Brasil - Sala 222 Asa Sul,
                      Brasília/DF
                    </a>
                  </div>
                  <div className="informacao">
                    <MdOutlineAttachMoney />
                    <span>Atendimento Particular ou Convênio</span>
                  </div>
                </Row>
              </Col>
            </Row>
          </Container>

          <div className="container-div-loc">
            <Container className="container-localizacao position-relative">
              <MapsImg />
            </Container>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Agendamento;
