/** @format */
"use client";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ChildrenReveal from "@/util/ChildrenReveal";
import Buttons from "@/components/Buttons";
import Overlay from "../../../../public/Home/cardsNEw/bgOverlay.png";
import Overlay2 from "../../../../public/Home/cardsNEw/overlay2.png";
import { useState, useEffect } from "react";
import { disableImageOptimization } from "@/util/constants";

function Section4({ cardData }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("main-slider-container");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useGSAP(() => {
    const imgSlider = document.getElementById("slider-container");
    const imgSliderMain = document.getElementById("main-slider-container");

    if (!window.matchMedia("(max-width: 640px)").matches) {
      gsap.registerPlugin(ScrollTrigger);

      const totalCards = imgSlider.children.length;

      // Ensure correct width
      imgSlider.style.width = `${totalCards * 100}vw`;

      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: imgSliderMain,
            pin: true,
            // start: "top top",
            start: "top 50px",
            end: `+=${(totalCards - 1) * 100}%`,
            scrub: true,
          },
        })
        .to(imgSlider, {
          x: () => -(imgSlider.scrollWidth - imgSliderMain.offsetWidth),
          ease: "power2.inOut",
        });
    }
  }, []);

  const Card = ({ data, index }) => (
    <div className="w-screen wrapper-padding">
      <div className="relative w-full flex flex-row justify-center-- rounded-[30px] bg-cover py-10 md:py-0 h-auto sm:h-[70vh] lg:h-[85vh]-- mt-0 sm:mt-[10vh] sm:bg-none overflow-hidden">
        {isVisible && (
          <Image
            src={data?.image}
            alt={data?.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            quality={75}
            unoptimized={disableImageOptimization}
          />
        )}
        <div className="absolute lg:hidden inset-0 h-full w-full z-10">
          <Image
            src={Overlay2}
            alt="overlay2"
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
            quality={75}
          />
        </div>
        <div className="hidden md:block absolute inset-0 h-full w-full z-10">
          <Image
            src={Overlay}
            alt="overlay"
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
            quality={75}
          />
        </div>
        <div className="flex z-20 flex-col items-center text-center md:items-start justify-center w-full py-16-- px-0 sm:px-16 lg:px-20 lg:py-16--">
          <p className="font-sora md:text-left text-center font-semibold text-[40px] sm:text-[60px] md:text-[7vw] lg:text-[74px] tracking-[-1.6px] capitalize text-white heading2">
            {data?.title}
          </p>
          <p className="text-white text-center leading-[139%] md:text-start text-[25px] w-[80%] sm:text-[30px] lg:text-[40px] mb-4 lg:max-w-[650px]">
            {data?.sub_title}
          </p>
          <p className="font-satoshi w-[90%] text-white md:text-left text-center text-base leading-normal md:leading-[25px] max-w-[650px]">
            {data?.description}
          </p>
          {data?.link && (
            <Buttons link={data?.link} color={false} text="Explore" />
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div
      id="main-slider-container"
      className="relative w-screen h-fit-- sm:h-[100dvh]-- sm:py-0 md:pb-10 bg-[#F6F6F4] overflow-hidden"
    >
      <div className="relative h-fit sm:h-[100dvh]-- w-full">
        <ChildrenReveal
          x={0}
          y={20}
          styling="w-full relative flex mx-auto overflow-hidden h-fit sm:h-[80dvh]"
        >
          <div
            id="slider-container"
            className="relative sm:absolute flex overflow-hidden h-fit sm:h-[100dvh]-- sm:flex-row flex-col w-full sm:w-[300vw] min-w-full sm:space-y-0 space-y-4 my-5 sm:my-0 items-start"
          >
            {cardData?.map((data, index) => (
              <Card key={index} data={data} index={index} />
            ))}
          </div>
        </ChildrenReveal>
      </div>
    </div>
  );
}

export default Section4;
