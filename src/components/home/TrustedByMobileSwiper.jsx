import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function TrustedByMobileSwiper({ companies }) {
  return (
    <>
      <Swiper
        spaceBetween={1}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper mt-[20px] sm:hidden"
      >
        {companies.map((company) => (
          <SwiperSlide key={company.id}>
            <img
              className="w-[85%] h-auto mb-[30px]"
              src={company.img}
              alt={`Empresa asociada a Sparkclub`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
