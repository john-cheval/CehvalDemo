"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Play from "../../../../public/About/play.svg";
import Logo from "../../../../public/About/logo.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import aboutBannerImages from "@/data/AboutBannerList";
import Overlay from "../../../../public/About/banner/overlay.png";
import Draggable from "gsap/Draggable";
import useMediaQuery from "@/util/useMediaQuery";
import { disableImageOptimization } from "@/util/constants";

const randomImageSrc = () =>
  aboutBannerImages[Math.floor(Math.random() * aboutBannerImages.length)].src;
const AboutBanner = ({ bannerData, bannerPopupVideo }) => {
  const [playVideo, setPlayVideo] = useState(false);
  const aboutSectionCards = useRef(null);
  const aboutSectionCardsMain = useRef(null);
  const overlayRef = useRef(null);
  const videoRef = useRef(null);
  const [videoPaused, setVideoPaused] = useState(false);
  const imagesRefs = useRef([]);
  const bannerRef = useRef();
  const buttonRef = useRef();
  imagesRefs.current = [];
  const [showFlicker, setShowFlicker] = useState(true);
  const [finalImages, setFinalImages] = useState(
    aboutBannerImages?.map(() => randomImageSrc())
  );
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [cardMultiplier, setCardMultiplier] = useState(0.95);

  useEffect(() => {
    if (isMobile !== null) {
      setCardMultiplier(isMobile && 0.95);
    }
  }, [isMobile, cardMultiplier]);

  useEffect(() => {
    let flickerInterval;

    if (showFlicker) {
      flickerInterval = setInterval(() => {
        setFinalImages(aboutBannerImages?.map(() => randomImageSrc()));
      }, 100);
    }

    const flickerTimeout = setTimeout(() => {
      setShowFlicker(false);
      setFinalImages(aboutBannerImages?.map((img) => img.src));
      clearInterval(flickerInterval);
    }, 2000);

    return () => {
      clearTimeout(flickerTimeout);
      clearInterval(flickerInterval);
    };
  }, []);

  const handleVideoClick = () => {
    setPlayVideo(true);
  };

  const handleClose = () => {
    setPlayVideo(false);
    setVideoPaused(true);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleOverlayClick = (e) => {
    if (overlayRef.current && !overlayRef.current.contains(e.target)) {
      handleClose();
    }
  };

  useGSAP(() => {
    gsap.registerPlugin(Draggable);

    // Magnetic hover effect for button
    const button = buttonRef.current;

    if (window.innerWidth < 620) return;
    button.addEventListener("mousemove", (e) => {
      const rect = button.getBoundingClientRect();
      const deltaX = (e.clientX - (rect.left + rect.width / 2)) * 0.2;
      const deltaY = (e.clientY - (rect.top + rect.height / 2)) * 0.2;
      gsap.to(button, {
        x: deltaX,
        y: deltaY,
        ease: "power3.out",
        duration: 0.3,
      });
    });
    button.addEventListener("mouseleave", () => {
      gsap.to(button, { x: 0, y: 0, ease: "power3.out", duration: 0.3 });
    });

    Draggable.create(button, {
      type: "x,y",
      bounds: { minX: -50, maxX: 50, minY: -50, maxY: 50 },
    });
  }, []);

  useGSAP(() => {
    const banner = bannerRef.current;

    const handleMouseMove = (e) => {
      imagesRefs.current.forEach((img, index) => {
        const imgData = aboutBannerImages[index];
        const rect = img.getBoundingClientRect();
        const imgCenterX = rect.left + rect.width / 2;
        const imgCenterY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - imgCenterX) * imgData.magneticFactor;
        const deltaY = (e.clientY - imgCenterY) * imgData.magneticFactor;

        gsap.to(img, {
          x: deltaX,
          y: deltaY,
          ease: "power3.out",
          duration: 0.5,
        });
      });
    };

    if (banner) {
      banner.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (banner) {
        banner.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const pinnedSectionItems = document.getElementById("aboutSectionCards");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#aboutSection2",
        start: "top top",
        end: "+=150%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        // markers: true,
      },
    });

    if (!window.matchMedia("(max-width: 767px)").matches) {
      tl.to(aboutSectionCards.current.children, {
        y: window.matchMedia("(max-width: 900px)").matches ? -120 : -200,
        stagger: {
          amount: 0.4,
        },
      });
    } else {
      tl.from(pinnedSectionItems, {
        y: 10,
      })
        .to(
          pinnedSectionItems.children[1],
          {
            y:
              -1 *
              (pinnedSectionItems.children[1].clientHeight * cardMultiplier),
          },
          "<65%"
        )
        .to(
          pinnedSectionItems.children[2],
          {
            y:
              -1 *
              (pinnedSectionItems.children[2].clientHeight *
                cardMultiplier *
                2),
          },
          "<65%"
        );
    }
  }, []);

  return (
    <div id="aboutSection2">
      <div className="w-screen relative mb-20">
        {/* Background Video */}

        <div
          className="relative h-[325px] md:h-[578px] w-screen  block bg-[#dcdcdc] overflow-hidden"
          ref={bannerRef}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 z-30">
            <Image
              src={Overlay}
              alt="Overlay"
              width={1200}
              height={400}
              sizes="100vw"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>

          {aboutBannerImages?.map((img, index) => (
            <div
              key={index}
              className="absolute overflow-hidden"
              ref={(el) => el && imagesRefs.current.push(el)}
              style={{
                width: img?.width,
                height: img?.height,
                top: img?.top,
                left: img?.left,
                bottom: img?.bottom,
                right: img?.right,
                zIndex: img?.zIndex || 1,
              }}
            >
              <Image
                src={finalImages[index]}
                alt={`Banner ${index}`}
                width={parseInt(img.width)}
                height={parseInt(img.height)}
                priority={true}
                className="w-full h-full object-cover"
                // unoptimized={disableImageOptimization}
              />
            </div>
          ))}

          <div
            ref={buttonRef}
            className="absolute inset-0 flex items-center justify-center z-50 mb-6"
            onClick={handleVideoClick}
          >
            <div className=" flex items-center justify-center  h-fit w-24 sm:w-28 z-20-- xl:w-32  cursor-pointer absolute">
              <Image
                src={Play}
                alt="Play"
                width={30}
                height={30}
                priority={true}
                className="w-full h-full"
                style={{ animation: "rotate 10s linear infinite" }}
              />
              <div className="z-50-- absolute ">
                <Image
                  width={50}
                  height={50}
                  src={Logo}
                  alt="Logo"
                  priority={true}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {playVideo && (
          <div
            ref={overlayRef}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[111111]"
            onClick={handleOverlayClick}
          >
            <div className="w-[90%] h-fit  max-w-[600px] sm:max-w-[800px] md:max-w-[1000px] xl:max-w-[1200px] rounded-[20px] flex items-center justify-center overflow-hidden transition-all duration-300 ease-in-out">
              <video
                ref={videoRef}
                autoPlay
                loop
                playsInline
                controls
                controlsList="nodownload"
                className="w-full h-full object-contain bg-no-repeat"
              >
                <source src={bannerPopupVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4  font-bold border rounded-full border-white h-6 w-6 flex items-center justify-center bg-white text-black"
              >
                X
              </button>
            </div>
          </div>
        )}

        <div
          id="aboutSectionCardMain"
          ref={aboutSectionCardsMain}
          className=" h-[300px]  
  md:h-[250px] lg:h-[120px] overflow-y-visible-- h-fit-- pt-7 z-[60] relative "
        >
          <div
            ref={aboutSectionCards}
            id="aboutSectionCards"
            className="h-fit-- bg-transparent overflow-y-visible md:bg-[#F6F6F4] items-center md:items-start justify-center-- flex flex-col md:flex-row space-x-0 md:space-y-0 space-y-4 md:space-x-3 lg:px-10-- xl:px-20-- pb-5-- w-full wrapper-padding"
          >
            <div className="about-card aboutCard rounded-xl bg-[#F1F1F1] flex lg:flex-row flex-col  h-[180px] md:h-[280px] lg:h-[270px] text-[#101763] space-x-3 items-center justify-center px-6  xl:px-7 w-full sm:w-[80%] md:w-1/3 ">
              <h4 className="text-2xl sm:text-4xl md:text-3xl xl:text-5xl text-center font-sora tracking-tight  font-semibold">
                {bannerData?.[0]?.total_count || 600}+
              </h4>
              <div className="flex flex-col space-y-2 sm:space-y-3 font-satoshi text-center lg:text-left">
                <h4 className="font-semibold text-xl sm:text-2xl md:text-3xl xl:text-4xl ">
                  {bannerData?.[0]?.title || "Happy Clients"}
                </h4>
                <p className="font-normal  text-xs sm:text-sm   lg:text-base w-full text-center lg:text-left para">
                  {bannerData?.[0]?.description ||
                    "Delivering success across diverse projects, including websites, mobile apps, softwares, CRM solutions, and more."}
                </p>
              </div>
            </div>

            <div className="about-card aboutCard rounded-xl bg-[#D81100] flex lg:flex-row flex-col h-[180px] md:h-[280px] lg:h-[270px] text-white space-x-3 items-center justify-center px-6  xl:px-7 w-full sm:w-[80%] md:w-1/3">
              <h4 className="text-2xl sm:text-4xl md:text-3xl xl:text-5xl text-center font-sora tracking-tight  font-semibold">
                {bannerData?.[1]?.total_count || 30}+
              </h4>
              <div className="flex flex-col space-y-2 sm:space-y-3 font-satoshi text-center lg:text-left">
                <h4 className="font-semibold text-xl sm:text-2xl md:text-3xl xl:text-4xl ">
                  {" "}
                  {bannerData?.[1]?.title || "Experienced Team"}
                </h4>
                <p className="font-normal text-xs sm:text-sm para  lg:text-base w-full">
                  {bannerData?.[1]?.description ||
                    "A skilled team of developers, designers, business analysts, and project managers across UAE and Asia driving innovation and excellence in every project."}
                </p>
              </div>
            </div>

            <div className="about-card aboutCard rounded-xl bg-[#101763] flex lg:flex-row flex-col  h-[180px] md:h-[280px] lg:h-[270px] text-white items-center justify-center px-6  xl:px-7 w-full sm:w-[80%] md:w-1/3 space-x-2">
              <div className="flex lg:flex-row flex-col items-center  font-satoshi md:space-x-3">
                <h4 className="text-2xl sm:text-4xl md:text-3xl xl:text-5xl text-center font-sora tracking-tight  font-semibold">
                  {bannerData?.[2]?.total_count || 800}+
                </h4>
                <div className="flex flex-col space-y-2 sm:space-y-3 font-satoshi text-center lg:text-left">
                  <h4 className=" font-semibold text-xl sm:text-2xl md:text-3xl xl:text-4xl ">
                    {bannerData?.[2]?.title || "Projects"}
                  </h4>
                  <p className="font-normal text-xs sm:text-sm para  lg:text-base w-full">
                    {bannerData?.[2]?.description ||
                      "Proven expertise with 800+ projects delivered across diverse industries and technologies."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
