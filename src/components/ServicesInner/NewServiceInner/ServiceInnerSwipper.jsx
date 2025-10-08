"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { disableImageOptimization } from "@/util/constants";

const ServiceInnerSwipper = ({ slides }) => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  let swiperRef = null;

  // const handleBack = () => {
  //   router.back();
  // };

  return (
    <>
      <div className="w-full h-fit-- relative mt-[110px]">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          loop={true}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className="mySwiper w-full h-[300px]-- md:h-[611px]--"
        >
          {slides?.map((slide, index) => (
            <SwiperSlide key={index} className="w-fit">
              <Image
                width={1000}
                height={400}
                priority={true}
                sizes="100vw"
                className="block h-full w-full object-cover "
                src={slide?.image}
                alt={slide?.title || `slide-${index}`}
                unoptimized={disableImageOptimization}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <Link
          href={"/projects"}
          className="py-5 px-6 hidden rounded-2xl text-start bg-white/40 hover:bg-[#d81100] duration-300 transition-all backdrop-filter-[10px] md:flex items-center gap-6 absolute bottom-14 z-10 right-0 md:right-20 group"
        >
          <p className="text-black font-sora font-normal text-nd md:text-xl leading-[135%] tracking-[-0.2px] uppercase w-[174px] group-hover:text-white duration-300 transition-all">
            Look at our <br />
            <span className="font-bold">ready project</span>
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            className="transition-all duration-300 group-hover:fill-white group-hover:rotate-45"
          >
            <path
              d="M2.68065 45.8981L0 43.2174L39.249 3.89346H3.07V0H45.8981V42.8281H42.0046V6.64906L2.68065 45.8981Z"
              className="transition-all duration-300 group-hover:fill-white"
              fill="#1C1B1F"
            />
          </svg>
        </Link> */}

        {/* <div
          onClick={handleBack}
          className="absolute  top-3 left-5 w-12 h-12 rounded-full bg-white/[99] md:top-10 md:left-10 lg:top-16 flex items-center justify-center group  text-[#101763]  z-10 cursor-pointer"
        >
          <ArrowLeft
            size={25}
            className="group-hover:-translate-x-1 transition-transform duration-300"
          />
        </div> */}

        {/* <div className="space-y-4 hidden  absolute top-16 z-10 right-20 md:flex flex-col items-end h-[87px]">
          {slides?.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                swiperRef.slideToLoop(index);
              }}
              className={`h-[1px] ${
                activeIndex === index
                  ? "w-[30px] bg-white"
                  : "w-[15px] bg-gray-400"
              } transition-all duration-300`}
            ></button>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default ServiceInnerSwipper;
