import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { BsStarFill } from "react-icons/bs";
import { Row } from "reactstrap";

const SlideHistory = () => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      // breakpoints={{
      //   640: {
      //     slidesPerView: 2,
      //     spaceBetween: 20,
      //   },
      //   768: {
      //     slidesPerView: 2,
      //     spaceBetween: 40,
      //   },
      //   1024: {
      //     slidesPerView: 2,
      //     spaceBetween: 10,
      //   },
      // }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="slide-history"
    >
      <SwiperSlide className="conteudo-slide">
        <Row className="estrelas">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </Row>
        <span className="conteudo-texto">
          Já era muito satisfeita com a Vascular Clínica, sou atendida pelo Dr.
          Luis Fernando há bastante tempo. E hoje fiquei mais satisfeita ainda
          com as novas instalações e equipamentos novos.
        </span>
        <span className="paciente">HULDA MARIA</span>
      </SwiperSlide>
      <SwiperSlide className="conteudo-slide">
        <Row className="estrelas">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </Row>
        <span className="conteudo-texto">
          Dr. Luis Fernamdo é um excelente profissional, muito educado e
          prestativo com suas informações tentando ajudar quem o procura para um
          tratamento ou execução de exames, meus parabéns pelo trabalho que
          exerce como profissional e amigo.
        </span>
        <span className="paciente">LEANDRO DE ARAUJO</span>
      </SwiperSlide>
      <SwiperSlide className="conteudo-slide">
        <Row className="estrelas">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </Row>
        <span className="conteudo-texto">
          Excelente atendimento, muita atenção por parte do médico respondendo
          todas perguntas que fiz. Esclareceu todas as minhas dúvidas.
        </span>
        <span className="paciente">Maria Silva</span>
      </SwiperSlide>
      <SwiperSlide className="conteudo-slide">
        <Row className="estrelas">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </Row>
        <span className="conteudo-texto">
          O Dr. Luis Fernando é o melhor médico que já conheci, minha sogra foi
          super bem atendida, grata por tudo.
        </span>
        <span className="paciente">KATIA SILENE FRANCO</span>
      </SwiperSlide>
      <SwiperSlide className="conteudo-slide">
        <Row className="estrelas">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </Row>
        <span className="conteudo-texto">
          Excelente atendimento e profissionais qualificados. O Dr. Luis
          Fernando Bastos é com certeza um dos melhores angiologistas que já
          conheci. Resolveu de vez meu problema de varizes.
        </span>
        <span className="paciente">Diogo Silva</span>
      </SwiperSlide>
      <SwiperSlide className="conteudo-slide">
        <Row className="estrelas">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </Row>
        <span className="conteudo-texto">
          Tudo muito bom!!!!! Ambiente acolhedor e muito bonito. Parabéns e
          muito sucesso no novo local!!!!
        </span>
        <span className="paciente">CARLA LOBO FERREIRA</span>
      </SwiperSlide>
      <SwiperSlide className="conteudo-slide">
        <Row className="estrelas">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </Row>
        <span className="conteudo-texto">
          Dr. Luis me explicou de forma simples e prática todo procedimento que
          ele estava fazendo durante a consulta. Pessoa simples e cordial,
          extremamente profissional e educado. Certeza que sempre que eu
          precisar, consultarei com ele.
        </span>
        <span className="paciente">Samir Jbeili</span>
      </SwiperSlide>

      <SwiperSlide className="conteudo-slide">
        <Row className="estrelas">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </Row>
        <span className="conteudo-texto">
          Dr. Luis Fernando um grande cirurgião. Fiz uma cirurgia vascular e
          obtiver uma grande melhora. Agradeço demais ao Dr. Recomendo.
          Obrigada.
        </span>
        <span className="paciente">Maria Graça</span>
      </SwiperSlide>
      <SwiperSlide className="conteudo-slide">
        <Row className="estrelas">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </Row>
        <span className="conteudo-texto">
          O doutor Luís Fernando é um médico excelente!! Muito capacitado e
          atencioso!!! Grata 🙏🏻🙌🙌
        </span>
        <span className="paciente">BENITA FIGUEREIDO FERREIRA LOUREIRO</span>
      </SwiperSlide>
      <SwiperSlide className="conteudo-slide">
        <Row className="estrelas">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </Row>
        <span className="conteudo-texto">
          Excelente profissional! Muito atencioso e gentil! O atendimento na
          clínica é pontual! Fiquei muito feliz com meu atendimento!
        </span>
        <span className="paciente">Cristina</span>
      </SwiperSlide>
    </Swiper>
  );
};

export default SlideHistory;
