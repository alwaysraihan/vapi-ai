"use client";

import RootWrapper from "@/layouts/root-wrapper";
import { useEffect, useState } from "react";
import { slides } from "./hero-slider-data";

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setFade(true);
      }, 800);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`relative py-[12rem] lg:pt-[24.5rem] lg:pb-[15.4375rem] bg-no-repeat bg-cover bg-center transition-opacity duration-1000 max-h-[58.3125rem] ${
        fade ? "opacity-100" : "opacity-30"
      }`}
      style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
    >
      <RootWrapper>
        <div className=" text-white max-w-[65.0625rem] ">
          <h1
            className={` text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[5.25rem] font-bold !leading-[1.19] whitespace-pre-line transition-opacity duration-1000 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {slides[currentIndex].heading}
          </h1>
          <div className="h-0.5 max-w-[24.3125rem] w-full my-9 bg-white" />
          <p
            className={` text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.25] whitespace-pre-line transition-opacity duration-1000 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {slides[currentIndex].description}
          </p>
        </div>
      </RootWrapper>
    </section>
  );
}

export default HeroSection;
