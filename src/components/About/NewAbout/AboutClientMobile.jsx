/** @format */
"use client";
import Image from "next/image";
import React, { useRef } from "react";
import arrowBackward from "../../../../public/arrow_backward_ios.svg";
import arrowForward from "../../../../public/arrow_forward_ios.svg";
import ChildrenReveal from "@/util/ChildrenReveal";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { disableImageOptimization } from "@/util/constants";
function AboutClientMobile({ data }) {
  const duplicatedData = [...data, ...data];
  const swiperRef = useRef();
  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
        defaults: {
          ease: "none",
        },
      })
      .fromTo(
        "#clientAnimation",
        {
          x: 0,
        },

        {
          duration: 1.5 * data.length,
          x: `${
            window.matchMedia("(max-width: 640px)").matches
              ? -1 * (10 * data.length)
              : -1 * (16 * data.length)
          }rem`,
        }
      );
  }, []);
  return (
    <div className="relative w-screen h-fit bg-white overflow-x-hidden md:pb-14">
      <div className="relative max-w-screen mx-auto w-full">
        <div className="w-full flex items-center   h-fit flex-col ">
          <div className="flex items-center justify-center sm:justify-between w-full wrapper-padding ">
            <ChildrenReveal
              x={0}
              y={20}
              styling="hidden items-center space-x-10"
            >
              <button onClick={() => swiperRef.current?.slidePrev()}>
                <Image
                  src={arrowBackward}
                  width={24}
                  height={18}
                  className="w-6 object-contain"
                  alt="arrowBackward"
                />
              </button>
              <button onClick={() => swiperRef.current?.slideNext()}>
                <Image
                  src={arrowForward}
                  width={24}
                  height={18}
                  className="w-6 object-contain"
                  alt="arrow Forward"
                />
              </button>
            </ChildrenReveal>
          </div>
          <ChildrenReveal x={20} y={0} styling="relative  w-full">
            <div className="overflow-hidden md:pt-12 w-full">
              <div id="clientAnimation" className="flex ml-[-1rem] mr-[-1rem]">
                {duplicatedData?.map((item, index) => (
                  <div
                    key={index}
                    className="w-[8rem] sm:w-[12rem] ml-[1rem] sm:ml-[2rem] mr-[1rem] sm:mr-[1.5rem] flex-none h-28 max-w-full relative  self-center object-center object-contain"
                  >
                    <Image
                      src={item.image}
                      fill={true}
                      alt="image"
                      className="object-contain"
                      // unoptimized={disableImageOptimization}
                    />
                  </div>
                ))}
              </div>
            </div>
          </ChildrenReveal>
        </div>
      </div>
    </div>
  );
}

export default AboutClientMobile;
