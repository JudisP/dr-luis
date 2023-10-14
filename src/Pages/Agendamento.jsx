import { Col, Container, Row } from "reactstrap";

import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsAsterisk } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

import { BsWhatsapp } from 'react-icons/bs';
import { BsTelephone } from 'react-icons/bs';
import { LuMail } from 'react-icons/lu';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { TfiLocationPin } from 'react-icons/tfi';
import { MdOutlineAttachMoney } from 'react-icons/md';



const Agendamento = () => {
  return (
    <div className="pagina-agendamento">
      <div className="imagem-estatica">
        <img src="https://via.placeholder.com/1300x500.png" />
      </div>

      <Container className="container-agendamento">
        <Row className="row-agendamento">
          <Col className="atendimento">
            <h1>Atendimento Cascular</h1>

            <p>
              Você não precisa mais esperar para cuidar da saúde das suas
              pernas, agende agora sua consulta e conheça como funciona os
              tratamentos para varizes e tire todas as suas dúvidas. O
              atendimento é individual, sigiloso, on-line ou presencial.
            </p>

            <button className="button button--primary">
              <a>Agendar uma consulta < AiOutlineArrowRight/></a>
            </button>

            <Col>
              <a href=""><BsFacebook /></a>
              <a href=""><BsInstagram /></a>
              <a href=""><BsAsterisk /></a>
            </Col>

            <Row className="afirmacoes">
              <span className="row-check"><AiOutlineCheck /> Clínica de Varizes DF</span>
              <span className="row-check"><AiOutlineCheck /> Clínica de Varizes DF</span>
              <span className="row-check"><AiOutlineCheck /> Clínica de Varizes DF</span>
            </Row>
          </Col>
          <Col className="agendamento">
            <h1>Agendamento e Informações</h1>
            <Row className="informacoes">
              <div className="informacao">
                <BsWhatsapp /><span>(61)99999-9999</span>
              </div>
              <div className="informacao">
                <BsTelephone /><span>(61)99999-9999</span>
              </div>
              <div className="informacao">
                <LuMail /><span>luisfernando@vascularclinica.com.br</span>
              </div>
              <div className="informacao">
                <AiOutlineClockCircle /><span>Segunda a Sexta - 08:00 às 18:00</span>
              </div>
              <div className="informacao">
                <TfiLocationPin /><span>710/910 Sul, Ed. Via Brasil - Sala 222 Asa Sul, Brasília/DF</span>
              </div>
              <div className="informacao">
                <MdOutlineAttachMoney /><span>Atendimento Particular ou Convênio</span>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Agendamento;
