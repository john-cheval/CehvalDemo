"use client";
import Image from "next/image";
import React, { useRef } from "react";
import arrowBackward from "../../../../public/arrow_backward_ios.svg";
import arrowForward from "../../../../public/arrow_forward_ios.svg";
import { MaskText } from "@/util/MaskText";
import { usePathname } from "next/navigation";
import CustomMarquee from "./CustomMarquee";
import { disableImageOptimization } from "@/util/constants";

function Section10({ data }) {
  const pathname = usePathname();
  const swiperRef = useRef();
  const isProjectPage = pathname.includes("/projects");

  return (
    <div className="relative w-screen h-fit bg-white overflow-x-hidden md:pb-14 pt-8 md:pt-12">
      <div className="relative max-w-screen mx-auto w-full">
        <div
          className={`w-full flex items-center pb-6 ${isProjectPage ? " md:pt-12 pt-8" : ""}  h-fit flex-col`}
        >
          <div className="flex items-center justify-center sm:justify-between w-full wrapper-padding ">
            {/* <MaskText
              text="Clients"
              styling="font-sora text-center sm:text-left font-semibold leading-tight text-[#101763] text-3xl sm:text-4xl lg:text-5xl workContainer"
            /> */}
            <h4 className="font-sora text-center sm:text-left font-semibold leading-tight text-[#101763] text-3xl sm:text-4xl lg:text-5xl workContainer">
              Clients
            </h4>
            <div className="hidden items-center space-x-10">
              <button onClick={() => swiperRef.current?.slidePrev()}>
                <Image
                  src={arrowBackward}
                  className="w-6 object-contain"
                  alt="arrowBackward"
                  width={24}
                  height={24}
                  priority={false}
                />
              </button>
              <button onClick={() => swiperRef.current?.slideNext()}>
                <Image
                  src={arrowForward}
                  className="w-6 object-contain"
                  alt="arrow Forward"
                  width={24}
                  height={24}
                  priority={false}
                />
              </button>
            </div>
          </div>
          <div className="relative w-full">
            <div className="overflow-hidden md:pt-12 w-full">
              <CustomMarquee ref={swiperRef} speed={12} direction="right">
                {data?.map((item, index) => (
                  <div
                    key={index}
                    className="w-[10rem] sm:w-[13rem] mx-4 flex-none h-28 relative self-center object-center object-contain"
                  >
                    <Image
                      src={item.image}
                      fill
                      alt={`client-${index}`}
                      priority={false}
                      className="object-contain"
                      // unoptimized={disableImageOptimization}
                      sizes="(max-width: 640px) 10rem, 13rem"
                    />
                  </div>
                ))}
              </CustomMarquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section10;
