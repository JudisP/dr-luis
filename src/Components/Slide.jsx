import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
//import { scrollTop } from "@/utils/helpers";
import { Button } from "reactstrap";
import  { useCallback } from "react";

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
          <img src="https://drive.google.com/uc?export=view&id=1ktSWiqrbz96rqW8bs0QtExlwMolAL7oS" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://drive.google.com/uc?export=view&id=1pUz-lNQ7we4tRquBRM_lV0T3IPQyrhwb" />
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
          <img src="https://drive.google.com/uc?export=view&id=" />
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
          <img src="https://via.placeholder.com/1300x580.png" />
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
