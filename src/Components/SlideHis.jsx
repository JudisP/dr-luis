import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { BsStarFill } from "react-icons/bs";
import { Row } from "reactstrap";

const SlideHis = () => {
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
        <img src="https://via.placeholder.com/150x150.png" />
      </SwiperSlide>
      <SwiperSlide className="conteudo-slide">
        <img src="https://via.placeholder.com/150x150.png" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SlideHis;
