import React from 'react'
import HomeSlider from '../../components/HomeSlider'
import HomeCatSlider from '../../components/HomeCatSlider'
import AdsBannerSlider from '../../components/AdsBannerSlider'
import { FaShippingFast, FaClock } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen">

      <HomeSlider />
      <HomeCatSlider />

      <section className="md:py-8 lg:py-8 bg-white">
        <div className="container mx-auto">
          <div className="freeShipping w-full p-5 border border-[#fd595a] flex flex-col md:flex-row items-center justify-between rounded-lg md:rounded-xl gap-4 md:gap-6">

            <div className="flex items-center gap-3 md:gap-4 lg:gap-6 w-full md:w-auto">
              <FaShippingFast className="text-3xl md:text-4xl lg:text-[50px] text-[#fd595a]" />
              <span className="text-base md:text-lg lg:text-xl font-semibold uppercase">
                Free Shipping Worldwide
              </span>
            </div>

            <div className="text-center md:text-left w-full md:w-auto">
              <p className="font-medium text-sm md:text-base lg:text-lg">
                Free Delivery Now On Your First Order and over $200
              </p>
            </div>

            <div className="w-full md:w-auto text-center md:text-right">
              <p className="font-bold text-xl md:text-2xl lg:text-[25px] text-[#fd595a]">
                - Only $200*
              </p>
            </div>

          </div>
        </div>
      </section>


      <section>
        <AdsBannerSlider />
      </section>




    </div>
  )
}

export default Home
