import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import { BsStarFill } from "react-icons/bs";
import { Row } from "reactstrap";

const SlideHistory = () => {
  return (
    <Swiper
      slidesPerView={34}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Row className="estrelas">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </Row>
        {/* <span>
          Já era muito satisfeita com a Vascular Clínica, sou atendida pelo Dr.
          Luis Fernando há bastante tempo. E hoje fiquei mais satisfeita ainda
          com as novas instalações e equipamentos novos.
        </span>
        <span className="paciente">HULDA MARIA</span> */}
      </SwiperSlide>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default SlideHistory;
