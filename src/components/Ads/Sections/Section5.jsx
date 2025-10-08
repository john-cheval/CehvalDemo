"use client";
import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mic, MicOff, Pause, Play } from "lucide-react";

const AdsSection5 = ({ reviews }) => {
  const swiperRef = useRef(null);
  const videoRefs = useRef([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlay = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play();
      swiperRef.current?.autoplay.stop();
      setIsPlaying(true);
    }
  };

  const handlePause = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      setIsPlaying(false);
      swiperRef.current?.autoplay.start();
    }
  };

  const toggleMute = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const handleSlideChange = (swiper) => {
    videoRefs.current.forEach((v) => {
      if (v) v.pause();
    });
    setIsPlaying(false);
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section>
      <h3 className="text-xl md:text-2xl lg:text-3xl font-sora font-semibold text-[#101763] ml-0 md:ml-10 lg:ml-14">
        Listen what our clients has to say
      </h3>

      <div className="space-y-5- pt-3 md:pt-5">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          grabCursor={true}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          onSlideChange={handleSlideChange}
          className="mySwiper swpi ease-in-out"
        >
          {reviews?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="w-full relative h-full">
                  <video
                    // autoPlay
                    ref={(el) => (videoRefs.current[index] = el)}
                    loop
                    muted={true}
                    playsInline
                    controls={false}
                    controlsList="nodownload"
                    poster={item?.image}
                    preload="auto"
                    className="object-center object-cover rounded-[15px] lg:rounded-[30px] w-full h-auto max-h-[480px]"
                  >
                    <source src={item?.video_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <div className="absolute inset-0"></div>
                </div>

                <div className="mt-3 md:mt-5 flex justify-between">
                  <div>
                    <h4 className="text-[#101763] font-satoshi text-xl md:text-2xl lg:text-3xl font-medium leading-[154%] mb-1">
                      {item?.author_name}
                    </h4>
                    <h6 className="font-satoshi text-[#707070] text-sm md:text-xl font-medium leading-[154%] mb-2">
                      {item?.author_position}
                    </h6>
                  </div>

                  <div className="space-x-5 flex items-center">
                    {isPlaying ? (
                      <Pause
                        fill="#101763"
                        stroke="#101763"
                        className="cursor-pointer"
                        size={18}
                        onClick={() => handlePause(index)}
                      />
                    ) : (
                      <Play
                        fill="#101763"
                        stroke="#101763"
                        className="cursor-pointer"
                        size={18}
                        onClick={() => handlePlay(index)}
                      />
                    )}
                    {isMuted ? (
                      <MicOff
                        color="#101763"
                        className="cursor-pointer"
                        size={18}
                        onClick={() => toggleMute(index)}
                      />
                    ) : (
                      <Mic
                        color="#101763"
                        className="cursor-pointer"
                        size={18}
                        onClick={() => toggleMute(index)}
                      />
                    )}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="flex gap-3 justify-center mt-3 md:mt-4 transition-all duration-300 ease-in-out">
          {reviews?.map((_, i) => (
            <div
              key={i}
              className={`h-[7px] rounded-full transition-all duration-500 ease-in-out ${
                activeIndex === i
                  ? "w-[50px] bg-[#d81100]"
                  : "w-[20px] bg-[#D9D9D9]"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <p className="text-black font-sora text-sm md:text-base lg:text-xl leading-[170%] mt-5 md:mt-7">
        You may already be a vendor to some of our 1,200+ clients. We encourage
        you to confirm with them regarding the quality and reliability of our
        services.
      </p>
    </section>
  );
};

export default AdsSection5;
