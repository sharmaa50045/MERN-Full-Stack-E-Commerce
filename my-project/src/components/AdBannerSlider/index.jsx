import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const AdBannerSlider = () => {
  const cards = [
    {
      title: "S22 Samsung Smartphone",
      price: "$250.00",
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/7/g/-original-imahfayjzknzk9hx.jpeg?q=70",
      bg: "bg-[#eaf4f6]",
    },
    {
      title: "JBL Partybox 310 Speaker",
      price: "$490.00",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/k/p/v/-original-imahdxvsfyxzxnzp.jpeg?q=70",
      bg: "bg-[#fff3e6]",
    },
    {
      title: "BESTON 189 cm (75 inch) QLED",
      price: "$290.00",
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/television/x/n/e/-original-imahgvgzz2u53hga.jpeg?q=70",
      bg: "bg-[#fff3e6]",
    },
    {
      title: "Haier 630 L Frost Free Side by Side",
      price: "$390.00",
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/n/y/b/-original-imahgfmsd8zwbwqp.jpeg?q=70",
      bg: "bg-[#fff3e6]",
    },
    {
      title: "Noise Wireless Headphones",
      price: "$129.00",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQxSvjXCOP40Pc69pDQDnbJAK_gst5m7qLnxhM5alTC9XQqPLm4QxlPO9ZM3jo69NG64YqhLXwG-HOZwzyEVfcK60oy644wnAfWMhQcqud8SJGwGftFLhl_0QU",
      bg: "bg-[#f3f4ff]",
    },
    {
      title: "Aqua Fresh Smoke Audi 18 ltr drink pure ",
      price: "$269.00",
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/water-purifier/j/i/d/smoke-audi-18-ltr-drink-pure-india-1st-bis-is-16240-2023-cm-original-imahgvd7nrf75f3q.jpeg?q=70",
      bg: "bg-[#f3f4ff]",
    },
    {
      title: "Canon PIXMA MegaTank/Ink Efficient G2012",
      price: "$250.00",
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/printer/0/l/1/-original-imags2yrq3eeetyz.jpeg?q=70",
      bg: "bg-[#f3f4ff]",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="adBannerSlider"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              className={`${card.bg} group rounded-xl p-5 flex items-center gap-4 
              transition-all duration-300 hover:shadow-xl`}
            >
              <div className="overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-40 h-40 object-contain group-hover:scale-90 transition-transform duration-300"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {card.title}
                </h3>

                <p className="text-black font-bold text-lg mt-1 mb-1">
                  {card.price}
                </p>

                <button className="text-sm md:text-base font-medium text-gray-700 group-hover:text-red-600 transition-all">
                  SHOP NOW
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdBannerSlider;  
