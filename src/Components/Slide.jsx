import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Slide = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="slide"
    >
      <SwiperSlide>
        <img src="https://via.placeholder.com/1300x580.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/1300x580.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/1300x580.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/1300x580.png" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slide;
