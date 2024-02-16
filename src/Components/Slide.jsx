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
    navigate('/dr-luis/procedimentos#checkup');
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
          <ImagemLoad urlImg="https://firebasestorage.googleapis.com/v0/b/site-drluis.appspot.com/o/ImagensEstaticasSite%2FPagina-Home%2FSlide%2FImagem1.png?alt=media&token=f23862ed-09d0-4221-abd7-57bcf81827af" />
          {/* <img src="https://drive.google.com/uc?export=view&id=1N0xkSbV4KUTj1kTzqF9Cn-EnODle-xSF"/> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/site-drluis.appspot.com/o/ImagensEstaticasSite%2FPagina-Home%2FSlide%2FImagem2.png?alt=media&token=73a5d13c-c758-4441-bceb-1310a6e1e2ff" />
          <div className="slide-conteudo">
            <h1 className="slide-text">ESTÉTICA</h1>
            <Link to="/dr-luis/procedimentos#estetica">
              <Button className="button-slide button--primary">
                Saiba Mais
              </Button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/site-drluis.appspot.com/o/ImagensEstaticasSite%2FPagina-Home%2FSlide%2FImagem3.png?alt=media&token=088f9d59-b002-4f17-ba50-0a7b7a2743bc" />
          <div className="slide-conteudo">
            <h1 className="slide-text">EXAMES</h1>
            <Link to="/dr-luis/procedimentos#exames" >
              <Button className="button-slide button--primary">
                Saiba Mais
              </Button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/site-drluis.appspot.com/o/ImagensEstaticasSite%2FPagina-Home%2FSlide%2FImagem4.png?alt=media&token=37bf03a9-7000-4db3-8bea-2e5c64da3b10" />
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
