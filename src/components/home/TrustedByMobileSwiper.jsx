import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function TrustedByDesktopSwiper({ companies }) {
  return (
    <div className="lg:hidden lg:block w-full ">
      <Swiper
        slidesPerView={2}
        spaceBetween={24}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={700} // smooth transition
        modules={[Autoplay]}
        className="max-w-[1800px] "
      >
        {companies.map((company) => (
          <SwiperSlide key={company.id} className="flex justify-center items-center">
            <div className="w-[200px] h-[200px] flex justify-center items-center">
              <img
                src={company.img}
                alt="Empresa asociada a Sparkclub"
                className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-150"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


    </div>
  );
}
