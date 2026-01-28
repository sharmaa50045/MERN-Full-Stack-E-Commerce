import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import ProductItem from '../ProductItem';

const ProductsSlider = ({ items }) => {
  return (
    <div className="productsSlider relative py-5 px-4 sm:px-6 lg:px-12">

      <Swiper
        spaceBetween={15}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: items || 4,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {[...Array(10)].map((_, index) => (
          <SwiperSlide key={index}>
            <ProductItem />
          </SwiperSlide>
        ))}
      </Swiper>


      <div className="swiper-button-prev !text-black after:!text-sm"></div>
      <div className="swiper-button-next !text-black after:!text-sm"></div>
    </div>
  );
};

export default ProductsSlider;
