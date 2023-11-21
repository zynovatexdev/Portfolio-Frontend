import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const TeamSwiper = ({ slides, options,normalView }) => {
  return (
    <Swiper
      speed={1000}
      slidesPerView={1}
      spaceBetween={100}
      autoplay={{
        delay: 4000,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: normalView,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination, Autoplay]}
      {...options}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamSwiper;
