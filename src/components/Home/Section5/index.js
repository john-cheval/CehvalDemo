"use client";
import React, { useEffect, useState } from "react";
import gsap, { Power3 } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import arrowForward from "../../../../public/arrow_forward.png";
import { useRouter } from "next/navigation";
import Buttons from "@/components/Buttons";
// import DarkButton from "@/components/Buttons/DarkButton";
import WorkMobile from "./WorkMobile";
import { disableImageOptimization } from "@/util/constants";

function Section5({ data, isNew = false }) {
  const router = useRouter();
  const [activeCard, setActiveCard] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const pinnedWorksItems = document.getElementById("pinnedWorksItems");
    const workInnerHeight = pinnedWorksItems.children[0].clientHeight;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#pinnedWorkSection",
        pin: true,
        scrub: true,
        start: "top 50px",
        end: "+=400%",
        // markers: true,
      },
    });

    [...Array(4)].forEach((_, i) => {
      timeline.to(
        pinnedWorksItems.children[i + 1],
        {
          y: -(workInnerHeight + 20) * (i + 1),
        },
        "<65%"
      );
    });

    timeline.to("#pinnedWorks", { delay: 0.2 });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (activeCard !== null) {
        setIsScrolling(true);
        setTimeout(() => {
          setActiveCard(null);
          setIsScrolling(false);
        }, 200);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeCard]);

  const renderCard = (key, index, position) => {
    const isVideo = (url) => url?.endsWith(".mp4");

    return (
      <div
        role="button"
        tabIndex={"0"}
        key={index}
        onClick={() => setActiveCard(index)}
        style={{
          zIndex:
            activeCard === index ? index + 100 : index + 10 + position * 20,
        }}
        className={`w-full h-[550px] md:h-[550px] mt-5 sm:mt-0 relative sm:bg-transparent ${isNew ? "bg-white" : "bg-[#f6f6f6]"}  rounded-[30px] overflow-hidden`}
      >
        <div className="sm:h-full w-full relative h-1/2 sm:absolute sm:top-0 sm:right-0 object-cover">
          {isVideo(data[key]?.home_image) ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              // aria-label={`Preview of project ${data[key].home_title}`}
              controlsList="nodownload"
              className="object-center object-cover rounded-[30px] w-full h-full"
            >
              <source src={data[key]?.home_image} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={data[key]?.home_image}
              fill={true}
              className="object-cover rounded-[30px]"
              alt={data[key].home_title.split(" ")[0] || "Work"}
              priority={true}
              // unoptimized={disableImageOptimization}
            />
          )}
        </div>

        <div
          className={`flex flex-col py-4 sm:pt-[40px] md:pt-[60px] px-2 sm:px-10 lg:px-16 sm:justify-center md:justify-normal md:items-start items-center h-1/2 sm:h-full ${index % 2 === 0 ? "sm:right-0" : "sm:left-0"} relative sm:absolute sm:top-0 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 workContainer z-20`}
        >
          <p className="font-sora -ml-[12px] text-3xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-[5.3rem]-- tracking-tighter text-black sm:text-white font-extralight mb-3 md:mb-5 heading2">
            {/* {data[key].home_title.split(" ").slice(0, 2).join(" ")} */}
            {index === 3
              ? data[key].home_title.split(" ").slice(0, 3).join(" ")
              : data[key].home_title.split(" ").slice(0, 2).join(" ")}
          </p>

          {data[key]?.projects_category && (
            <div className="flex-row space-x-2 sm:space-x-3 md:space-x-4 sm:flex hidden mb-8">
              {data[key].projects_category.slice(0, 3).map((category, i) => (
                <div
                  key={i}
                  className="font-sora text-[6px] sm:text-[8px] md:text-[10px] uppercase py-2.5 px-6 w-fit min-w-[125px] text-center border border-white sm:bg-transparent bg-white text-black sm:text-white rounded-3xl"
                >
                  {category.name}
                </div>
              ))}
            </div>
          )}

          <p className="font-sora font-extralight text-base sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[40px] sm:tracking-[-1.76px] leading-[121%] text-center sm:text-left text-black sm:text-white mb-3 sm:mb-5 md:mb-8 xl:mb-11">
            {data[key].home_description}
          </p>

          <div
            className="w-full hidden h-fit pb-4 sm:pb-5 border-y group cursor-pointer border-black sm:border-white border-dotted md:flex items-center justify-center-- justify-between"
            onClick={() => router.push(`/projects/${data[key]?.post_name}`)}
          >
            <Buttons
              link={`/projects/${data[key]?.post_name}`}
              text="View Case Study"
            />
            <Image
              src={arrowForward}
              className="sm:block mt-5 hidden w-5 md:w-6 group-hover:-rotate-45 transition-all invert duration-500 object-contain"
              alt="arrow forward"
              priority={false}
              width={50}
              height={50}
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    );
  };

  const orderedKeys = [175, 2422, 176, 2509, 2590];

  return (
    <>
      <div className=" w-full h-[100dvh]-- md:flex sticky top-0 items-center justify-center pointer-events-none z-0 hidden py-12">
        <p
          id="worksText"
          className="font-semibold text-[#D81100] font-sora tracking-tighter text-[90px] sm:text-[130px] md:text-[180px] lg:text-[200px] 
    text-center"
        >
          Works
        </p>
      </div>
      <div
        // aria-labelledby="worksText"
        id="pinnedWorkSection"
        className={`relative hidden md:block w-screen h-[580px] md:h-[750px] ${isNew ? "bg-white" : "bg-[#f6f6f6]"}  overflow-visible`}
      >
        {/* <div className=" w-full-- h-full-- flex items-center justify-center pointer-events-none z-0">
          <p
            id="worksText"
            className="font-semibold text-[#D81100] font-sora tracking-tighter text-[90px] sm:text-[130px] md:text-[180px] lg:text-[200px] 
    text-center"
          >
            Works
          </p>
        </div> */}

        <div
          id="pinnedWorks"
          className="relative pt-8 md:pt-0 xl:pt-14-- h-fit w-screen overflow-hidden"
        >
          <div
            id="pinnedWorksItems"
            className="flex flex-col relative z-[2] space-y-6 sm:space-y-10 wrapper-padding mx-auto max-w-screen"
          >
            {orderedKeys
              .filter((key) => data[key])
              .map((key, index) => index < 5 && renderCard(key, index, index))}
          </div>
        </div>
      </div>

      <div className="md:hidden block">
        <WorkMobile data={data} />
      </div>
    </>
  );
}

export default Section5;
