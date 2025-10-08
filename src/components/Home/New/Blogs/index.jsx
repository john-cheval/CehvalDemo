"use client";

import ChildrenReveal from "@/util/ChildrenReveal";
import { disableImageOptimization } from "@/util/constants";
import useMediaQuery from "@/util/useMediaQuery";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import truncateHTML from "@/util/truncateText";
import Link from "next/link";

const HomeBlogsSection = ({ title, data, isNew = false }) => {
  const swiperRef = useRef();
  const isMobileSm = useMediaQuery("(max-width: 500px)");
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 768px)");
  const isLarge = useMediaQuery("(max-width: 1024px)");
  const isXL = useMediaQuery("(max-width: 1280px)");

  const cardMultiplier = isMobileSm
    ? 1
    : isMobile
      ? 1
      : isTablet
        ? 2
        : isLarge
          ? 2.5
          : isXL
            ? 3
            : 3;

  const [windowWidth, setWindowWidth] = useState();
  useEffect(() => {
    setWindowWidth(window.innerWidth - 96);
  }, [windowWidth]);

  return (
    <section className="wrapper-padding   w-screen h-fit bg-white overflow-x-hidden relative z-[9999999999]">
      <div className="relative max-w-screen mx-auto w-full">
        <div
          className={`w-full flex items-center  h-fit flex-col ${isNew ? "px-0 py-10 sm:pt-20 pb-10 " : "wrapper-padding py-10 sm:py-20 md:py-24"}`}
        >
          <div className="flex items-center justify-center sm:justify-between w-full ">
            <ChildrenReveal
              x={0}
              y={20}
              styling="font-sora text-center sm:text-left font-semibold leading-tight text-[#101763] text-3xl sm:text-4xl lg:text-5xl heading2 "
            >
              {title}
            </ChildrenReveal>
            <ChildrenReveal
              x={0}
              y={20}
              styling="sm:flex hidden items-center space-x-10"
            >
              <button onClick={() => swiperRef.current?.slidePrev()}>
                <Image
                  src="/arrow_backward_ios.svg"
                  className="w-6 object-contain"
                  alt="arrow backward"
                  priority={false}
                  height={25}
                  width={25}
                  sizes="100vw"
                />
              </button>
              <button onClick={() => swiperRef.current?.slideNext()}>
                <Image
                  src="/arrow_forward_ios.svg"
                  className="w-6 object-contain rounded-xl overflow-hidden"
                  alt="arrow forward"
                  priority={false}
                  height={25}
                  width={25}
                  sizes="100vw"
                />
              </button>
            </ChildrenReveal>
          </div>
          {/* 
          <ChildrenReveal
            x={20}
            y={0}
            styling="w-full h-fit mt-10 sm:mt-12  md:mt-16   relative"
          > */}
          <div className="w-full h-fit mt-8 sm:mt-12  md:mt-16   relative">
            <Swiper
              slidesPerView={cardMultiplier}
              centeredSlides={false}
              spaceBetween={18}
              loop={true}
              modules={[Navigation, Autoplay]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              grabCursor={true}
              className="w-[90%] sm:w-full h-fit"
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
            >
              {data?.map((data, index) => (
                <SwiperSlide key={index} className=" swiper-slide-fit  ">
                  <div className="flex flex-col  sm:items-start group items-center sm:justify-start justify-center  overflow-hidden   h-fit space-y-4">
                    {data._embedded["wp:featuredmedia"] && (
                      <div className="h-72 w-full object-cover relative object-center">
                        <Image
                          src={
                            data._embedded["wp:featuredmedia"][0]?.source_url
                          }
                          fill={true}
                          className=" object-cover object-center rounded-lg "
                          alt={data?.type}
                          priority={false}
                          unoptimized={disableImageOptimization}
                          sizes="100vw"
                        />
                      </div>
                    )}

                    <button className="font-sora text-[10px] uppercase py-2.5 px-6 w-fit border border-[#D81100] text-[#D81100] rounded-3xl">
                      {data.type}
                    </button>
                    <p className="font-sora text-2xl sm:text-left line-clamp-2 text-center text-[#101763] group-hover:text-[#D81100] transition-all duration-300 leading-relaxed min-h-[80px]">
                      {data.title.rendered}
                    </p>
                    <div>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: truncateHTML(data.content.rendered),
                        }}
                        className="font-satoshi para paragraphText-Size transition-all duration-300 text-black group-hover:text-[#101763] line-clamp-3 sm:text-left text-center "
                      ></p>
                      <Link
                        href={`/blogs/${data?.slug}`}
                        // className="text-xs my-3 text-center md:text-left group-hover:text-[#D81100] !underline underline-offset-8 transition-all duration-300 text-black "
                        className="relative text-xs md:text-sm text-center md:text-left group-hover:text-[#D81100] transition-all duration-300 text-black mt-2 
                       border-b border-b-black group-hover:border-b-sec w-fit pb-[2px]"
                      >
                        Explore
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}{" "}
            </Swiper>

            <div className="sm:hidden flex items-center space-x-10">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute top-[20%]  -left-2"
              >
                <Image
                  src="/arrow_backward_ios.svg"
                  className="w-6 object-contain"
                  alt="arrow backward"
                  priority={false}
                  height={25}
                  width={25}
                  sizes="100vw"
                />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute top-[20%]  -right-2"
              >
                <Image
                  src="/arrow_forward_ios.svg"
                  className="w-6 object-contain rounded-xl overflow-hidden "
                  alt="arrow forward"
                  priority={false}
                  height={25}
                  width={25}
                  sizes="100vw"
                />
              </button>
            </div>
          </div>
          {/* </ChildrenReveal> */}

          {/* View All Reviews Button */}
          <Link
            href="/blogs"
            className="animated-button flex items-center font-satoshi justify-center text-base md:text-lg 25px mt-5 md:mt-[30px] lg:mt-[35px] font-medium mx-auto text-[#101763] border rounded-sm border-[#101763] w-[150px] md:w-[201px] h-12 md:h-[61px] transition-all duration-300 overflow-hidden relative"
          >
            <span className="absolute w-full h-full flex items-center justify-center">
              View All
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBlogsSection;
