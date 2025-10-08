"use client";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { disableImageOptimization } from "@/util/constants";
import Link from "next/link";

const AdsSection4 = ({ teamList }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
      <h3 className="ads-heading ml-0 md:ml-10 lg:ml-14">Meet the team</h3>

      <div className="space-y-5 pt-3 md:pt-5">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          grabCursor={true}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="mySwiper swpi ease-in-out"
        >
          {teamList?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="bg-white border border-[#ececec] rounded-[15px] lg:rounded-[30px] overflow-hidden p-6 lg:p-12 grid grid-cols-12 gap-x-6">
                  <div className="overflow-hidden col-span-12 lg:col-span-3 mx-auto   lg:mx-0 mb-5 md:mb-0">
                    <Image
                      className="rounded-full w-[100px] h-[100px] md:w-[148px] md:h-[148px] object-cover border r"
                      src={
                        index === 0
                          ? "/Ads/new/girish.jpg"
                          : "/Ads/new/rashi.jpg"
                      }
                      alt={item?.title}
                      width={163}
                      height={163}
                      sizes="100vw"
                      unoptimized={disableImageOptimization}
                    />
                  </div>

                  <div className="col-span-12 lg:col-span-9 ">
                    <div
                      className="space-y-3 md:space-y-5 para font-sora text-sm font-normal leading-[170%]  md:text-base text-black team-des"
                      dangerouslySetInnerHTML={{ __html: item?.description }}
                    ></div>

                    <div className="mt-3 md:mt-5 flex justify-between">
                      <div>
                        <h4 className="text-[#101763] font-satoshi text-xl md:text-2xl lg:text-3xl font-medium leading-[154%] mb-1">
                          {item?.title}
                        </h4>
                        <h6 className="font-satoshi text-[#707070] text-sm md:text-xl font-medium leading-[154%] mb-2">
                          {item?.position}
                        </h6>
                      </div>

                      {item?.linkedin_link && (
                        <Link
                          href={item?.linkedin_link}
                          className="h-12 w-12 flex items-center justify-center border rounded-full mt-5 "
                        >
                          <Image
                            src={"/About/Group.png"}
                            alt="linkedin"
                            className="w-4 h-auto"
                            height={0}
                            width={0}
                            sizes="100vw"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="flex gap-3 justify-center mt-4 transition-all duration-300 ease-in-out">
          {teamList?.map((_, i) => (
            <div
              key={i}
              className={`h-[7px] rounded-full transition-all duration-500 ease-in-out ${
                activeIndex === i
                  ? "w-[50px] bg-[#d81100]"
                  : "w-[20px] bg-[#D9D9D9]"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdsSection4;
