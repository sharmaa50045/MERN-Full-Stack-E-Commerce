import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const categories = [
  { name: 'Fashion', image: 'https://api.spicezgold.com/download/file_1734525204708_fash.png' },
  { name: 'Electronics', image: 'https://api.spicezgold.com/download/file_1734525218436_ele.png' },
  { name: 'Bags', image: 'https://api.spicezgold.com/download/file_1734525231018_bag.png' },
  { name: 'Footwear', image: 'https://api.spicezgold.com/download/file_1734525239704_foot.png' },
  { name: 'Beauty', image: 'https://api.spicezgold.com/download/file_1734525255799_beauty.png' },
  { name: 'Groceries', image: 'https://api.spicezgold.com/download/file_1734525248057_gro.png' },
  { name: 'Wellness', image: 'https://api.spicezgold.com/download/file_1734525275367_well.png' },
  { name: 'Jewellery', image: 'https://api.spicezgold.com/download/file_1734525286186_jw.png' },
];

const HomeCatSlider = () => {
  return (
    <div className='homeCatSlider py-6 md:py-8 bg-white'>
      <div className='container mx-auto px-4'>
        <h2 className='text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800'>Shop By Categories</h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 16
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 16
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 24
            },
            1280: {
              slidesPerView: 7,
              spaceBetween: 24
            }
          }}
          className='mySwiper'
        >
          {[...categories, ...categories].map((category, index) => (
            <SwiperSlide key={index}>
              <div className='group p-3 md:p-4 bg-gray-50 hover:bg-red-50 rounded-xl md:rounded-2xl text-center flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg cursor-pointer'>
                <div className='w-16 h-16 md:w-20 md:h-20 mb-2 md:mb-3 flex items-center justify-center'>
                  <img
                    src={category.image}
                    alt={category.name}
                    className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-300'
                  />
                </div>
                <h3 className='text-sm md:text-base font-medium text-gray-700 group-hover:text-red-600'>
                  {category.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;