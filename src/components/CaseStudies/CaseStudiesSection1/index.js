/** @format */

"use client";
import Image from "next/image";
import React from "react";

import { useRouter } from "next/navigation";
import useMediaQuery from "@/util/useMediaQuery";
import { format, parseISO } from "date-fns";
import { disableImageOptimization } from "@/util/constants";
function CaseStudiesSection1({ data }) {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 639px)");

  return (
    <div className="relative w-screen h-fit bg-[#F6F6F4] overflow-x-hidden">
      <div className="w-full flex items-center pt-24 sm:pt-28 md:pt-36 h-fit flex-col wrapper-padding">
        <div className="flex items-end pb-1 self-start my-5 space-x-1.5">
          <div className="w-1.5 h-1.5 mb-0.5 rounded-full bg-[#101763]"></div>
          <span className="font-satoshi  text-base leading-none">
            Case Studies
          </span>
        </div>

        <div className="w-full flex  sm:py-14 py-12 md:py-16 flex-row">
          <div className=" w-full grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-y-14 md:gap-y-20 gap-x-4 md:gap-x-6 lg:gap-x-8  lg:gap-y-24">
            {data &&
              Object.keys(data)?.map((key, index) => (
                <div
                  key={index}
                  onClick={() =>
                    router.push(`/case-studies/${data[key].post_name}`)
                  }
                  className={
                    !isMobile &&
                    (index === 0
                      ? `flex w-full flex-col cursor-pointer  group`
                      : index === 1
                        ? `flex w-full flex-col mt-28 cursor-pointer  group`
                        : index % 2 !== 0
                          ? `flex w-full flex-col cursor-pointer  group`
                          : `flex flex-col w-full -mt-28 cursor-pointer  group`)
                  }
                >
                  <div className="relative overflow-x-hidden">
                    <div className="w-full  h-[350px] sm:h-[280px] relative md:h-[360px] lg:h-[480px] object-cover rounded-[2rem] object-center">
                      <Image
                        src={data[key].home_image}
                        fill={true}
                        // overrideSrc="/Work/work1.png"
                        className="rounded-[2rem] object-cover"
                        alt={data[key]?.post_title || "Case Study"}
                        // unoptimized={disableImageOptimization}
                      />
                    </div>
                    <div className="absolute group-hover:scale-y-100 -translate-y-12 group-hover:translate-y-0 scale-y-0  transition-all duration-500  -top-2 rounded-bl-2xl -right-2  px-2 space-x-1.5 h-[50px] flex items-center bg-[#F6F6F4]">
                      {" "}
                      {!isMobile &&
                        data[key]?.projects_category?.map((category, index) =>
                          index < 3 ? (
                            <button
                              key={index}
                              className="font-sora scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl"
                            >
                              {category.name}
                            </button>
                          ) : (
                            index < 4 && (
                              <button className="font-sora scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl">
                                {isMobile
                                  ? `+ ${
                                      data[key].projects_category.length - 2
                                    } more`
                                  : `+ ${
                                      data[key].projects_category.length - 2
                                    } more`}
                              </button>
                            )
                          )
                        )}
                      {isMobile &&
                        data[key]?.projects_category?.map((category, index) =>
                          index < 2 ? (
                            <button
                              key={index}
                              className="font-sora scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl"
                            >
                              {category.name}
                            </button>
                          ) : (
                            index < 3 && (
                              <button className="font-sora scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl">
                                {isMobile
                                  ? `+ ${
                                      data[key].projects_category.length - 2
                                    } more`
                                  : `+ ${
                                      data[key].projects_category.length - 2
                                    } more`}
                              </button>
                            )
                          )
                        )}
                      <svg
                        id="Layer_1"
                        class="w-10 h-10 text-black fill-[#F6F6F4] absolute -left-[45.5px] top-[7.5px]  z-30 "
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        viewBox="0 0 100 100"
                        xmlSpace="preserve"
                      >
                        <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
                      </svg>
                      <svg
                        id="Layer_1"
                        class="w-10 h-10  text-black fill-[#F6F6F4] absolute right-[7.5px] -bottom-[39.5px]  z-30"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        viewBox="0 0 100 100"
                        xmlSpace="preserve"
                      >
                        <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex mt-3 sm:mt-4 md:mt-5 lg:mt-6 mb-1 sm:mb-1.5 md:mb-2 lg:mb-2.5 font-sora pl-1 text-[10px] sm:text-[11px] md:text-xs lg:text-sm w-full items-center space-x-2">
                    <span>
                      {data[key]?.post_date &&
                        format(parseISO(data[key]?.post_date), "yyyy")}
                    </span>

                    <div className="w-1.5 h-1.5 rounded-full bg-[#D81100]"></div>
                    <span>{data[key].post_title}</span>
                  </div>
                  <div className="font-satoshi pl-1 font-medium text-base md:text-xl lg:text-2xl group-hover:text-[#D81100] duration-500 transition-colors text-[#101763]">
                    {data[key].post_title}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudiesSection1;
