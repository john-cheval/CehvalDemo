"use client";

import { useEffect, useRef, useState } from "react";
import gsap, { Expo } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import useMediaQuery from "@/util/useMediaQuery";
import Link from "next/link";
import { RotateCcw, X } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
function Section1({ title, link, fullVideo, shortVideo, subTitle, linkText }) {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const maskContainerRef = useRef(null);

  // Optimize animations to run after critical content is loaded
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const playButton = document.getElementById("playButton");

    gsap.set(playButton, {
      opacity: 0,
      y: 100,
    });

    // Delay non-critical animations
    setTimeout(() => {
      const splittype = new SplitType("#heroSectionText", {
        types: "lines",
        lineClass: "block w-full overflow-hidden",
        tagName: "span",
      });

      const tl = gsap
        .timeline({})
        .fromTo(
          splittype.lines,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            delay: 0.5,
            duration: 0.5,
            opacity: 1,
            ease: Expo,
            stagger: {
              amount: 0.2,
            },
          },
          "start23"
        )
        .fromTo(
          ".heroSectionBigText, .heroSectionBtn",
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            delay: 0.5,
            duration: 0.5,
            opacity: 1,
            ease: Expo,
            stagger: {
              amount: 0.2,
            },
          },
          "start23"
        );
    }, 100);

    // Set up scroll animations after initial render
    const timeline = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: "#mainSection1",
        pin: true,
        scrub: true,
        start: "top top",
        end: "+=150%",
        onUpdate: (self) => {
          const progress = Math.round(self.progress * 100);

          if (progress >= 25) {
            gsap.to(playButton, {
              opacity: 1,
              y: 0,
              right: window.innerWidth < 640 ? "50%" : "115px",
              duration: 0.6,
              ease: "power2.out",
            });
          } else {
            gsap.to(playButton, {
              opacity: 0,
              y: 100,
              duration: 0.6,
              ease: "power2.out",
            });
          }
        },
      },
    });

    timeline
      .to("#section11", {
        opacity: 0,
        y: -100,
        duration: 0.1,
        ease: "none",
      })
      .to(
        "#maskImage",
        {
          maskSize: window.matchMedia("(max-width: 640px)").matches
            ? "5000%"
            : "4000%",
          maskPositionX: window.matchMedia("(max-width: 640px)").matches
            ? "57.5%"
            : "55%",
          ease: "none",
        },
        "<"
      )
      .to("#section-text", {
        opacity: 0,
        visibility: "hidden",
      })
      .to(
        "#video",
        {
          opacity: 1,
        },
        "<"
      );
  }, []);

  const handleFullscreen = () => {
    setIsFullscreen(true);
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  };

  const handleExitFullscreen = () => {
    setIsFullscreen(false);
  };

  const handleReplay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    // Mark the LCP element as loaded for performance metrics
    if (
      typeof window !== "undefined" &&
      window.performance &&
      window.performance.mark
    ) {
      window.performance.mark("video-loaded");
    }
  };

  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     if (e.key === "Escape") {
  //       setIsFullscreen(false);
  //     }
  //   };

  //   if (isFullscreen) {
  //     window.addEventListener("keydown", handleKeyDown);
  //   }

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [isFullscreen]);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsFullscreen(false);
      }
    };

    if (isFullscreen) {
      window.addEventListener("keydown", handleKeyDown);
      // Play the video only after it has been mounted
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.error("Error playing video:", error);
        });
        // You can also add a focus here to improve accessibility
        if (closeBtnRef.current) {
          closeBtnRef.current.focus();
        }
      }
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (videoRef.current) {
        videoRef.current.pause(); // Optional: pause the video when exiting fullscreen
      }
    };
  }, [isFullscreen]);

  // Optimize button animations to run after critical content is loaded
  useEffect(() => {
    // Delay non-critical animations
    const setupButtonAnimations = () => {
      const buttons = gsap.utils.toArray(".heroSectionBtn");
      buttons.forEach((item) => {
        const span = item.querySelector("span");
        const tl = gsap.timeline({ paused: true });

        tl.to(span, { duration: 0.2, yPercent: -150, ease: "power2.in" });
        tl.set(span, { yPercent: 150 });
        tl.to(span, { duration: 0.2, yPercent: 0 });

        item.addEventListener("mouseenter", () => tl.play(0));
      });
    };

    // Run after initial render
    if (typeof window !== "undefined") {
      setTimeout(setupButtonAnimations, 200);
    }
  }, []);

  // Optimize LCP by preloading critical resources
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Generate poster image path
      const posterUrl = shortVideo
        ? shortVideo.replace(".mp4", "-poster.jpg")
        : "/placeholder.svg?height=720&width=1280";

      // Set up video element with proper attributes for faster loading
      if (videoRef.current) {
        videoRef.current.setAttribute("fetchpriority", "high");
        videoRef.current.setAttribute("poster", posterUrl);
        videoRef.current.setAttribute("preload", "auto");
      }

      // Preload the mask SVG with high priority
      const preloadLink = document.createElement("link");
      preloadLink.rel = "preload";
      preloadLink.href = "/Cheval.svg";
      preloadLink.as = "image";
      preloadLink.type = "image/svg+xml";
      document.head.appendChild(preloadLink);

      // Preload poster image using the global window.Image constructor
      if (typeof window !== "undefined") {
        const imgPreload = new window.Image();
        imgPreload.src = posterUrl;
        imgPreload.fetchPriority = "high";
        imgPreload.crossOrigin = "anonymous";
      }

      return () => {
        document.head.removeChild(preloadLink);
      };
    }
  }, [shortVideo]);

  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (isFullscreen && closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
  }, [isFullscreen]);

  return (
    <div id="sectionHome1">
      <div id="mainSection1" className="hidden sm:block">
        <div
          // id="section1"
          className="relative w-screen sm:h-[100dvh] overflow-hidden"
        >
          {/* Preload the mask image */}
          <link
            rel="preload"
            href="/Cheval.svg"
            as="image"
            type="image/svg+xml"
            fetchPriority="high"
          />
          {!isMobile && (
            <div
              id="maskImage"
              ref={maskContainerRef}
              className="absolute top-0 heroSectionBigText left-0 w-screen md:h-[100dvh] flex items-center justify-center z-50"
              style={{
                maskImage: "url(/Cheval.svg)",
                maskPosition: isMobile ? "50% 54%" : "50% 93%",
                maskRepeat: "no-repeat",
                maskSize: "78%",
                willChange: "mask-size, mask-position",
                contentVisibility: "auto",
              }}
              // aria-label="Hero video section"
            >
              <video
                autoPlay
                muted
                playsInline
                loop
                id="video"
                ref={videoRef}
                className="lg:w-screen w-full h-[100dvh] object-cover"
                onLoadedData={handleVideoLoad}
                // poster={
                //   shortVideo
                //     ? shortVideo.replace(".mp4", "-poster.jpg")
                //     : "/placeholder.svg?height=720&width=1280"
                // }
                poster="/comon/short.gif"
                width="1920"
                height="1080"
                style={{ aspectRatio: "16/9" }}
                preload="auto"
              >
                <source src={shortVideo} type="video/mp4" />
              </video>
            </div>
          )}

          {!isMobile && (
            <div
              id="playButton"
              className="absolute inset-0 w-full h-full flex items-center justify-center z-[11115] opacity-0 translate-y-24 transition-none"
              onClick={handleFullscreen}
              // aria-label="Play fullscreen video"
              role="button"
              tabIndex={0}
            >
              <div
                className="flex items-center justify-center h-fit w-24 sm:w-28 xl:w-32 5xl:w-40 cursor-pointer"
                onClick={handleFullscreen}
              >
                <Image
                  src="/About/play.svg"
                  alt="Play"
                  className="w-full h-full"
                  style={{ animation: "rotate 10s linear infinite" }}
                  priority={true}
                  width={112}
                  height={112}
                />
                <div className="absolute">
                  <Image
                    src="/About/logo.svg"
                    alt="Logo"
                    className="sm:w-full h-full w-[40px]"
                    priority={true}
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>
          )}

          <div
            className="relative bg-white w-screen h-[100dvh] overflow-hidden"
            id="section-text"
          >
            <div
              style={{ zIndex: 11118 }}
              className="relative max-w-screen mx-auto min-h-[100dvh] w-full"
            >
              <div
                id="section11"
                className="w-full flex items-center pt-10 sm:pt-32 lg:pt-36 h-[100dvh] flex-col justify-center gap-y-24 sm:gap-y-0"
              >
                <div
                  className="flex flex-col items-center justify-center mb-10 md:mb-none gap-y-2 sm:gap-y-3 md:gap-y-0"
                  style={{
                    zIndex: 9,
                  }}
                >
                  <p
                    className="font-sora text-2xl sm:text-3xl md:text-4xl font-bold md:mb-3 lg:text-5xl xl:text-[54px] bg-gradient-to-r from-[#101763] to-[#D81100] bg-clip-text text-transparent relative heading2 heading-1"
                    title={title}
                    style={{
                      display: "block !important",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    {title}
                  </p>
                  <p
                    className="text-center font-sora font-normal text-base md:text-[22px] text-[#101763] px-3 md:px-0 description-1"
                    style={{ lineHeight: 1.2 }}
                  >
                    {subTitle}
                  </p>
                  <Link
                    href={link}
                    className="heroSectionBtn font-sora hidden sm:inline-block font-normal md:text-[18px] md:mt-5 text-white bg-[#d81100] text-center rounded-lg relative overflow-hidden w-[180px] lg:w-[220px] 5xl:w-[250px] h-[50px] md:h-[58px] 5xl:h-[75px] btn-text-1"
                    // aria-label={linkText}
                    title={linkText}
                  >
                    <span className="absolute w-full h-full flex items-center justify-center">
                      {linkText}
                    </span>
                  </Link>
                  <div className="items-center flex justify-center w-full relative">
                    <Link
                      className="font-sora sm:hidden font-normal md:text-[18px] text-white underline heroSectionBtn absolute- bottom-0 bg-[#d81100] text-center rounded-lg w-[180px] lg:w-[220px] h-[50px] md:h-[58px]"
                      href={link}
                      // aria-label={linkText}
                      title={linkText}
                      style={{ zIndex: 1111988 }}
                    >
                      <span className="absolute w-full h-full flex items-center justify-center">
                        {linkText}
                      </span>
                    </Link>
                  </div>
                </div>

                {!isMobile && (
                  <p
                    id="mainHeading"
                    className="text-[24vw] leading-[.82] font-sora font-semibold tracking-tighter text-[#DBDBDB] opacity-0"
                  >
                    Cheval
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {isFullscreen && (
          <>
            <div
              className="fixed top-0 left-0 w-screen h-screen bg-white/95 z-[11119] flex flex-col items-center justify-center"
              onClick={handleExitFullscreen}
            >
              {/* Use a wrapper div for consistent sizing */}
              <div className="w-fit h-[80vh] aspect-video">
                <video
                  autoPlay
                  ref={videoRef}
                  playsInline
                  loop
                  // Add the 'controls' attribute back here
                  controls
                  controlsList="nodownload"
                  className="w-full h-full object-contain z-[11120] relative"
                  style={{ pointerEvents: "auto" }}
                >
                  <source src={fullVideo} type="video/mp4" />
                </video>
              </div>

              <div className="flex justify-between md:justify-center px-5 w-full md:gap-4 md:mt-5 absolute top-[20%] md:relative md:top-0">
                <button
                  className="bg-[#D81100] hover:bg-[#101763] text-white px-4 py-2 rounded font-sora"
                  onClick={handleReplay}
                >
                  <RotateCcw />
                </button>
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded"
                  onClick={handleExitFullscreen}
                  ref={closeBtnRef}
                >
                  <X />
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <section className="flex flex-col h-screen items-center justify-center gap-y-3 overflow-hidden sm:hidden">
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
          className="font-sora text-2xl  font-bold bg-gradient-to-r from-[#101763] to-[#D81100] bg-clip-text text-transparent relative "
          title={title}
          style={{
            display: "block !important",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {title}
        </motion.p>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
          className="text-center font-sora font-normal text-base  text-[#101763] px-3 "
          style={{ lineHeight: 1.2 }}
        >
          {subTitle}
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <Link
            href={link}
            className="heroSectionBtn- font-sora inline-block font-normal  text-white bg-[#d81100] text-center rounded-lg relative overflow-hidden w-[180px]  h-[50px] "
            // aria-label={linkText}
            title={linkText}
          >
            <span className="absolute w-full h-full flex items-center justify-center">
              {linkText}
            </span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

export default Section1;
