import React, { useRef, useEffect, useContext } from "react";
import { Col, Container, Row } from "reactstrap";

import { RxDoubleArrowRight } from "react-icons/rx";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { abreWhatsapp } from "@/utils/helpers";

import { LoadedCodeContext } from "@/context/LoadedCodeContext";
import ImagemLoad from "@/Components/ImagemLoad";

const Procedimentos = () => {
  const { imagesLoaded } = useContext(LoadedCodeContext);
  const checkupRef = useRef();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [history]);

  return (
    <div className="pagina-procedimentos">
      <div className="imagem-estatica">
        <ImagemLoad urlImg="https://firebasestorage.googleapis.com/v0/b/site-drluis.appspot.com/o/ImagensEstaticasSite%2FPagina-Procedimentos%2FSlide%2FImagem.png?alt=media&token=1cae4359-8042-45fc-9c69-cf8223c3317f" />
      </div>

      {imagesLoaded ? (
        <Container className="container-procedimentos">
          <Col className="coluna-procedimentos">
            <Row className="procedimento" id="estetica">
              <Col className="coluna-img">
                <img src="https://firebasestorage.googleapis.com/v0/b/site-drluis.appspot.com/o/ImagensEstaticasSite%2FPagina-Procedimentos%2FTipos-Procedimentos%2Fprocedimento-1.png?alt=media&token=980b5762-94bc-4ce2-b66b-2eda5e2af16a" />
              </Col>
              <Col className="conteudo-coluna">
                <div>
                  <Row className="conteudo-titulo">
                    <RxDoubleArrowRight />
                    <h3>Estética Vascular</h3>
                  </Row>
                  <Row className="conteudo-texto">
                    <Row className="conteudo-sub-titulo">
                      <AiOutlineCheck />
                      <h4>TRATAMENTO A LASER COM SEGURANÇA</h4>
                    </Row>
                    <p className="pb-3">
                      A tecnologia aliada ao procedimento realizado por um
                      profissional especializado, fornece ótimos resultados de
                      forma menos invasiva.
                    </p>
                    <Row className="conteudo-sub-titulo">
                      <AiOutlineCheck />
                      <h4>PRÁTICO, RÁPIDO E COM PRECISÃO</h4>
                    </Row>
                    <p>
                      O tratamento é rápido seguro, praticamente não necessita
                      de repouso ou afastamento, o paciente pode voltar para sua
                      rotina diária logo após sair da sessão.
                    </p>
                  </Row>
                </div>
                <button
                  className="button button--primary"
                  onClick={abreWhatsapp}
                >
                  Agendar uma consulta <AiOutlineArrowRight />
                </button>
              </Col>
            </Row>

            <Row className="procedimento" id="exames">
              <Col className="coluna-img">
                <img src="https://firebasestorage.googleapis.com/v0/b/site-drluis.appspot.com/o/ImagensEstaticasSite%2FPagina-Procedimentos%2FTipos-Procedimentos%2Fprocedimento-2.png?alt=media&token=8fd48063-12dc-4563-8a5b-ff21908f5bf6" />
              </Col>
              <Col className="conteudo-coluna">
                <div>
                  <Row className="conteudo-titulo">
                    <RxDoubleArrowRight />
                    <h3>Diagnósticos para Doenças Vasculares</h3>
                  </Row>
                  <Row className="conteudo-texto">
                    <Row className="conteudo-sub-titulo">
                      <AiOutlineCheck />
                      <h4>O QUE CAUSA DOENÇAS VASCULARES?</h4>
                    </Row>
                    <p className="pb-3">
                      Vários fatores podem acelerar a evolução de doenças
                      vasculares como: histórico na família, tabagismo,
                      diabetes, hipertensão, obesidade, varizes, uso de
                      anticoncepcional, colesterol alto, estresse e falta de
                      exercícios físicos.
                    </p>
                    <Row className="conteudo-sub-titulo">
                      <AiOutlineCheck />
                      <h4>COMO PREVENIR DOENÇAS VASCULARES?</h4>
                    </Row>
                    <p>
                      Fazer um check-up vascular é a melhor maneira de
                      compreender os problemas de dores nas pernas ou pós-Covid.
                      Não ignore seus sintomas! Procure um cirurgião vascular
                      para avaliação e saber mais sobre os fatores de risco e
                      opções de tratamento.
                    </p>
                  </Row>
                </div>
                <button
                  className="button button--primary"
                  onClick={abreWhatsapp}
                >
                  Agendar uma consulta <AiOutlineArrowRight />
                </button>
              </Col>
            </Row>

            <Row className="procedimento" ref={checkupRef} id="checkup">
              <Col className="coluna-img">
                <img src="https://firebasestorage.googleapis.com/v0/b/site-drluis.appspot.com/o/ImagensEstaticasSite%2FPagina-Procedimentos%2FTipos-Procedimentos%2Fprocedimento-3.png?alt=media&token=ac77e686-3d7a-47fc-aa3a-e35038074963" />
              </Col>
              <Col className="conteudo-coluna">
                <div>
                  <Row className="conteudo-titulo">
                    <RxDoubleArrowRight />
                    <h3>Checkup Vascular</h3>
                  </Row>
                  <Row className="conteudo-texto">
                    <p className="pb-3">
                      Fazer um check-up vascular é a melhor maneira de
                      compreender o estado do seu sistema circulatório,
                      incluindo a identificação de problemas causados por
                      doenças crônicas como diabetes e hipertensão, além de
                      sintomas pós-COVID.
                    </p>
                  </Row>
                </div>
                <button
                  className="button button--primary"
                  onClick={abreWhatsapp}
                >
                  Agendar uma consulta <AiOutlineArrowRight />
                </button>
              </Col>
            </Row>

            <Row className="procedimento">
              <Col className="coluna-img">
                <img src="https://firebasestorage.googleapis.com/v0/b/site-drluis.appspot.com/o/ImagensEstaticasSite%2FPagina-Procedimentos%2FTipos-Procedimentos%2Fprocedimento-4.png?alt=media&token=c89426ba-3dde-41d7-8370-07b01c1f3a9a" />
              </Col>
              <Col className="conteudo-coluna">
                <div>
                  <Row className="conteudo-titulo">
                    <RxDoubleArrowRight />
                    <h3>Cirurgia Vascular</h3>
                  </Row>
                  <Row className="conteudo-texto conteudo-ultimo">
                    <p className="pb-3">
                      A Cirurgia Vascular é a especialidade médica dedicada ao
                      tratamento cirúrgico de doenças das artérias, veias e
                      vasos linfáticos. Em conjunto com a Angiologia, visa
                      promover a saúde vascular ao tratar problemas associados à
                      circulação, como varizes e doença arterial obstrutiva.
                    </p>
                  </Row>
                </div>
                <button
                  className="button button--primary"
                  onClick={abreWhatsapp}
                >
                  Agendar uma consulta <AiOutlineArrowRight />
                </button>
              </Col>
            </Row>
          </Col>
        </Container>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Procedimentos;
