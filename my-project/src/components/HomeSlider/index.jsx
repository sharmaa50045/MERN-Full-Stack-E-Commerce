import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeSlider = () => {
  return (
    <div className="homeSlider py-4 bg-gray-100">

      <div className="container mx-auto px-3">
        <Swiper
          className="mySwiper"
          modules={[Navigation, Autoplay, Pagination]}
          slidesPerView={1}
          navigation
          loop={true}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg"
                alt="slider"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg"
                alt="slider"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg"
                alt="slider"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg"
                alt="slider"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg"
                alt="slider"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://api.spicezgold.com/download/file_1734525014348_NewProject(7).jpg"
                alt="slider"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
