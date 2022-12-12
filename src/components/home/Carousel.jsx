import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

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
              <LazyLoadImage src={game.background_image} effect="blur"></LazyLoadImage>
              <div className="absolute bottom-0 z-30 flex h-[50px] w-[100%] items-center justify-center bg-gray-800 bg-opacity-50">
                <h3
                  className=" cursor-pointer capitalize text-gray-200 transition-all hover:text-gray-400"
                  id={game.id}
                  onClick={(e) => window.open(`/game/${e.target.id}`, "_blank")}
                >
                  {game.name}
                </h3>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Carousel;
