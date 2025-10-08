/** @format */
"use client";
import Image from "next/image";
import React, { useRef } from "react";

import arrowBackward from "../../../../public/arrow_backward_ios.svg";
import arrowForward from "../../../../public/arrow_forward_ios.svg";
// import { format } from "date-fns";
import { disableImageOptimization } from "@/util/constants";
function BlogsInnerSection1({ data }) {
  const swiperRef = useRef();
  return (
    <div className="relative w-screen h-fit pb-12 pt-36 bg-[#F6F6F4] overflow-x-hidden">
      <div className="relative flex flex-col items-center h-fit wrapper-padding w-full">
        <div className="relative flex-col space-y-14- flex h-fit items-center justify-center w-full  text-black">
          <div className="w-full relative h-[528px] h-auto-- ">
            <Image
              src={data?.banner_image || data?.image}
              // src={bannerimage}
              fill={true}
              className=" object-cover  object-center rounded-[8px] md:rounded-[12px] lg:rounded-[2rem]    w-full-- h-auto--"
              alt={data?.post_title}
              unoptimized={disableImageOptimization}
            />
            {/* <div className="flex flex-col font-satoshi absolute bottom-0 h-full w-full justify-end bg-gradient-to-b from-50% from-transparent to-[#000] rounded-[2rem] px-10 py-10 text-white">
              <span className="text-[10px] sm:text-xs md:text-sm  font-sora">
                {" "}
                {format(new Date(data?.post_date), "EEEE dd MMM")}
              </span>
            </div> */}
          </div>
          <div className="w-full pt-5 md:mt-8 lg:pt-18  md:px-10 h-fit flex flex-col space-y-5 lg:space-y-7 ">
            <h2 className="font-satoshi font-bold text-xl md:text-2xl lg:text-4xl grad-sub-txt w-fit">
              {data?.post_title}
            </h2>
            <div className="flex  w-full space-y-10- flex-col font-satoshi paragraphText-Size blog-detail-para">
              <div
                dangerouslySetInnerHTML={{ __html: data?.post_content }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center py-10 justify-between">
          <button onClick={() => swiperRef.current?.slidePrev()}>
            <Image
              width={10}
              height={10}
              sizes="100vw"
              src={arrowBackward}
              className="w-6 object-contain"
              alt="arrow_backward"
            />
          </button>
          <button onClick={() => swiperRef.current?.slideNext()}>
            <Image
              src={arrowForward}
              className="w-6 object-contain"
              alt="arrow_forward"
              width={10}
              height={10}
              sizes="100vw"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogsInnerSection1;
