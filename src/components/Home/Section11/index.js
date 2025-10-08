/** @format */
"use client";
import React, { useEffect, useRef, useState } from "react";
import ratingStar from "../../../../public/ratingStar.png";
import ratingStarFilled from "../../../../public/ratingStarFilled.png";
import googlelogo from "../../../../public/googlelogo.png";
import Image from "next/image";
import play from "../../../../public/play_circle.svg";
import pause from "../../../../public/pause_circle.svg";
import quotation from "../../../../public/quotation.png";
import useMediaQuery from "@/util/useMediaQuery";
import TimeAgoComponent from "@/util/TimeAgoComponent";
import Link from "next/link";
import gsap from "gsap";
import { Volume2, VolumeOff } from "lucide-react";

function Section11({ data, title, isLocation = false }) {
  const sortedData = data?.all_reviews || [];
  const sortedDataExact = [...sortedData].sort((a, b) => b.time - a.time);

  const videoRefs = {
    one: useRef(null),
    two: useRef(null),
    three: useRef(null),
    modal: useRef(null),
  };

  const [state, setState] = useState({
    totalNoofReviews: null,
    isModalOpen: false,
    videoUrl: "",
    videoAutoPlay: { one: true, two: false, three: false },
    videoOneMuted: true,
    avgStars: null,
    showMore: false,
  });

  // Media queries
  const breakpoints = {
    mobileSm: useMediaQuery("(max-width: 500px)"),
    mobile: useMediaQuery("(max-width: 640px)"),
    tablet: useMediaQuery("(max-width: 768px)"),
    large: useMediaQuery("(max-width: 1024px)"),
    xl: useMediaQuery("(max-width: 1280px)"),
  };

  // Button animation
  useEffect(() => {
    const buttons = gsap.utils.toArray(".animated-button");
    buttons.forEach((item) => {
      let span = item.querySelector("span");
      let tl = gsap.timeline({ paused: true });

      tl.to(span, { duration: 0.2, yPercent: -150, ease: "power2.in" });
      tl.set(span, { yPercent: 150 });
      tl.to(span, { duration: 0.2, yPercent: 0 });

      item.addEventListener("mouseenter", () => tl.play(0));
    });
  }, []);

  useEffect(() => {
    if (data) {
      const totalReviews = data?.all_reviews?.length || 0;
      const average = data.main_places[0].rating;

      setState((prev) => ({
        ...prev,
        totalNoofReviews: data.main_places[0].review_count,
        avgStars: average,
      }));

      videoRefs.one.current?.play();
    }
  }, [data]);

  // Modal escape key handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };

    if (state.isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [state.isModalOpen]);

  const pauseAllVideos = () => {
    Object.values(videoRefs).forEach((ref) => {
      if (ref.current) {
        ref.current.pause();
      }
    });
  };

  // const openModal = (index) => {
  //   const selectedVideo =
  //     data?.testimonials?.find((_, i) => i === index)?.video_url || "";
  //   setState((prev) => ({
  //     ...prev,
  //     isModalOpen: true,
  //     videoUrl: selectedVideo,
  //   }));
  //   pauseAllVideos;
  // };

  const openModal = (index) => {
    pauseAllVideos();

    const selectedVideo =
      data?.testimonials?.find((_, i) => i === index)?.video_url || "";

    setState((prev) => ({
      ...prev,
      videoAutoPlay: { one: false, two: false, three: false },
      isModalOpen: true,
      videoUrl: selectedVideo,
    }));
  };

  const closeModal = () => {
    setState((prev) => ({ ...prev, isModalOpen: false, videoUrl: "" }));
  };

  const handleVideoPlayback = (videoKey) => {
    setState((prev) => {
      const newAutoPlay = { ...prev.videoAutoPlay };

      if (newAutoPlay[videoKey]) {
        videoRefs[videoKey].current?.pause();
      } else {
        // Pause all videos
        Object.keys(newAutoPlay).forEach((key) => {
          if (key !== videoKey) {
            videoRefs[key].current?.pause();
            newAutoPlay[key] = false;
          }
        });
        // Play the selected video
        videoRefs[videoKey].current?.play();
      }

      newAutoPlay[videoKey] = !newAutoPlay[videoKey];
      return { ...prev, videoAutoPlay: newAutoPlay };
    });
  };

  const toggleMute = () => {
    if (videoRefs.one.current) {
      videoRefs.one.current.muted = !videoRefs.one.current.muted;
      setState((prev) => ({ ...prev, videoOneMuted: !prev.videoOneMuted }));
    }
  };

  return (
    <div
      className={`relative w-screen h-fit bg-white overflow-x-hidden ${isLocation ? "pt-12 sm:pt-14 md:pt-16" : ""}`}
    >
      <div className="relative max-w-screen wrapper-padding sm:py-0 py-10 w-full">
        <div className="w-full grid h-fit grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-row">
          {/* Header Section */}
          <div className="flex space-y-5 sm:space-y-10 sm:items-start items-center sm:justify-start justify-center flex-col col-span-1 h-fit">
            {title ? (
              <h4
                className="font-sora font-semibold text-main text-3xl text-center sm:text-left sm:text-4xl lg:text-4xl heading2"
                style={{ lineHeight: "1.3" }}
              >
                {isLocation ? (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: "Our Success <br/> Stories",
                    }}
                  />
                ) : (
                  title // Assuming 'title' here is plain text or you handle its HTML if any
                )}
              </h4>
            ) : (
              <h4
                className="font-sora font-semibold text-[#101763] text-3xl text-center sm:text-left sm:text-4xl lg:text-5xl heading2"
                style={{ lineHeight: "1.3" }}
              >
                Our Success <br className="hidden md:block" /> Stories
              </h4>
            )}

            <div className="flex flex-col space-y-2">
              <div className="flex space-x-3 items-end">
                <Image
                  src={googlelogo}
                  width={40}
                  height={40}
                  alt="Google logo"
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 208px"
                  className="w-40 sm:w-48 md:w-52 object-contain"
                  loading="lazy"
                  quality={75}
                  priority={false}
                />
              </div>
              <div className="flex space-x-3 items-end">
                <div className="flex items-center justify-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Image
                      key={star}
                      className="w-4 object-contain"
                      src={
                        state.avgStars >= star ? ratingStarFilled : ratingStar
                      }
                      alt="ratingStar"
                      priority={false}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ))}
                </div>
                <span className="font-sans text-xs leading-none text-[#828282]- text-black">
                  {state.totalNoofReviews} reviews
                </span>
              </div>
            </div>
          </div>

          {/* Testimonial Videos and Reviews */}
          {data.testimonials && (
            <>
              {/* First Video */}
              {data.testimonials[0]?.video_url && (
                <div
                  className="flex col-span-1 items-end lg:mt-24 font-satoshi text-white h-[400px] relative rounded-3xl cursor-pointer"
                  onClick={() => openModal(0)}
                >
                  <video
                    autoPlay
                    muted
                    playsInline
                    loop
                    id="video"
                    controlsList="nodownload"
                    className="w-full h-full absolute rounded-3xl object-cover "
                    ref={videoRefs.one}
                    poster={data.testimonials[0]?.image}
                  >
                    <source
                      src={data.testimonials[0].video_url}
                      type="video/mp4"
                    />
                  </video>

                  <div className="absolute bottom-10 right-5 cursor-pointer">
                    {state.videoOneMuted ? (
                      <VolumeOff onClick={toggleMute} />
                    ) : (
                      <Volume2 onClick={toggleMute} />
                    )}
                  </div>
                  <div className="flex z-20 flex-col  cursor-pointer ml-10 mb-12">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleVideoPlayback("one");
                      }}
                      className="w-fit"
                    >
                      <Image
                        src={state.videoAutoPlay.one ? pause : play}
                        className="w-10 inline-block my-2 object-contain"
                        alt="play"
                        role="button"
                        tabIndex={0}
                        priority={false}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </button>

                    <p
                      className="text-base w-auto"
                      onClick={() => openModal(0)}
                    >
                      {data.testimonials[0].author_name}
                    </p>
                    <p
                      className="text-base w-auto"
                      onClick={() => openModal(0)}
                    >
                      {data.testimonials[0].author_position}
                    </p>
                  </div>
                </div>
              )}

              {/* First Review */}
              {sortedDataExact[0] && (
                <div className="flex relative col-span-1 mt-12 sm:-mt-14 lg:mt-10 overflow-y-visible justify-end flex-col font-satoshi text-white h-fit sm:h-[400px] bg-[#101763] rounded-3xl">
                  <div className="pb-8 pt-14 px-12">
                    <p className="text-lg sm:text-2xl leading-relaxed font-medium line-clamp-6">
                      {sortedDataExact[0].text}
                    </p>
                  </div>
                  <div className="flex flex-col pb-10 px-12">
                    <p className="text-base">
                      {sortedDataExact[0].author_name}
                    </p>
                    <p className="text-base">
                      <TimeAgoComponent timestamp={sortedDataExact[0].time} />
                    </p>
                  </div>
                  <Image
                    className="absolute -top-8 h-16 object-contain z-50"
                    src={quotation}
                    alt="quotation"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                  />
                </div>
              )}

              {/* Second Video */}
              {data.testimonials[2]?.video_url && (
                <div
                  className="flex col-span-1 items-end font-satoshi text-white h-[600px] lg:h-[500px] mt-5 sm:-mt-14- lg:-mt-44 relative rounded-3xl cursor-pointer"
                  onClick={() => {
                    openModal(2);
                  }}
                >
                  <video
                    autoPlay={false}
                    playsInline
                    loop
                    id="video"
                    controlsList="nodownload"
                    className="w-full h-full absolute rounded-3xl object-cover "
                    ref={videoRefs.two}
                    poster={data.testimonials[2]?.image}
                  >
                    <source
                      src={data.testimonials[2].video_url}
                      type="video/mp4"
                    />
                  </video>
                  <div className="flex z-20 flex-col cursor-pointer ml-10 mb-12">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleVideoPlayback("two");
                      }}
                      className="w-fit"
                    >
                      <Image
                        src={state.videoAutoPlay.two ? pause : play}
                        className="w-10 inline-block my-2 object-contain"
                        alt="play"
                        role="button"
                        tabIndex={0}
                        priority={false}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </button>
                    <p
                      className="text-base w-auto"
                      onClick={() => openModal(2)}
                    >
                      {data.testimonials[2].author_name}
                    </p>
                    <p
                      className="text-base w-auto"
                      onClick={() => openModal(2)}
                    >
                      {data.testimonials[2].author_position}
                    </p>
                  </div>
                </div>
              )}

              {/* Second Review */}
              {sortedDataExact[1] && (
                <div className="flex relative col-span-1 mt-8 sm:-mt-44 lg:mt-14 overflow-y-visible justify-end flex-col font-satoshi text-black h-fit sm:h-[400px] border border-black rounded-3xl">
                  <div className="pb-8 pt-14 px-12 text-[#101763]">
                    <p className="text-lg sm:text-2xl leading-relaxed font-medium line-clamp-6">
                      {sortedDataExact[1].text}
                    </p>
                  </div>
                  <div className="flex flex-col pb-10 px-12">
                    <p className="text-base">
                      {sortedDataExact[1].author_name}
                    </p>
                    <p className="text-base">
                      <TimeAgoComponent timestamp={sortedDataExact[1].time} />
                    </p>
                  </div>
                  <Image
                    className="absolute -top-8 h-16 object-contain z-50"
                    src={quotation}
                    alt="quotation"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                  />
                </div>
              )}

              {/* Third Video */}
              {data.testimonials[1]?.video_url && (
                <div
                  className="flex col-span-1 items-end mt-5 sm:-mt-14- lg:-mt-10 font-satoshi text-white h-[500px] relative rounded-3xl cursor-pointer"
                  onClick={() => openModal(1)}
                >
                  <video
                    autoPlay={false}
                    playsInline
                    loop
                    id="video"
                    controlsList="nodownload"
                    className="w-full h-full absolute rounded-3xl  object-cover overflow-hidden"
                    ref={videoRefs.three}
                    poster={data.testimonials[1]?.image}
                  >
                    <source
                      src={data.testimonials[1].video_url}
                      type="video/mp4"
                    />
                  </video>
                  <div className="flex z-20 flex-col cursor-pointer ml-10 mb-12">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleVideoPlayback("three");
                      }}
                      className="w-fit"
                    >
                      <Image
                        src={state.videoAutoPlay.three ? pause : play}
                        className="w-10 inline-block my-2 object-contain"
                        alt="play"
                        role="button"
                        tabIndex={0}
                        priority={false}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </button>
                    <p
                      className="text-base w-auto"
                      onClick={() => openModal(1)}
                    >
                      {data.testimonials[1].author_name}
                    </p>
                    <p
                      className="text-base w-auto"
                      onClick={() => openModal(1)}
                    >
                      {data.testimonials[1].author_position}
                    </p>
                  </div>
                </div>
              )}

              {/* Video Modal */}
              {state.isModalOpen && (
                <div
                  className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[99999]"
                  onClick={closeModal}
                >
                  <div
                    className="relative p-4 rounded-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <video
                      autoPlay
                      playsInline
                      loop
                      controls
                      controlsList="nodownload"
                      id="modal-video"
                      className="w-[1000px] h-[600px] object-cover object-center rounded-sm"
                    >
                      <source src={state.videoUrl} type="video/mp4" />
                    </video>
                    <button
                      onClick={closeModal}
                      className="absolute top-2 right-2 text-red-500 h-3 w-3 flex items-center justify-center bg-white font-semibold p-3 rounded-full"
                    >
                      X
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* View All Reviews Button */}
      <Link
        href="https://www.google.com/maps/place/Cheval+-+Website+Design+%7C+App+Development+Agency+Dubai+UAE/@25.1780034,55.2738369,17z/data=!4m8!3m7!1s0x3e5f699813fd9451:0xc4b554ceb43cff51!8m2!3d25.1780034!4d55.2738369!9m1!1b1!16s%2Fg%2F11txt0bwbq?entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        className="animated-button flex items-center font-satoshi justify-center text-lg 25px md:mt-[30px] lg:mt-[35px] font-medium mx-auto text-[#101763] border rounded-sm border-[#101763] w-[201px] h-[61px] transition-all duration-300 overflow-hidden relative"
      >
        <span className="absolute w-full h-full flex items-center justify-center">
          View All Reviews
        </span>
      </Link>
    </div>
  );
}

export default Section11;
