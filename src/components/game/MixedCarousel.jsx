import React from "react";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const MixedCarousel = ({ images, trailer }) => {
  return (
    <div className="carousel m-auto w-[90%]">
      <Swiper
        spaceBetween={10}
        pagination={{
          type: "fraction",
        }}
        breakpoints={{
          1250: {
            slidesPerView: 3,
          },
          750: {
            slidesPerView: 2,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} className="h-[100%] w-[100%]"></img>
          </SwiperSlide>
        ))}
        {trailer.map((movie, index) => (
          <SwiperSlide key={index}>
            <ReactPlayer url={movie} controls={true} width="100%" height="100%" className=""></ReactPlayer>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MixedCarousel;
