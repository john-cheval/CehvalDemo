/** @format */
"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ChildrenReveal from "@/util/ChildrenReveal";
import { disableImageOptimization } from "@/util/constants";
function Section8({ data, split, isNew = false }) {
  const firstSlider = useRef(null);
  const secondSlider = useRef(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let timeline = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: "#section8",
        scrub: 1,
        start: "top bottom",
        end: "bottom top",
        // markers: true,
      },
    });
    timeline
      .to(
        firstSlider.current,
        {
          x: 0,
        },
        "start"
      )
      .to(
        secondSlider.current,
        {
          x: -500,
        },
        "start"
      );
  }, []);

  return (
    <div
      id="section8"
      className="relative w-screen h-fit bg-white flex items-center justify-center overflow-x-hidden"
    >
      <ChildrenReveal
        x={0}
        y={20}
        start={"top 60%"}
        styling={`w-full relative sliderContainer flex items-center justify-center overflow-x-hidden space-y-8 ${isNew ? "py-12 md:pb-20 lg:pb-24" : "py-12 sm:py-32 md:py-36"} h-fit flex-col`}
      >
        <div ref={slider1} className="relative whitespace-nowrap">
          <div
            ref={firstSlider}
            className=" flex   space-x-6 -translate-x-[500px] "
          >
            {data &&
              split &&
              data?.show_off_gallery?.map(
                (item, index) =>
                  index < split && (
                    <div
                      key={index}
                      className=" h-[180px] sm:h-[250px] md:h-[304px] w-[250px] sm:w-[370px] md:w-[424px] relative object-contain"
                    >
                      <Image
                        src={item.url}
                        className=" object-contain"
                        fill={true}
                        alt="gallery"
                        priority={false}
                        // unoptimized={disableImageOptimization}
                      />
                    </div>
                  )
              )}
            {data &&
              split &&
              data?.show_off_gallery?.map(
                (item, index) =>
                  index < split && (
                    <div
                      key={index}
                      className=" h-[180px] sm:h-[250px] md:h-[304px] w-[250px] sm:w-[370px] md:w-[424px] relative object-contain"
                    >
                      <Image
                        src={item.url}
                        className=" object-contain"
                        fill={true}
                        alt="gallery"
                        priority={false}
                        // unoptimized={disableImageOptimization}
                      />
                    </div>
                  )
              )}{" "}
            {data &&
              split &&
              data?.show_off_gallery?.map(
                (item, index) =>
                  index < split && (
                    <div
                      key={index}
                      className=" h-[180px] sm:h-[250px] md:h-[304px] w-[250px] sm:w-[370px] md:w-[424px] relative object-contain"
                    >
                      <Image
                        src={item.url}
                        className=" object-contain"
                        fill={true}
                        alt="gallery"
                        priority={false}
                        // unoptimized={disableImageOptimization}
                      />
                    </div>
                  )
              )}
          </div>
        </div>
        <div ref={slider2} className="relative whitespace-nowrap">
          <div ref={secondSlider} className=" flex  space-x-6 ">
            {data &&
              split &&
              data?.show_off_gallery?.map(
                (item, index) =>
                  index > split && (
                    <div
                      key={index}
                      className=" h-[180px] sm:h-[250px] md:h-[304px] w-[250px] sm:w-[370px] md:w-[424px] relative object-contain"
                    >
                      <Image
                        src={item.url}
                        className=" object-contain"
                        fill={true}
                        alt="gallery"
                        priority={false}
                        // unoptimized={disableImageOptimization}
                      />
                    </div>
                  )
              )}
            {data &&
              split &&
              data?.show_off_gallery?.map(
                (item, index) =>
                  index > split && (
                    <div
                      key={index}
                      className=" h-[180px] sm:h-[250px] md:h-[304px] w-[250px] sm:w-[370px] md:w-[424px] relative object-contain"
                    >
                      <Image
                        src={item.url}
                        className=" object-contain"
                        fill={true}
                        alt="gallery"
                        priority={false}
                        // unoptimized={disableImageOptimization}
                      />
                    </div>
                  )
              )}
            {data &&
              split &&
              data?.show_off_gallery?.map(
                (item, index) =>
                  index > split && (
                    <div
                      key={index}
                      className=" h-[180px] sm:h-[250px] md:h-[304px] w-[250px] sm:w-[370px] md:w-[424px] relative object-contain"
                    >
                      <Image
                        src={item.url}
                        className=" object-contain"
                        fill={true}
                        alt="gallery"
                        priority={false}
                        // unoptimized={disableImageOptimization}
                      />
                    </div>
                  )
              )}
          </div>
        </div>
      </ChildrenReveal>
    </div>
  );
}

export default Section8;
