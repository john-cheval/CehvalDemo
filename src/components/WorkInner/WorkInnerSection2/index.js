/** @format */
"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { disableImageOptimization } from "@/util/constants";
function WorkInnerSection2({ data, ID, link }) {
  const router = useRouter();
  return (
    <div className="relative w-screen h-fit md:pb-14  bg-[#F6F6F4] overflow-x-hidden">
      <div className="w-full flex items-center h-fit flex-col">
        <div className="flex items-end justify-between w-full  wrapper-padding ">
          <div className="">
            <div className="flex font-sora text-sm my-3 items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D81100]"></div>
              <span>More good stuff</span>
            </div>
            <h3 className="font-sora font-semibold leading-none text-[#101763] text-3xl  md:text-[50px]">
              What next?
            </h3>
          </div>
          <Link href={link}>
            <p className="font-satoshi text-xs sm:text-sm md:text-base mb-1 underline underline-offset-8 text-black ">
              View All Works
            </p>
          </Link>
        </div>
        <div className="w-full h-fit mt-8 relative pl-5 sm:pl-10 md:pl-12 wrapper-padding swiper-top ">
          <Swiper
            slidesPerView="auto"
            centeredSlides={false}
            spaceBetween={12}
            loop={true}
            grabCursor={true}
            className="w-full h-fit"
          >
            <style jsx global>{`
              .swiper-slide-fit {
                width: fit-content;
              }
            `}</style>
            {data &&
              Object.keys(data)
                ?.filter((item) => data[item]?.post_name !== ID)
                ?.map((key, index) => (
                  <SwiperSlide
                    key={data[key]?.ID}
                    onClick={() =>
                      router.push(`${link}/${data[key]?.post_name}`)
                    }
                    className=" swiper-slide-fit group"
                  >
                    <div className="flex flex-col relative w-[75vw] sm:w-[55vw] md:w-[55vw] lg:w-[35vw] ">
                      <div className="h-[55vw] sm:h-[40vw] md:h-[40vw] lg:h-[25vw] w-full object-cover relative  object-center">
                        <Image
                          src={
                            data[key]?.list_page_image?.url ||
                            data[key]?.home_image
                          }
                          fill={true}
                          // overrideSrc="/Work/work1.png"
                          className="rounded-[2rem] object-cover"
                          alt={data[key]?.post_title || "Work"}
                          unoptimized={disableImageOptimization}
                        />
                      </div>
                      <div className="flex mt-4 md:mt-6 mb-1 md:mb-2.5 font-sora pl-2 text-lg md:text-2xl lg:text-[25px] text-[#101763] w-full items-center space-x-2">
                        <div className="w-1.5 h-1.5  bg-[#D81100]"></div>
                        <span>{data[key].post_title}</span>
                      </div>
                      <div className="font-satoshi pl-3 font-normal text-base  line-clamp-2 group-hover:text-[#101763] duration-500 transition-colors md:text-lg  lg:text-xl text-[#808080]">
                        {data[key].home_description}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default WorkInnerSection2;
