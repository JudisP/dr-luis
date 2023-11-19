import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { scrollTop } from "@/utils/helpers";
import { Button } from "reactstrap";

const Slide = () => {
  return (
    <div className="hero-slide">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="slide"
      >
        <SwiperSlide>
          <img src="https://via.placeholder.com/1300x580.png" />
          {/* <div className="slide-conteudo">
            <h1 className="slide-text">Estética</h1>
            <Link to="/procedimentos" onClick={() => scrollTop(0, 600)}>
              <Button className="button-slide button--primary">
                Saiba Mais
              </Button>
            </Link>
          </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/1300x580.png" />
          <div className="slide-conteudo">
            <h1 className="slide-text">ESTÉTICA</h1>
            <Link to="/procedimentos" onClick={() => scrollTop(0, 600)}>
              <Button className="button-slide button--primary">
                Saiba Mais
              </Button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/1300x580.png" />
          <div className="slide-conteudo">
            <h1 className="slide-text">EXAMES</h1>
            <Link to="/procedimentos" onClick={() => scrollTop(0, 1100)}>
              <Button className="button-slide button--primary">
                Saiba Mais
              </Button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/1300x580.png" />
          <div className="slide-conteudo">
            <h1 className="slide-text">CHECK-UP</h1>
            <Link to="/procedimentos" onClick={() => scrollTop(0, 1650)}>
              <Button className="button-slide button--primary">
                Saiba Mais
              </Button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide;
