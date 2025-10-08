"use client";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import useMediaQuery from "@/util/useMediaQuery";
import { disableImageOptimization } from "@/util/constants";
const PortfolioSection = ({ section }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isMobile2 = useMediaQuery("(max-width: 1023px)");
  const [activeCard, setActiveCard] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const swipperInnerRef = useRef(null);

  const handleCardClick = (id) => {
    setActiveCard(id);
    // setActiveCard((prev) => (prev === id ? null : id));
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } },
  };

  if (!section?.sub_sections) return;

  return (
    <section className="wrapper-padding pt-10 md:pt-16">
      <div className="flex flex-col gap-y-3 md:space-y-5">
        <h3 className="text-main font-sora text-2xl sm:text-3xl lg:text-[40px] font-semibold leading-[135%] tracking-[-0.4px] text-center md:text-left">
          {section?.title}
        </h3>
        <span className="w-16 h-1 bg-sec block  mx-auto md:mx-0" />
        <div
          dangerouslySetInnerHTML={{ __html: section?.description }}
          className="text-main font-sora text-lg sm:text-xl md:text-2xl font-semibold leading-[135%] tracking-[-0.25px] text-center md:text-left"
        ></div>
      </div>

      <div className="mt-10 md:mt-12">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          spaceBetween={16}
          centeredSlides={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          // speed={300}
          slidesPerView="auto"
          grabCursor={true}
          loop={true}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className="mySwiper swpi ease-in-out"
        >
          {section?.sub_sections &&
            section?.sub_sections?.map((project, index) => {
              return (
                <SwiperSlide
                  key={index}
                  onClick={() => {
                    handleCardClick(index);
                    if (swiperRef.current) {
                      swiperRef.current.slideToLoop(index);
                    }
                  }}
                  className={`shrink-0 bg-[#f8f8f8] relative rounded-[30px] overflow-hidden cursor-pointer transition-all- duration-500 ease-in-out swpi
                  ${activeCard === index ? "md:!w-[600px]- " : "!w-[140px]- lg:!w-[180px]-"}
                `}
                  style={{
                    willChange: "transform",
                    width:
                      activeCard === index
                        ? isMobile
                          ? ""
                          : "600px"
                        : isMobile2
                          ? "140px"
                          : "180px",
                    transition: "width 0.3s ease-in",
                  }}
                >
                  <div>
                    {activeCard === index ? (
                      <Swiper
                        onSwiper={(swiper) => {
                          swipperInnerRef.current = swiper;
                        }}
                        nested={true}
                        spaceBetween={10}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        className="w-full  swpi ease-in-out"
                      >
                        {project?.gallery &&
                          project.gallery?.length > 0 &&
                          project?.gallery?.map((img, i) => (
                            <SwiperSlide
                              key={i}
                              className="relative"
                              style={{
                                willChange: "transform",
                              }}
                            >
                              <Image
                                src={img?.url}
                                alt={project?.title || "image"}
                                width={500}
                                height={300}
                                className="object-cover w-full h-[230px] md:h-[330px] lg:h-[410px] rounded-[30px] transition-all- duration-500 ease-in-out swpi"
                                unoptimized={disableImageOptimization}
                              />
                              {activeCard === index && (
                                <div>
                                  <button
                                    className="absolute top-1/2 z-50 -translate-y-1/2 left-6"
                                    onClick={() =>
                                      swipperInnerRef.current?.slidePrev()
                                    }
                                  >
                                    <ChevronLeft
                                      className="text-[#1C1B1F]"
                                      size={30}
                                    />
                                  </button>
                                  <button
                                    className="absolute top-1/2 z-50 -translate-y-1/2 right-6"
                                    onClick={() =>
                                      swipperInnerRef.current?.slideNext()
                                    }
                                  >
                                    <ChevronRight
                                      className="text-[#1C1B1F]"
                                      size={30}
                                    />
                                  </button>
                                </div>
                              )}
                            </SwiperSlide>
                          ))}
                      </Swiper>
                    ) : (
                      <Image
                        src={project?.image?.url}
                        alt={project?.post_title || "image"}
                        unoptimized={disableImageOptimization}
                        width={300}
                        height={300}
                        className="object-cover w-full h-[400px] md:h-[500px] lg:h-[584px] rounded-[30px] transition-all- duration-500 ease-in-out swpi"
                        sizes="100vw"
                      />
                    )}

                    <div
                      className={`absolute bg-ads-portfolio-grad h-full  w-full bottom-0 left-0 overflow-hidden z-50  ${activeCard === index ? "hidden" : "max-h-[300px] block"}`}
                    />

                    <div
                      className={`${activeCard === index ? " " : " max-h-[180px] absolute bottom-10 left-10 z-50"}    `}
                    >
                      {activeCard === index ? (
                        <div
                          // variants={contentVariants}
                          // initial="hidden"
                          // animate="visible"
                          // exit="hidden"
                          className="flex justify-between items-center w-full pt-3 pb-5 px-7"
                        >
                          <div className="max-w-[70%]--">
                            <h3 className="font-sora text-lg sm:text-xl md:text-2xl lg:text-3xl text-main leading-[135%] tracking-[-0.3px]">
                              {project?.title}
                            </h3>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: project?.description,
                              }}
                              className="text-main font-sora text-sm font-light leading-[202%] "
                            ></div>
                          </div>
                        </div>
                      ) : (
                        <h3
                          style={{
                            writingMode: "vertical-rl",
                            transform: "rotate(180deg)",
                          }}
                          className="text-main font-sora text-xl leading-[135%] tracking-[-0.25px]"
                        >
                          {project?.title}
                        </h3>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>

      <div className=" pt-8 md:pt-10 lg:pt-14 mx-auto w-full flex items-center justify-center gap-x-3">
        <button
          onClick={handlePrev}
          className="border rounded-[10px] border-sec hover:bg-transparent  p-3 bg-sec transition-colors duration-300 group"
          title="Previous"
        >
          <ArrowLeft className="text-[#fff] group-hover:text-main " />
        </button>
        <button
          onClick={handleNext}
          className="border rounded-[10px] border-sec hover:bg-transparent  p-3 bg-sec transition-colors duration-300 group"
          title="Next"
        >
          <ArrowRight className="text-[#fff] group-hover:text-main " />
        </button>
      </div>
    </section>
  );
};

export default PortfolioSection;
