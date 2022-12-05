import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

function Carousel({ games }) {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        autoplay={true}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {games.map((game) => {
          return (
            <SwiperSlide key={game.id} className="relative">
              <img src={game.background_image}></img>
              <div className="absolute bottom-0 z-30 flex h-[50px] w-[100%] items-center justify-center bg-gray-800 bg-opacity-50">
                <h3 className=" capitalize text-gray-200">{game.name}</h3>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Carousel;
