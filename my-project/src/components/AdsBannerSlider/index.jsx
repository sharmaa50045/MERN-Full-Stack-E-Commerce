import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import BannerBox from '../BannerBox';
import banner1 from '../../assets/banner1.webp';


const AdsBannerSlider = (props) => {
  return (
    <>
      <div className='py-5 w-full'>
        <Swiper
          slidesPerView={props.items}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          className='mySwiper'
        >
          <SwiperSlide>
            <BannerBox className={banner1} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default AdsBannerSlider;