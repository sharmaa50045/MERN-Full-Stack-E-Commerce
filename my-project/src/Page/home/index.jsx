import React from 'react';
import HomeSlider from '../../components/HomeSlider';
import HomeCatSlider from '../../components/HomeCatSlider';
import { FaShippingFast } from "react-icons/fa";
import AdBannerSlider from '../../components/AdBannerSlider';
import ProductsSlider from '../../components/ProductsSlider';
import BlogItem from '../../components/BlogItem';
import Footer from '../../components/Footer';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="min-h-screen">

      <HomeSlider />
      <HomeCatSlider />

      <section className="bg-white py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

            <div>
              <h2 className="text-[22px] font-semibold">Popular Products</h2>
              <p className="text-sm">
                Do not miss the current offers until the end of March
              </p>
            </div>

            <div className="w-full md:w-[50%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
              >
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="Footwear" />
                <Tab label="Groceries" />
                <Tab label="Beauty" />
                <Tab label="Wellness" />
                <Tab label="Jewellery" />
              </Tabs>
            </div>

          </div>

          <ProductsSlider items={5} />
        </div>
      </section>

      <section className="py-3 bg-white">
        <div className="container mx-auto">
          <div className="w-full md:w-[80%] mx-auto p-5 border border-[#fd595a] flex flex-col md:flex-row items-center justify-between rounded-xl gap-4">

            <div className="flex items-center gap-4">
              <FaShippingFast className="text-[50px] text-[#fd595a]" />
              <span className="text-xl font-semibold uppercase">
                Free Shipping Worldwide
              </span>
            </div>

            <p className="text-center md:text-left font-medium">
              Free Delivery on your first order over $200
            </p>

            <p className="font-bold text-[25px] text-[#fd595a]">
              Only $200*
            </p>

          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="container mx-auto">
          <AdBannerSlider />
        </div>
      </section>

      <section className="py-5">
        <div className="container mx-auto">
          <h2 className="text-[22px] font-semibold">Latest Products</h2>
          <ProductsSlider items={6} />
          <AdBannerSlider items={4} />
        </div>
      </section>

      <section className="py-5">
        <div className="container mx-auto">
          <h2 className="text-[22px] font-semibold">Featured Products</h2>
          <ProductsSlider items={6} />
          <AdBannerSlider items={4} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white blogSection">
        <div className="container">
          <h2 className="text-[22px] font-semibold mb-4">From The Blog</h2>

          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className='blogSlider'
          >
            <SwiperSlide><BlogItem /></SwiperSlide>
            <SwiperSlide><BlogItem /></SwiperSlide>
            <SwiperSlide><BlogItem /></SwiperSlide>
            <SwiperSlide><BlogItem /></SwiperSlide>
            <SwiperSlide><BlogItem /></SwiperSlide>
          </Swiper>
        </div>
      </section>

      <Footer />

    </div>
  );
};

export default Home;
