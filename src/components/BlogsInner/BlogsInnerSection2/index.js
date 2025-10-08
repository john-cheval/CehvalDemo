/** @format */
"use client";
import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import { format } from "date-fns";
import { disableImageOptimization } from "@/util/constants";
import { Autoplay, Navigation } from "swiper/modules";
import useMediaQuery from "@/util/useMediaQuery";
import truncateHTML from "@/util/truncateText";
function BlogsInnerSection2({ data, blogID }) {
  const router = useRouter();
  const isMobileSm = useMediaQuery("(max-width: 500px)");
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 768px)");
  const isLarge = useMediaQuery("(max-width: 1024px)");
  const isXL = useMediaQuery("(max-width: 1280px)");
  const swiperRef = useRef();

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
  return (
    <div className="relative w-screen h-fit pb-20 bg-[#F6F6F4] overflow-x-hidden">
      <div className="w-full flex items-center h-fit flex-col">
        <div className="flex items-end justify-between w-full  wrapper-padding ">
          <div className="">
            <div className="flex font-sora text-sm my-2 items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D81100]"></div>
              <span>More good stuff</span>
            </div>
            <h3 className="font-sora font-semibold leading-none text-[#101763] text-3xl sm:text-4xl md:text-[50px]">
              What next?
            </h3>
          </div>
          <Link href={"/blogs"}>
            <p className="font-satoshi text-xs sm:text-sm md:text-base mb-1 underline underline-offset-8 text-black ">
              View All
            </p>
          </Link>
        </div>

        <div className="w-full h-fit mt-8    relative wrapper-padding">
          <Swiper
            slidesPerView={cardMultiplier}
            centeredSlides={false}
            spaceBetween={18}
            loop={true}
            modules={[Navigation /* Autoplay */]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            grabCursor={true}
            className="w-[90%] sm:w-full h-fit"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {data?.map((data, index) => (
              <SwiperSlide
                key={index}
                className=" swiper-slide-fit cursor-pointer "
                onClick={() => router.push(`/blogs/${data.slug}`)}
              >
                <div className="flex flex-col  sm:items-start group items-center sm:justify-start justify-center  overflow-hidden   h-fit space-y-4">
                  {data._embedded["wp:featuredmedia"] && (
                    <div className="h-72 w-full object-cover relative object-center">
                      <Image
                        src={data._embedded["wp:featuredmedia"][0]?.source_url}
                        fill={true}
                        className=" object-cover object-center rounded-lg "
                        alt={data?.type}
                        priority={false}
                        unoptimized={disableImageOptimization}
                        sizes="100vw"
                      />
                    </div>
                  )}

                  <p className="font-sora text-base sm:text-lg md:text-xl lg:text-2xl sm:text-left line-clamp-2 text-center text-[#101763] group-hover:text-[#D81100] transition-all duration-300 leading-relaxed">
                    {data.title.rendered}
                  </p>
                </div>
              </SwiperSlide>
            ))}{" "}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default BlogsInnerSection2;
