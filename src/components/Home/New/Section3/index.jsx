"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import useMediaQuery from "@/util/useMediaQuery";

const HomeSectionThree = ({ title, description, countdown }) => {
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

    let pinnedSection = document.getElementById("pinnedSection");
    let pinnedCards = gsap.utils.toArray("#pinnedSectionItems > div");

    const triggerSection = document.getElementById("mainSection2");
    let isMobile = window.matchMedia("(max-width: 640px)").matches;
    let yValue = isMobile ? 100 : 250;
    ScrollTrigger.create({
      trigger: triggerSection,
      pin: true,
      start: "top top",
      //end: () => "+=" + triggerSection.offsetHeight,
      end: "+=150%",
      scrub: true,
      //   markers: true,
    });

    let cardAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: triggerSection,
        start: "top top",
        // end: () => "+=" + triggerSection.offsetHeight,
        scrub: 1.2,
        // markers: true,
        end: "+=150%",
      },
      defaults: {
        ease: "none",
        ease: "power2.out",
      },
    });

    cardAnimation
      .from(pinnedSectionItems, {
        y: yValue,
      })
      .to(pinnedCards[1], {
        // y: -1 * (pinnedCards[1].clientHeight * cardMultiplier * 1.05),
        y:
          -1 *
          (pinnedCards[1].clientHeight *
            cardMultiplier *
            (isMobile ? 0.98 : 1.05)),
      })
      .to(pinnedCards[2], {
        // y: -1 * (pinnedCards[2].clientHeight * cardMultiplier * 1.7),
        y:
          -1 *
          (pinnedCards[2].clientHeight *
            cardMultiplier *
            (isMobile ? 1.95 : 1.7)),
      });
  }, []);

  return (
    <section
      id="mainSection2"
      className="relative w-full h-fit pt-10- md:pt-12 md:pb-16"
    >
      <div id="pinnedSection" className="relative w-full">
        <div className="wrapper-padding w-full">
          <div className="flex justify-between md:space-x-2 w-full flex-col md:flex-row">
            <article className="w-full md:w-1/2">
              <h2 className=" md:!tracking-[-2.4px] text-center md:!text-left heading-1 heading2 !leading-[131%]">
                {title}
              </h2>
              <p
                dangerouslySetInnerHTML={{ __html: description }}
                style={{ lineHeight: "154%" }}
                className="font-satoshi text-[15px] md:text-base sm:text-left text-center text-[#5f5f5f]- text-black mt-5"
              ></p>
            </article>
            <div
              className="flex flex-col md:w-1/2 mt-4 md:mt-5 overflow-visible lg:mt-10 items-center sm:items-end sm:h-[360px] h-[250px] xl:h-80 md:pl-[4%] md:space-y-6 p-[20px]-- md:mb-20px"
              id="pinnedSectionItems"
            >
              {countdown?.map((item, index) => (
                <div
                  key={index + 1}
                  className={`rounded-[10px]- 
                    border-[#C9CEFF]- border-
                    w-[100%] sm:w-[85%] md:w-[80%] lg:w-[400px] xl:w-[475px]
                    ${index === 0 ? "sm:mr-[8%] md:mr-[10%] z-[30]" : index === 1 ? "sm:mr-[4%] md:mr-[5%] z-40" : "sm:mr-0 z-50 "}
                    ${index === 0 ? "mt-0" : "sm:mt-5 md:mt-0 g:space-y-0 space-y-0 sm:space-y-2"} lg:h-[225px] bg-white- rounded-[10px]  relative box`}
                >
                  <div className=" px-7 py-8">
                    <div className="relative z-40 flex items-center sm:items-start lg:items-center justify-center lg:flex-row flex-row sm:flex-col space-x-4 sm:space-x-0 lg:space-x-6">
                      <p className="text-xl sm:text-2xl md:text-[36px] lg:text-[45px] font-sora tracking-tight font-semibold text-sec !leading-[121%] ">
                        {item?.total_count}+
                      </p>
                      <div className="flex flex-col space-y-1 md:space-y-3 font-satoshi text-main">
                        <p className="font-semibold text-[15px] sm:text-3xl lg:text-[34px]">
                          {item?.title}
                        </p>
                        <p className="font-normal text-xs sm:text-sm lg:text-base para min-h-[50px] sm:min-h-0">
                          {item?.description}
                        </p>
                      </div>
                    </div>
                    <div className="rounded-[10px] h-full w-full absolute inset-0 bg-[#ffffff7d] z-30" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionThree;
