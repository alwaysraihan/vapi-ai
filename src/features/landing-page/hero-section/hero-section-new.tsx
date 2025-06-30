"use client";

import RootWrapper from "@/layouts/root-wrapper";
import { slides } from "./hero-slider-data";
import { Button } from "@/components/ui/button";
import { MicIcon } from "@/icons/icons";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function HeroSectionNew() {
  const router = useRouter();

  return (
    <section className={`relative  `}>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        loop
        autoplay={{ delay: 4000 }}
        className="mySwiper"
      >
        {slides.map((slide, i) => (
          <SwiperSlide
            className={` py-[12rem] lg:pt-[24.5rem] lg:pb-[15.4375rem] bg-no-repeat bg-cover bg-center h-full  max-h-[58.3125rem] `}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <RootWrapper>
              <div>
                <div className={` text-white max-w-[65.0625rem] `}>
                  <h1
                    className={` text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-bold !leading-[1.19] whitespace-pre-line transition-opacity duration-1000  `}
                  >
                    {slide.heading}
                  </h1>
                  <div
                    className={`h-0.5 max-w-[24.3125rem] w-full my-9 bg-white `}
                  />
                  <p
                    className={` text-2xl sm:text-3xl md:text-4xl  leading-[1.25] whitespace-pre-line transition-opacity duration-1000 `}
                  >
                    {slide.description}
                  </p>
                </div>
              </div>
            </RootWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        variant={"outline"}
        className="p-2 size-[4.5rem] rounded-full bg-transparent border-white fixed bottom-10 right-10 lg:bottom-20 lg:right-28 z-30"
      >
        <div
          onClick={() => {
            router.push("/assistant");
          }}
          className="size-14 bg-white flex justify-center items-center rounded-full cursor-pointer"
        >
          <MicIcon className="size-6" />
        </div>
      </Button>
    </section>
  );
}

export default HeroSectionNew;

//<div
//        className={` py-[12rem] lg:pt-[24.5rem] lg:pb-[15.4375rem] bg-no-repeat bg-cover bg-center  max-h-[58.3125rem] `}
//      style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
//>
// <div
//   className={` text-white max-w-[65.0625rem] `}
// >
//   <h1
//     className={` text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-bold !leading-[1.19] whitespace-pre-line transition-opacity duration-1000  `}
//   >
//     {heading}
//   </h1>
//   <div
//     className={`h-0.5 max-w-[24.3125rem] w-full my-9 bg-white `}
//   />
//   <p
//     className={` text-2xl sm:text-3xl md:text-4xl  leading-[1.25] whitespace-pre-line transition-opacity duration-1000 `}
//   >
//     {description}
//   </p>
// </div>
// </div>
