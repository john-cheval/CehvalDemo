"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import useMediaQuery from "@/util/useMediaQuery";
import chevalImage from "../../../../public/Work/cheval.png";
import { disableImageOptimization } from "@/util/constants";
const WorkBody = ({ data, categories }) => {
  const scrollRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 639px)");
  const [visibleCount, setVisibleCount] = useState(10);
  const loadMoreRef = useRef(null);
  const [filterData, setFilterData] = useState([]);
  const [workFilter, setWorkFilter] = useState("Explore All");
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  // useEffect(() => {
  //   if (pathname === "/projects/") {
  //     setWorkFilter("Explore All");
  //   } else {
  //     const category = pathname.split("/")[2];
  //     setWorkFilter(category);
  //   }
  // }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          requestAnimationFrame(() => loadMore());
        }
      },
      { rootMargin: "200px", threshold: 0.25 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const dataArray = Object.values(data);

    if (workFilter === "Explore All") {
      setFilterData(dataArray);
    } else {
      const filteredData = dataArray.filter((item) =>
        item?.projects_category?.some(
          // (category) => category?.slug === workFilter
          (category) => category?.name === workFilter
        )
      );
      setFilterData(filteredData);
    }
  }, [workFilter, data]);

  // const handleCategoryClick = (category) => {
  //   if (category === "Explore All") {
  //     router.push("/projects", undefined, { shallow: true });
  //   } else {
  //     router.push(`/projects_category/${category}`, undefined, {
  //       shallow: true,
  //     });
  //   }
  // };
  return (
    <div className="relative w-screen h-fit bg-[#F6F6F4] ">
      <div className="w-full wrapper-padding flex flex-col lg:flex-row gap-x-10  lg:gap-x-16-- xl:gap-x-20 pt-6  md:pt-14 h-fit  ">
        <div
          className="flex flex-row lg:hidden whitespace-nowrap h-fit w-full overflow-x-auto  space-x-8 sm:space-x-10 lg:space-x-0  items-start sm:items-end justify-start scrollbar-hide"
          ref={scrollRef}
        >
          <div
            onClick={() => {
              if (workFilter !== "Explore All") {
                setWorkFilter("Explore All");
              }
            }}
            // onClick={() => handleCategoryClick("Explore All")}
            className="group duration-300 transition-all cursor-pointer"
          >
            <div
              className={`h-[60px] w-[60px]  rounded-full ${workFilter === "Explore All" ? "border-[1px] border-[#d81100] p-[2px]" : ""}`}
            >
              <Image
                src={chevalImage}
                alt="Explore All"
                width={60}
                height={60}
                sizes="100vw"
                className="h-full w-full rounded-full object-cover"
                // unoptimized={disableImageOptimization}
              />
            </div>
            <p
              className={`text-center text-[12px] font-satoshi leading-[154%]  mt-2 group-hover:text-[#d81100] duration-300 transition-all ${workFilter === "Explore All" ? "text-[#d81100]" : "text-[#101763]"}`}
            >
              All
            </p>
          </div>

          {/* Categories */}
          {categories?.map((work, index) => (
            <div
              key={index}
              onClick={() => {
                setWorkFilter(work.name);
              }}
              // onClick={() => handleCategoryClick(work.slug)}
              className="group duration-300 transition-all cursor-pointer"
            >
              <div
                className={`h-[60px] w-[60px] transition-all duration-300  rounded-full ${workFilter === /*  work?.slug */ work?.name ? "border-[1px] border-[#d81100] p-[2px]" : ""}`}
              >
                <Image
                  src={work?.icon_image}
                  alt={work.name}
                  // unoptimized={disableImageOptimization}
                  width={60}
                  height={60}
                  sizes="100vw"
                  className="h-[60px] w-[60px] rounded-full object-cover"
                />
              </div>
              <p
                className={`text-center text-[12px] font-satoshi leading-[154%]  mt-2 group-hover:text-[#d81100] duration-300 transition-all ${workFilter === /* work?.slug */ work?.name ? "text-[#d81100]" : "text-[#101763]"}`}
              >
                {work.name}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop Nav */}
        <div
          className="hidden lg:flex flex-col h-fit gap-5 items-start pb-5 sticky  overflow-visible z-50 duration-200 ease-linear transition-all"
          style={{
            top: isNavVisible ? "110px" : "0px",
          }}
        >
          <h1 className="text-[#101763] text-center font-satoshi text-base font-normal leading-[154%]">
            Our Work
          </h1>

          {/* Explore All Button */}
          <div
            onClick={() => {
              if (workFilter !== "Explore All") {
                setWorkFilter("Explore All");
              }
            }}
            // onClick={() => handleCategoryClick("Explore All")}
            className={
              workFilter === "Explore All"
                ? `h-[76px] w-[76px] relative group duration-300 transition-all cursor-pointer border-2 border-[#d81100] p-[2px] rounded-full`
                : `duration-300 relative group transition-all h-[76px] w-[76px] cursor-pointer`
            }
          >
            <Image
              src={chevalImage}
              alt="Explore All"
              width={100}
              height={100}
              sizes="100vw"
              // unoptimized={disableImageOptimization}
              className="h-full w-full rounded-full object-cover"
              priority
            />
            <div className="absolute top-[22px] -translate-y-1/2 left-[50px] w-max px-4 h-[42px] flex items-center justify-center text-center text-white font-satoshi text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-[9999] invisible group-hover:visible">
              <div className="blob font-satoshi text-base"> Explore All</div>
            </div>
          </div>

          {categories?.map((work, index) => (
            <div
              key={index}
              onClick={() => {
                setWorkFilter(work.name);
              }}
              // onClick={() => handleCategoryClick(work.slug)}
              className={
                workFilter === /* work.slug */ work.name
                  ? `relative group h-[76px] w-[76px] duration-300 transition-all cursor-pointer border-2 border-[#d81100] rounded-full p-[2px]`
                  : `relative group duration-300 transition-all h-[76px] w-[76px] cursor-pointer`
              }
            >
              <Image
                src={work?.icon_image}
                alt={work.name}
                width={200}
                height={200}
                // unoptimized={disableImageOptimization}
                sizes="100vw"
                className="h-full w-full rounded-full object-cover"
              />
              {/* Tooltip */}
              <div className="absolute top-[22px] -translate-y-1/2 left-[50px] w-max px-4 h-[42px] flex items-center justify-center text-center text-white font-satoshi text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-[9999]  invisible group-hover:visible">
                <div className="blob font-satoshi text-base"> {work.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="w-full flex z-10 pt-8  lg:pt-10-- flex-col items-center ">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-10 min-h-[800px]">
            {filterData?.slice(0, visibleCount)?.map((filterCard, index) => {
              return (
                <div
                  key={index}
                  onClick={() =>
                    router.push(`/projects/${filterCard?.post_name}`)
                  }
                  className={
                    !isMobile
                      ? index === 0
                        ? `flex w-full flex-col pb-7 border-b border-b-[#c8c8c8] md:border-b-0 cursor-pointer  group z-10`
                        : index === 1
                          ? `flex w-full flex-col  pb-7 border-b border-b-[#c8c8c8] md:border-b-0  cursor-pointer  group z-10`
                          : index % 2 !== 0
                            ? `flex w-full flex-col pb-7 border-b border-b-[#c8c8c8] md:border-b-0 cursor-pointer  group z-10`
                            : `flex flex-col w-full  pb-7 border-b border-b-[#c8c8c8] md:border-b-0 cursor-pointer  group z-10`
                      : "pb-7 border-b border-b-[#c8c8c8] md:border-b-0"
                  }
                >
                  <div className="relative overflow-x-hidden">
                    <div className="w-full relative  object-cover rounded-[2rem] object-center aspect[16/9]">
                      <Image
                        src={
                          filterCard?.list_page_image?.url ||
                          filterCard?.home_image
                        }
                        // overrideSrc="/Work/work1.png"
                        className=" object-cover object-center rounded-[2rem] w-full h-auto"
                        alt="work"
                        width={600}
                        height={337}
                        sizes="100vw"
                        loading="lazy"
                        // layout="intrinsic"
                        quality={80}
                        // formats={["image/webp"]}
                        // unoptimized={disableImageOptimization}
                      />
                    </div>

                    {filterCard?.projects_category?.length && (
                      <div className="absolute group-hover:scale-y-100 -translate-y-12 group-hover:translate-y-0 scale-y-0  transition-all duration-500  -top-2 rounded-bl-2xl -right-2  px-2 space-x-1.5 h-[50px] flex items-center bg-[#F6F6F4]">
                        {" "}
                        {!isMobile &&
                          filterCard?.projects_category?.map(
                            (category, index) =>
                              index < 2 ? (
                                <button
                                  key={index}
                                  className="font-sora scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl"
                                >
                                  {category.name}
                                </button>
                              ) : (
                                index < 3 && (
                                  <button
                                    className="font-sora scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl"
                                    key={index}
                                  >
                                    {isMobile
                                      ? `+ ${
                                          filterCard.projects_category.length -
                                          2
                                        } more`
                                      : `+ ${
                                          filterCard.projects_category.length -
                                          2
                                        } more`}
                                  </button>
                                )
                              )
                          )}
                        {isMobile &&
                          filterCard?.projects_category?.map(
                            (category, index) =>
                              index < 2 ? (
                                <button
                                  key={index}
                                  className="font-sora scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl"
                                >
                                  {category.name}
                                </button>
                              ) : (
                                index < 3 && (
                                  <button
                                    className="font-sora scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl"
                                    key={index}
                                  >
                                    {isMobile
                                      ? `+ ${
                                          filterCard.projects_category.length -
                                          2
                                        } more`
                                      : `+ ${
                                          filterCard.projects_category.length -
                                          2
                                        } more`}
                                  </button>
                                )
                              )
                          )}
                        <svg
                          id="Layer_1"
                          className="w-10 h-10 text-black fill-[#F6F6F4] absolute -left-[45.5px] top-[7.5px]  z-30 "
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0"
                          y="0"
                          viewBox="0 0 100 100"
                          xmlSpace="preserve"
                        >
                          <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
                        </svg>
                        <svg
                          id="Layer_1"
                          className="w-10 h-10  text-black fill-[#F6F6F4] absolute right-[7.5px] -bottom-[39.5px]  z-30"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0"
                          y="0"
                          viewBox="0 0 100 100"
                          xmlSpace="preserve"
                        >
                          <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
                        </svg>
                      </div>
                    )}

                    {/*  */}
                  </div>
                  <div className="flex mt-6 lg:mt-9 mb-1 sm:mb-1.5 md:mb-2 lg:mb-2.5 font-sora lg:pl-1 text-[10px] sm:text-[11px] md:text-xs lg:text-sm w-full items-center lg:space-x-2">
                    <div className="w-2 h-2 hidden lg:block   bg-[#D81100]"></div>

                    <h3 className="text-[#101763] font-sora text-xl md:text-2xl font-normal leading-[140%] w-full min-h-[28px]">
                      {filterCard?.post_title || "Loading..."}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Lazy Load Trigger */}
          <div ref={loadMoreRef} className="h-3 lg:h-10 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default WorkBody;
