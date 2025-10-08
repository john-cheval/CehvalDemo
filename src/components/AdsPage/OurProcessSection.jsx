"use client";
import Image from "next/image";
import React from "react";
import rightSvg from "../../../public/Ads/right.svg";
import leftSvg from "../../../public/Ads/left.svg";
import useMediaQuery from "@/util/useMediaQuery";

const OurProcessSection = ({ section }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isMobileSm = useMediaQuery("(max-width: 500px)");
  const data = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <section className="wrapper-padding pt-10 md:pt-14 lg:pt-[70px] pb-10 md:pb-14 lg:pb-20 xl:pb-40">
      <div className="grid grid-cols-12 gap-y-8 md:gap-x-5">
        <div
          className="flex flex-col gap-y-3 md:gap-y-5 col-span-12 md:col-span-5 items-center md:items-start"
          style={{
            position: isMobile ? "static" : "sticky",
            top: "120px",
            alignSelf: "start",
          }}
        >
          <h3 className="text-main font-sora text-2xl sm:text-3xl lg:text-[40px] font-semibold leading-[135%] tracking-[-0.4px]">
            {section?.title}
          </h3>
          <span className="bg-sec w-16 h-1 block " />
          <div
            className="text-main font-sora text-xl sm:text-2xl lg:text-3xl font-semibold leading-[135%] tracking-[-0.4px] flex items-center gap-x-3 xl:gap-x-6 "
            dangerouslySetInnerHTML={{ __html: section?.description }}
          ></div>
        </div>

        <div className="col-span-12 md:col-span-7  grid grid-flow-row   grid-cols-10 gap-5 sm:gap-8 lg:gap-14 relative w-full ">
          {section?.sub_sections?.map((item, index) => (
            <div
              key={index}
              className={`bg-white h-fit  relative rounded-[32px] px-5 lg:px-7 py-7 lg:py-9 z-20  ${isMobileSm ? "col-span-10" : "col-span-5"}   ${index % 2 === 0 ? "mt-0" : isMobileSm ? "mt-0" : "mt-20"} `}
              style={{
                boxShadow: "0px 0px 76px 0px rgba(0, 0, 0, 0.07)",
              }}
            >
              <p className="text-sec font-sora text-2xl sm:text-3xl lg:text-[40px] font-semibold leading-[135%] tracking-[-0.4px] text-center mb-3 lg:mb-5 relative z-30 ">
                {(index + 1).toString().padStart(2, "0")}
              </p>

              <p className="text-main font-sora text-base md:text-lg lg:text-xl font-semibold leading-[135%] tracking-[-0.2px] text-center relative z-30">
                {item?.title}
              </p>

              <div
                dangerouslySetInnerHTML={{ __html: item?.description }}
                className="text-[#191919] text-center font-sora text-sm md:text-base font-light leading-[202%] relative z-30"
              ></div>

              <Image
                width={49}
                height={54}
                sizes="100vw"
                src="/Ads/pattern.svg"
                alt="pattern"
                className="absolute top-6 left-6 w-full h-auto max-w-7 md:max-w-14 z-10"
              />
            </div>
          ))}

          {data.map(
            (_, index) =>
              index !== data.length - 1 && (
                <Image
                  key={`arrow-${index}`}
                  src={index % 2 === 0 ? rightSvg : leftSvg}
                  alt={index % 2 === 0 ? "Right Arrow" : "Left Arrow"}
                  width={index % 2 === 0 ? 75 : 104}
                  height={30}
                  className={`
                    ${isMobileSm ? "hidden" : ""}
          absolute
          w-full h-auto
          ${index % 2 === 0 ? "max-w-[75px]" : "max-w-[120px]-  max-w-[85px] h-[35px]--"}
        `}
                  style={{
                    top: `${18 + index * 18}%`,
                    left: `${index % 2 === 0 ? "50%" : "50%"}`,
                    transform: `translate(-50%, -50%) rotate(${index % 2 === 0 ? "0deg" : "-26deg"})`,
                  }}
                />
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default OurProcessSection;
