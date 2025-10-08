"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const OurValuesInner = ({ valuesData }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;

    const abtcl = [
      "about_speed",
      "about_vision",
      "about_mission",
      "about_mission_final",
    ];

    if (!container) return;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",

      onEnter: () => {
        const sections = gsap.utils.toArray(".section");
        sections.forEach((section, index) => {
          gsap.to(container, {
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              onEnter: () => {
                const chkbg = document.querySelector(".chkbgabout");
                if (chkbg) {
                  chkbg.classList.add(abtcl[index]);
                }
              },
              onEnterBack: () => {
                const chkbg = document.querySelector(".chkbgabout");
                if (chkbg && abtcl[index + 1]) {
                  chkbg.classList.remove(abtcl[index + 1]);
                }
              },
            },
          });
        });
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[649px] w-full rounded-[30px] md:bg-cover md:bg-center md:bg-no-repeat bg-none z-40  chkbgabout"
      style={{
        height: "fit-content",
        position: "relative",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div className="flex flex-col justify-center h-full space-y-10 p-10">
        {valuesData?.speed_area_list?.map((values, index) => (
          <div className={`section section${index + 1} relative`} key={index}>
            <div className="flex items-center space-x-4">
              <span className=" w-4 h-4 round_about rounded-full"></span>
              <h2 className="text text-2xl font-bold  font-sora leading-[133%]">
                {values?.title}
              </h2>
            </div>
            <p
              dangerouslySetInnerHTML={{ __html: values?.description }}
              className="text long-description mt-2 ml-6  w-[80%] md:w-[410px] font-satoshi text-base leading-[155%]"
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValuesInner;
