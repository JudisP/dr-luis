import { Col, Container, Row } from "reactstrap";

import { RxDoubleArrowRight } from "react-icons/rx";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const Procedimentos = () => {
  return (
    <div className="pagina-procedimentos">
      <div className="imagem-estatica">
        <img src="https://via.placeholder.com/1300x500.png" />
      </div>

      <Container className="container-procedimentos">
        <Col className="coluna-procedimentos">
          <Row className="procedimento">
            <Col className="coluna-img">
              <img src="https://via.placeholder.com/400x350.png" />
            </Col>
            <Col className="conteudo-coluna">
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
                  O tratamento ocorre por meio de uma energia eletromagnética,
                  produzindo um feixe de luz com muita precisão e alta
                  intensidade. A tecnologia aliada ao procedimento realizado por
                  um profissional especializado, fornece ótimos resultados de
                  forma menos invasiva.
                </p>
                <Row className="conteudo-sub-titulo">
                  <AiOutlineCheck />
                  <h4>PRÁTICO, RÁPIDO E COM PRECISÃO</h4>
                </Row>
                <p>
                  Além do tratamento ter um ótimo benefício em relação aos
                  custos quando comparado com procedimentos cirúrgicos, é rápido
                  e mais seguro, praticamente não necessita de repouso ou
                  afastamento, o paciente pode voltar para sua rotina diária
                  logo após sair da sessão.
                </p>
              </Row>
              <button className="button button--primary">
                <a>
                  Agendar uma consulta <AiOutlineArrowRight />
                </a>
              </button>
            </Col>
          </Row>

          <Row className="procedimento">
            <Col className="coluna-img">
              <img src="https://via.placeholder.com/400x350.png" />
            </Col>
            <Col className="conteudo-coluna">
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
                  Vários fatores podem acelerar a evolução de doenças vasculares
                  como: histórico na família, tabagismo, diabetes, hipertensão,
                  obesidade, varizes, uso de anticoncepcional, colesterol alto,
                  estresse e falta de exercícios físicos.
                </p>
                <Row className="conteudo-sub-titulo">
                  <AiOutlineCheck />
                  <h4>COMO PREVENIR DOENÇAS VASCULARES?</h4>
                </Row>
                <p>
                  Fazer um check-up vascular é a melhor maneira de compreender
                  os problemas de dores nas pernas ou pós-Covid. Não ignore seus
                  sintomas! Procure um cirurgião vascular para avaliação e saber
                  mais sobre os fatores de risco e opções de tratamento.
                </p>
              </Row>
              <button className="button button--primary">
                <a>
                  Agendar uma consulta <AiOutlineArrowRight />
                </a>
              </button>
            </Col>
          </Row>

          <Row className="procedimento">
            <Col className="coluna-img">
              <img src="https://via.placeholder.com/400x350.png" />
            </Col>
            <Col className="conteudo-coluna">
              <Row className="conteudo-titulo">
                <RxDoubleArrowRight />
                <h3>Checkup Vascular</h3>
              </Row>
              <Row className="conteudo-texto">
                <Row className="conteudo-sub-titulo">
                  <AiOutlineCheck />
                  <h4>PÓS COVID</h4>
                </Row>
                <p className="pb-3">
                  Fazer um check-up vascular é a melhor maneira de compreender
                  como está o seu sistema circulatório, incluindo a
                  identificação de problemas pós-Covid. Não ignore seus
                  sintomas! Marque sua consulta e faça uma avaliação, entenda
                  quais são os fatores de risco e opções de tratamento.
                </p>
                <Row className="conteudo-sub-titulo">
                  <AiOutlineCheck />
                  <h4>DOENÇAS CRÔNICAS</h4>
                </Row>
                <p>
                  Quando as pernas começam a doer, algumas pessoas não se dão
                  conta da possível gravidade que pode estar por vir. Mas,
                  cuidado! A dor nas pernas pode ser um sinal de doença vascular
                  periférica como: trombose venosa profunda, trombose arterial
                  aguda, embolia pulmonar, entre diversos outros.
                </p>
              </Row>
              <button className="button button--primary">
                <a>
                  Agendar uma consulta <AiOutlineArrowRight />
                </a>
              </button>
            </Col>
          </Row>

          <Row className="procedimento">
            <Col className="coluna-img">
              <img src="https://via.placeholder.com/400x350.png" />
            </Col>
            <Col className="conteudo-coluna">
              <Row className="conteudo-titulo">
                <RxDoubleArrowRight />
                <h3>Checkup Vascular</h3>
              </Row>
              <Row className="conteudo-texto conteudo-ultimo">
                <p className="pb-3">
                  A Cirurgia Vascular é a especialidade médica voltada para o
                  tratamento cirúrgico de doenças das artérias, veias e vasos
                  linfáticos. Atua junto à Angiologia, especialidade responsável
                  pelo estudo clínico dessas doenças. Os procedimentos médicos
                  podem ser venosos ou arteriais.
                </p>
              </Row>
              <button className="button button--primary">
                <a>
                  Agendar uma consulta <AiOutlineArrowRight />
                </a>
              </button>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default Procedimentos;
