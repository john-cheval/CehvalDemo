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
function GoogleReviews({ data, sortedData }) {
  const videoRefOne = useRef(null);
  const videoRefTwo = useRef(null);
  const videoRefThree = useRef(null);
  const [totalNoofReviews, setTotalNoofReviews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [videoAutoPlayOne, setVideoAutoPlayOne] = useState(true);
  const [videoAutoPlayTwo, setVideoAutoPlayTwo] = useState(false);
  const [videoAutoPlayThree, setVideoAutoPlayThree] = useState(false);

  const [avgStars, setAvgStars] = useState(null);
  const [showMore, setShowMore] = useState(false);

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
    // let avgRating = 0;

    if (data) {
      setTotalNoofReviews(data.main_places[0].review_count);
      const totalReviews = data?.all_reviews?.length || 0;
      const average =
        totalReviews > 0
          ? data.all_reviews.reduce(
              (acc, review) => acc + parseInt(review.rating, 10),
              0
            ) / totalReviews
          : 0;

      setAvgStars(average);
    }

    if (setVideoAutoPlayOne) {
      videoRefOne.current.play();
    }
    if (setVideoAutoPlayTwo) {
      videoRefTwo.current.pause();
    }
    if (setVideoAutoPlayThree) {
      videoRefThree.current.pause();
    }
  }, [data, totalNoofReviews]);

  const isMobileSm = useMediaQuery("(max-width: 500px)");
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 768px)");
  const isLarge = useMediaQuery("(max-width: 1024px)");
  const isXL = useMediaQuery("(max-width: 1280px)");
  const sortedDataExact = [...sortedData].sort((a, b) => b.time - a.time);

  const cardMultiplier = isMobileSm
    ? 1.2
    : isMobile
      ? 1.5
      : isTablet
        ? 2
        : isLarge
          ? 2.5
          : isXL
            ? 3
            : 3;

  const openModal = (index) => {
    data?.testimonials?.filter((item, i) => {
      if (i === index) {
        setVideoUrl(item.video_url);
      }
    });
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl("");
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const handlePauseOne = () => {
    setVideoAutoPlayOne((prev) => {
      if (videoRefOne.current) {
        if (prev) {
          videoRefOne.current.pause();
        } else {
          videoRefOne.current.play();
          videoRefTwo.current.pause();
          videoRefThree.current.pause();
          setVideoAutoPlayThree(false);
          setVideoAutoPlayTwo(false);
        }
      }
      return !prev;
    });
  };

  const handlePauseTwo = () => {
    setVideoAutoPlayTwo((prev) => {
      if (videoRefTwo.current) {
        if (prev) {
          videoRefTwo.current.pause();
        } else {
          videoRefTwo.current.play();
          videoRefOne.current.pause();
          videoRefThree.current.pause();
          setVideoAutoPlayThree(false);
          setVideoAutoPlayOne(false);
        }
      }
      return !prev;
    });
  };
  const handlePauseThree = () => {
    setVideoAutoPlayThree((prev) => {
      if (videoRefThree.current) {
        if (prev) {
          videoRefThree.current.pause();
        } else {
          videoRefThree.current.play();
          videoRefOne.current.pause();
          videoRefTwo.current.pause();
          setVideoAutoPlayOne(false);
          setVideoAutoPlayTwo(false);
        }
      }
      return !prev;
    });
  };

  return (
    <div className="relative w-screen h-fit py-12 sm:py-14 md:py-16 bg-white overflow-x-hidden">
      <div className="relative max-w-screen wrapper-padding sm:py-0 py-10 w-full">
        <div className="w-full grid h-fit grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 grid-flow-row">
          <div className="flex space-y-5 sm:space-y-10 sm:items-start items-center sm:justify-start justify-center flex-col col-span-1 h-fit">
            <h4
              className="font-sora font-semibold text-[#101763] text-3xl text-center sm:text-left sm:text-4xl lg:text-5xl "
              style={{ lineHeight: "1.3" }}
            >
              Our Success <br className="hidden md:block" /> Stories
            </h4>

            <div className="flex flex-col space-y-2">
              <div className="flex space-x-3 items-end">
                <Image
                  src={googlelogo}
                  width={40}
                  height={40}
                  priority
                  alt="Google logo"
                  sizes="100vw"
                  className="w-40 sm:w-48 md:w-52 object-contain"
                />
              </div>
              <div className="flex space-x-3 items-end">
                <div className="flex items-center justify-center space-x-2">
                  <Image
                    className="w-4 object-contain"
                    src={avgStars >= 1 ? ratingStarFilled : ratingStar}
                    alt="ratingStar"
                  />
                  <Image
                    className="w-4 object-contain"
                    src={avgStars >= 2 ? ratingStarFilled : ratingStar}
                    alt="ratingStar"
                  />
                  <Image
                    className="w-4 object-contain"
                    src={avgStars >= 3 ? ratingStarFilled : ratingStar}
                    alt="ratingStar"
                  />
                  <Image
                    className="w-4 object-contain"
                    src={avgStars >= 4 ? ratingStarFilled : ratingStar}
                    alt="ratingStar"
                  />
                  <Image
                    className="w-4 object-contain"
                    src={avgStars >= 5 ? ratingStarFilled : ratingStar}
                    alt="ratingStar"
                  />
                </div>
                <span className="font-sans text-xs leading-none text-[#828282]">
                  {totalNoofReviews} reviews
                  {/* {avgStars} Star Ratings */}
                </span>
              </div>
            </div>
          </div>
          {data.testimonials && (
            <>
              {data?.testimonials?.map(
                (testi, index) =>
                  index === 0 && (
                    <div key={index}>
                      {testi.video_url && (
                        <>
                          <div className="hidden sm:flex  col-span-1 items-end lg:mt-24 font-satoshi text-white h-[400px] relative   rounded-3xl">
                            <video
                              // autoPlay={false}
                              muted
                              playsInline
                              loop
                              id="video"
                              controlsList="nodownload"
                              className="w-full h-full absolute   rounded-3xl object-cover cursor-pointer"
                              onClick={() => openModal(index)}
                              ref={videoRefOne}
                            >
                              <source src={testi.video_url} type="video/mp4" />
                            </video>
                            <div className="flex z-10 flex-col  cursor-pointer ml-10 mb-12  ">
                              <Image
                                src={videoAutoPlayOne ? pause : play}
                                className="w-10 inline-block  my-2 object-contain"
                                alt="play"
                                onClick={handlePauseOne}
                              />

                              <p
                                className="text-base w-auto"
                                onClick={() => openModal(index)}
                              >
                                {testi.author_name}
                              </p>
                              <p
                                className="text-base w-auto"
                                onClick={() => openModal(index)}
                              >
                                {" "}
                                {testi.author_position}
                              </p>
                            </div>
                          </div>

                          {isModalOpen && (
                            <div
                              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[99999]"
                              onClick={closeModal}
                            >
                              <div
                                className="relative  p-4 rounded-lg"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <video
                                  autoPlay
                                  muted
                                  playsInline
                                  loop
                                  controls
                                  controlsList="nodownload"
                                  id="modal-video"
                                  className="w-[1000px] h-[600px] object-cover object-center rounded-sm"
                                >
                                  <source src={videoUrl} type="video/mp4" />
                                </video>
                                <button
                                  onClick={closeModal}
                                  className="absolute top-2 right-2 text-red-500 h-3 w-3 flex items-center justify-center bg-white font-semibold p-3  rounded-full"
                                >
                                  X
                                </button>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  )
              )}
              {sortedDataExact?.map(
                (data, index) =>
                  index === 0 && (
                    <div key={index + 1}>
                      <div className="flex relative col-span-1 mt-12 sm:-mt-14 lg:mt-10 overflow-y-visible justify-end flex-col  font-satoshi text-white h-fit sm:h-[400px] bg-[#101763]  rounded-3xl">
                        <div className="pb-8 pt-14 px-12 ">
                          <p className="text-lg sm:text-2xl leading-relaxed font-medium line-clamp-6">
                            {data.text}
                          </p>
                        </div>
                        <div className="flex flex-col pb-10  px-12">
                          <p className="text-base">{data.author_name}</p>
                          <p className="text-base">
                            <TimeAgoComponent timestamp={data.time} />
                          </p>
                        </div>
                        <Image
                          className="absolute -top-8 h-16 object-contain z-50 "
                          src={quotation}
                          alt="quotation"
                        />
                      </div>
                    </div>
                  )
              )}

              {data?.testimonials?.map(
                (testi, index) =>
                  index === 2 && (
                    <div key={index + 2}>
                      {testi.video_url && (
                        <>
                          <div className="hidden sm:flex  col-span-1 items-end  font-satoshi text-white h-[600px] lg:h-[500px] lg:-mt-44 relative   rounded-3xl">
                            <video
                              autoPlay={false}
                              // muted={videoAutoPlayTwo}
                              playsInline
                              loop
                              id="video"
                              controlsList="nodownload"
                              className="w-full h-full absolute   rounded-3xl object-cover cursor-pointer"
                              // onClick={openModal}
                              ref={videoRefTwo}
                              onClick={() => openModal(index)}
                            >
                              <source src={testi.video_url} type="video/mp4" />
                            </video>
                            <div className="flex z-10 flex-col  cursor-pointer ml-10 mb-12">
                              <Image
                                src={videoAutoPlayTwo ? pause : play}
                                className="w-10 inline-block  my-2 object-contain"
                                alt="play"
                                onClick={handlePauseTwo}
                              />
                              <p
                                className="text-base w-auto"
                                onClick={() => openModal(index)}
                              >
                                {testi.author_name}
                              </p>
                              <p
                                className="text-base w-auto"
                                onClick={() => openModal(index)}
                              >
                                {" "}
                                {testi.author_position}
                              </p>
                            </div>
                          </div>
                          {isModalOpen && (
                            <div
                              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[99999]"
                              onClick={closeModal}
                            >
                              <div
                                className="relative  p-4 rounded-lg"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <video
                                  autoPlay
                                  muted
                                  playsInline
                                  loop
                                  controls
                                  controlsList="nodownload"
                                  id="modal-video"
                                  className="w-[1000px] h-[600px] object-cover object-center rounded-sm"
                                >
                                  <source src={videoUrl} type="video/mp4" />
                                </video>
                                <button
                                  onClick={closeModal}
                                  className="absolute top-2 right-2 text-red-500 h-3 w-3 flex items-center justify-center bg-white font-semibold p-3  rounded-full"
                                >
                                  X
                                </button>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  )
              )}
              {sortedDataExact?.map(
                (data, index) =>
                  index === 1 && (
                    <div key={index + 4}>
                      <div className="flex relative col-span-1 mt-8 sm:-mt-44 lg:mt-14 overflow-y-visible justify-end flex-col  font-satoshi text-black h-fit sm:h-[400px] border border-black   rounded-3xl">
                        <div className="pb-8 pt-14 px-12 text-[#101763] ">
                          <p className="text-lg sm:text-2xl leading-relaxed font-medium line-clamp-6">
                            {data.text}
                          </p>
                        </div>
                        <div className="flex flex-col pb-10  px-12">
                          <p className="text-base">{data.author_name}</p>
                          <p className="text-base">
                            <TimeAgoComponent timestamp={data.time} />
                          </p>
                        </div>
                        <Image
                          className="absolute -top-8 h-16 object-contain z-50 "
                          src={quotation}
                          alt="quotation"
                        />
                      </div>
                    </div>
                  )
              )}
              {data?.testimonials?.map(
                (testi, index) =>
                  index === 1 && (
                    <div key={index + 5}>
                      {testi.video_url && (
                        <>
                          <div className="hidden lg:flex  col-span-1 items-end  -mt-10 font-satoshi text-white h-[500px] relative   rounded-3xl">
                            <video
                              autoPlay={false}
                              // muted
                              playsInline
                              loop
                              id="video"
                              controlsList="nodownload"
                              className="w-full h-full  absolute   rounded-3xl  cursor-pointer object-cover overflow-hidden"
                              onClick={() => openModal(index)}
                              ref={videoRefThree}
                            >
                              <source src={testi.video_url} type="video/mp4" />
                            </video>
                            <div className="flex z-10 flex-col  cursor-pointer ml-10 mb-12">
                              <Image
                                src={videoAutoPlayThree ? pause : play}
                                className="w-10 inline-block  my-2 object-contain"
                                alt="play"
                                onClick={handlePauseThree}
                              />
                              <p
                                className="text-base w-auto"
                                onClick={() => openModal(index)}
                              >
                                {testi.author_name}
                              </p>
                              <p
                                className="text-base w-auto"
                                onClick={() => openModal(index)}
                              >
                                {" "}
                                {testi.author_position}
                              </p>
                            </div>
                          </div>
                          {isModalOpen && (
                            <div
                              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[99999]"
                              onClick={closeModal}
                            >
                              <div
                                className="relative  p-4 rounded-lg"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <video
                                  // autoPlay={videoAutoPlayThree}
                                  playsInline
                                  loop
                                  controls
                                  controlsList="nodownload"
                                  id="modal-video"
                                  className="w-[1000px] h-[600px] object-cover object-center rounded-sm"
                                >
                                  <source src={videoUrl} type="video/mp4" />
                                </video>
                                <button
                                  onClick={closeModal}
                                  className="absolute top-2 right-2 text-red-500 h-3 w-3 flex items-center justify-center bg-white font-semibold p-3  rounded-full"
                                >
                                  X
                                </button>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  )
              )}
            </>
          )}
        </div>
      </div>
      <Link
        href={
          "https://www.google.com/maps/place/Cheval+-+Website+Design+%7C+App+Development+Agency+Dubai+UAE/@25.1780034,55.2738369,17z/data=!4m8!3m7!1s0x3e5f699813fd9451:0xc4b554ceb43cff51!8m2!3d25.1780034!4d55.2738369!9m1!1b1!16s%2Fg%2F11txt0bwbq?entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D"
        }
        target="_blank"
        className="animated-button mt-5  flex items-center font-satoshi justify-center text-lg 25px md:mt-[30px] lg:mt-[35px] font-medium mx-auto text-[#101763] border rounded-sm border-[#101763]   w-[201px] h-[61px] transition-all duration-300 overflow-hidden relative"
      >
        <span className="absolute w-full h-full flex items-center justify-center">
          View All Reviews
        </span>
      </Link>
    </div>
  );
}

export default GoogleReviews;
