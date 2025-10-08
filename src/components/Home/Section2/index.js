/** @format */
"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import useMediaQuery from "@/util/useMediaQuery";

function Section2({ title, description, countdown }) {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 768px)");
  const isLarge = useMediaQuery("(max-width: 1024px)");
  const isXL = useMediaQuery("(max-width: 1280px)");
  const [cardMultiplier, setCardMultiplier] = useState(0.95);
  useEffect(() => {
    if (
      isMobile !== null &&
      isTablet !== null &&
      isLarge !== null &&
      isXL !== null
    ) {
      setCardMultiplier(
        isMobile ? 0.95 : isTablet ? 0.95 : isLarge ? 0.98 : isXL ? 0.92 : 0.95
      );
    }
  }, [isMobile, isTablet, isLarge, isXL, cardMultiplier]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    let pinnedSectionItems = document.getElementById("pinnedSectionItems");
    let pinnedSection = document.getElementById("pinnedSection");
    let mainSection = document.getElementById("mainSection2");

    let isMobile = window.matchMedia("(max-width: 640px)").matches;
    let yValue = isMobile ? 100 : 250;

    let section2Animation = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: isMobile ? pinnedSection : mainSection,
        pin: true,
        start: "top top",
        end: "+=150%",
        // markers: true,
        scrub: true,
      },
    });

    section2Animation
      .from(pinnedSectionItems, {
        y: yValue,
      })
      .to(pinnedSectionItems.children[1], {
        y: -1 * (pinnedSectionItems.children[1].clientHeight * cardMultiplier),
      })
      .to(pinnedSectionItems.children[2], {
        y:
          -1 *
          (pinnedSectionItems.children[2].clientHeight * cardMultiplier * 2),
      });
  }, []);
  return (
    <div
      id="mainSection2"
      className="relative w-screen h-fit sm:h-[100dvh]-- bg-[#f6f6f4] overflow-x-hidden- pt-12 "
    >
      <div className="relative max-w-screen mx-auto h-fit  sm:h-[100dvh]-- w-full">
        <div
          id="pinnedSection"
          className="max-w-screen  flex flex-col  h-[100dvh]-- relative overflow-hidden-  w-full"
        >
          <div className="max-w-screen px-5  sm:px-10 md:px-12  h-fit-- sm:h-[70vh]-- xl:h-[75vh] justify-center items-center mx-auto flex flex-row overflow-y-visible overflow-x-visible w-full">
            <div className="flex h-fit--  justify-between md:space-x-2   w-full flex-col md:flex-row">
              <div className="flex  flex-col h-fit  space-y-2 sm:space-y-4-- md:space-y-3-- w-full items-center  sm:max-w-fit--   justify-center sm:items-start sm:justify-start md:w-1/2  ">
                <h1
                  className="font-sora md:tracking-tighter  text-center md:text-left font-medium text-3xl  sm:text-4xl lg:text-5xl xl:text-[54px] text-[#101763] sm:mt-[50px] heading2"
                  style={{
                    lineHeight: "120%",
                    letterSpacing: "-2.4px",
                  }}
                >
                  {title}
                </h1>

                <p
                  dangerouslySetInnerHTML={{ __html: description }}
                  height={{ lineHeight: "154%" }}
                  className="font-satoshi  w-full text-[15px] md:text-base  sm:text-left text-center text-[#101763] sm:pb-[30px] "
                ></p>
              </div>
              <div
                className="flex flex-col  md:w-1/2 mt-4 md:mt-5 overflow-visible lg:mt-10 items-center sm:items-end sm:h-[360px] h-[250px]   xl:h-80 md:pl-[4%]   md:space-y-6 p-[20px]-- md:mb-20px"
                id="pinnedSectionItems"
              >
                {countdown?.map((item, index) => (
                  <div
                    key={index + 1}
                    className={`rounded-xl ${index === 0 ? "bg-white" : index === 1 ? "bg-[#D81100]" : "bg-[#101763]"}
                    flex items-center sm:items-start lg:items-center justify-center 
                    px-6  sm:px-10 lg:px-10 xl:px-12 
                    w-[100%] sm:w-[85%] md:w-[80%] lg:w-[400px] xl:w-[475px]
                    ${index === 0 ? "sm:mr-[8%] md:mr-[10%]" : index === 1 ? "sm:mr-[4%] md:mr-[5%]" : "sm:mr-0 "} ${index === 0 ? "text-[#101763]" : "text-white"}
                    py-6 sm:py-14 lg:flex-row flex-row sm:flex-col  space-x-4 sm:space-x-0 lg:space-x-6 ${index === 0 ? "mt-0" : "sm:mt-5 md:mt-0 g:space-y-0 space-y-0 sm:space-y-2"} h-[230px]-- sm:h-[260px]-- lg:h-[225px] xl:h-[200px] `}
                  >
                    <p className="text-xl sm:text-2xl md:text-[36px] lg:text-[45px] font-sora tracking-tight font-semibold ">
                      {item?.total_count}+
                    </p>
                    <div className="flex flex-col space-y-1 md:space-y-3 font-satoshi">
                      <p className=" font-semibold text-[15px] sm:text-3xl lg:text-[34px] ">
                        {item?.title}
                      </p>
                      <p className="font-normal text-xs sm:text-sm   lg:text-base para ">
                        {item?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
