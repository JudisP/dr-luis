import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
//import { scrollTop } from "@/utils/helpers";
import { Button } from "reactstrap";
import  { useCallback } from "react";
import ImagemLoad from "./ImagemLoad";

const Slide = () => {
  const navigate = useNavigate();

  const redirecionaPagina = useCallback(() => {
    navigate('/procedimentos#checkup');
  }, [navigate]);

  return (
    <div className="hero-slide">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="slide"
      >
        <SwiperSlide>
          <ImagemLoad urlImg="https://drive.google.com/uc?export=view&id=1N0xkSbV4KUTj1kTzqF9Cn-EnODle-xSF" />
          {/* <img src="https://drive.google.com/uc?export=view&id=1N0xkSbV4KUTj1kTzqF9Cn-EnODle-xSF"/> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://drive.google.com/uc?export=view&id=1uaYaOXDG30lb18Lv-YE-U6AjoQ77qtWX" />
          <div className="slide-conteudo">
            <h1 className="slide-text">ESTÉTICA</h1>
            <Link to="/procedimentos#estetica">
              <Button className="button-slide button--primary">
                Saiba Mais
              </Button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://drive.google.com/uc?export=view&id=1PNN_JJ41bj8dIK07NAy6NSMKT5uQXLhv" />
          <div className="slide-conteudo">
            <h1 className="slide-text">EXAMES</h1>
            <Link to="/procedimentos#exames" >
              <Button className="button-slide button--primary">
                Saiba Mais
              </Button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://drive.google.com/uc?export=view&id=1QRkRVozwLDIHuoWJ9aJhQjJjoj6MquwS" />
          <div className="slide-conteudo">
            <h1 className="slide-text">CHECK-UP</h1>
            <a onClick={redirecionaPagina} >
              <Button className="button-slide button--primary">
                Saiba Mais
              </Button>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide;
