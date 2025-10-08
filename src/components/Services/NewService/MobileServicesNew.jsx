"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { disableImageOptimization } from "@/util/constants";

const MobileServicesNew = ({ serviceList }) => {
  const initialActiveService = serviceList?.find(
    (servic) => servic.name.toLowerCase() === "craft"
  );
  const searchParams = useSearchParams();
  const [active, setActive] = useState(initialActiveService?.name);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const craftRef = useRef(null);
  const codeRef = useRef(null);
  const convertRef = useRef(null);
  const navHeight = 80;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const section = searchParams.get("section");
    if (section) {
      const sectionRefs = {
        craft: craftRef,
        code: codeRef,
        convert: convertRef,
      };

      const targetRef = sectionRefs[section.toLowerCase()];
      if (targetRef?.current) {
        setTimeout(() => {
          // targetRef.current.scrollIntoView({
          //   behavior: "smooth",
          // });
          const el = document.getElementById(targetRef?.current.id);
          const y = el.getBoundingClientRect().top - 100;
          window.scrollBy({
            top: y,
            left: 0,
            behavior: "smooth",
          });
          setActive(section.toLowerCase());
        }, 500);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id.replace("Section", "").toLowerCase());
          }
        });
      },
      { threshold: 0.3 }
    );

    if (craftRef.current) observer.observe(craftRef.current);
    if (codeRef.current) observer.observe(codeRef.current);
    if (convertRef.current) observer.observe(convertRef.current);

    return () => observer.disconnect();
  }, []);
  const refMap = {
    craft: craftRef,
    code: codeRef,
    convert: convertRef,
  };
  const services = serviceList?.map((serv) => {
    const key = serv?.name?.toLowerCase();
    return {
      id: key + "Section",
      data: serv?.services,
      banner: serv?.banner_image,
      ref: refMap[key] || null,
    };
  });

  return (
    <div className="pb-12">
      <div
        className={`bg-white py-8 wrapper-padding sticky transition-all duration-300`}
        style={{
          top: isNavVisible ? `${navHeight - 4}px` : "0px",
        }}
      >
        <div className="flex justify-between">
          {["craft", "code", "convert"]?.map((section) => (
            <Link
              key={section}
              href={`/services?section=${section}`}
              onClick={(e) => {
                e.preventDefault();
                setActive(section);

                const targetRef = {
                  craft: craftRef,
                  code: codeRef,
                  convert: convertRef,
                }[section];

                if (targetRef?.current) {
                  const yOffset = -120;
                  const y =
                    targetRef.current.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;

                  window.scrollTo({ top: y, behavior: "smooth" });

                  setTimeout(() => {
                    setActive(section);
                  }, 600);
                }
              }}
              className={`font-sora text-2xl sm:text-3xl font-semibold leading-[139%] ${
                active === section
                  ? "service-Heading-Gradient"
                  : "text-[#c8c8c8]"
              } w-fit tracking-t[-1px]`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span
                className={`block w-[29px] h-[1px]  ${
                  active === section
                    ? "bg-gradient-to-r from-[#D81100] to-[#101763]"
                    : "hidden"
                }`}
              ></span>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-7 wrapper-padding">
        {services?.map(({ id, ref, data, banner }) => {
          return (
            <div key={id} id={id} ref={ref}>
              <div className="w-full h-auto border border-b-red-500/0.7 pb-8 border-r-0 border-l-0 border-t-0">
                {banner && (
                  <Image
                    className="h-full w-full "
                    src={banner || "/image-1"}
                    alt={id}
                    height={400}
                    width={600}
                    sizes="100vw"
                    // unoptimized={disableImageOptimization}
                  />
                )}
              </div>
              <div>
                {Object.values(data)?.length > 0 &&
                  Object.values(data)?.map((item, index) => {
                    return (
                      <Link
                        href={`/service/${item?.post_name}` || "/services"}
                        key={index}
                        className="flex flex-col space-y-5 border border-t-0 border-l-0 border-r-0 border-b-[#d9d9d9] py-8"
                      >
                        <div className="h-auto w-full">
                          {item?.list_page_image && (
                            <Image
                              className="h-full w-full object-contain rounded-[10px] overflow-hidden "
                              src={item?.list_page_image || "/image-1"}
                              alt={item?.post_title}
                              width={200}
                              height={200}
                              sizes="100vw"
                              // unoptimized={disableImageOptimization}
                            />
                          )}
                        </div>

                        <div className="space-y-2 xl:space-y-3">
                          <h3 className="font-sora w-fit service-Heading-Gradient text-2xl font-semibold leading-[121%] capitalize">
                            {item?.post_title}
                          </h3>
                          {Object.values(item?.service_list_pages || {})
                            ?.length > 0 ? (
                            <div className="text-sm sm:text-base font-satoshi font-normal inline-block">
                              {Object?.values(item?.service_list_pages)?.map(
                                (servic, idx) => (
                                  <span
                                    key={idx}
                                    className="text-[#101763] leading-[182%]"
                                  >
                                    <Link
                                      href={
                                        `/service/${item?.post_name}/${servic?.post_name} ` ||
                                        "services"
                                      }
                                    >
                                      {servic?.post_title}
                                    </Link>
                                    {idx !==
                                      Object?.values(item?.service_list_pages) -
                                        1 && (
                                      <span className="text-[#d81100] mx-1">
                                        |
                                      </span>
                                    )}
                                  </span>
                                )
                              )}
                            </div>
                          ) : (
                            <div className="text-sm sm:text-base font-satoshi font-normal inline-block">
                              {item?.list_page_services?.map((servic, idy) => (
                                <span
                                  key={idy}
                                  className="text-[#101763] leading-[182%]"
                                >
                                  <Link
                                    href={
                                      `/service/${item?.post_name}` ||
                                      "services"
                                    }
                                  >
                                    {servic}
                                  </Link>
                                  {idy !==
                                    item?.list_page_services?.length - 1 && (
                                    <span className="text-[#d81100] mx-1">
                                      |
                                    </span>
                                  )}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileServicesNew;
