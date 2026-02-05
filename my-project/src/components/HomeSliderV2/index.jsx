import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const HomeBanner = () => {
  return (
    <Swiper
      loop={true}
      spaceBetween={30}
      effect="fade"
      navigation={true}
      pagination={{ clickable: true }}
      modules={[EffectFade, Navigation, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="item w-full rounded-md overflow-hidden relative">
          <img
            src="https://serviceapi.spicezgold.com/download/1756273096312_1737036773579_sample-1.jpg"
            alt="Banner 1"
            className="w-full"
          />

          <div className="info absolute top-0 right-0 w-[50%] h-full z-50 p-8 flex flex-col justify-center transition-all duration-700">
            <h4 className="text-[18px] font-[500] w-full mb-3 relative -right-[100%] opacity-0 duration-1000">
              Big Saving Days Sale!
            </h4>

            <h2 className="text-[35px] font-[700] w-full mb-2">
              Buy New Trend Women <br />
              Black Cotton Blend Top
              Women Solid Round...
            </h2>

            <h3 className="flex text-[18px] items-center gap-3 font-[500] w-full mb-4">
              Starting At Only
              <span className="text-red-500 text-[30px] font-[700]">
                ₹1,500.00
              </span>
            </h3>

            <div className="w-full">
              <Button variant="outlined" color="error">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="item w-full rounded-md overflow-hidden">
          <img
            src="https://serviceapi.spicezgold.com/download/1742441193376_1737037654953_New_Project_45.jpg"
            alt="Banner 2"
            className="w-full"
          />
          <div className="info absolute top-0 right-0 w-[50%] h-full z-50 p-8 flex flex-col justify-center">
            <h4 className="text-[18px] font-[500] w-full mb-3">
              Big Saving Days Sale!
            </h4>

            <h2 className="text-[35px] font-[700] w-full mb-2">
              Apple iPhone 13 Pro 128 GB, Pink ...
            </h2>

            <h3 className="flex text-[18px] items-center gap-3 font-[500] w-full mb-4">
              Starting At Only
              <span className="text-red-500 text-[30px] font-[700]">
                ₹41000.00
              </span>
            </h3>

            <div className="w-full">
              <Button variant="outlined" color="error">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeBanner;