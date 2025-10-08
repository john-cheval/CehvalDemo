"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import IconButton from "@/components/Buttons/IconButton";
import MobileServicesNew from "./MobileServicesNew";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { disableImageOptimization } from "@/util/constants";

gsap.registerPlugin(ScrollTrigger);

const ServiceListNew = ({ services }) => {
  const sectionsRef = useRef([]);
  const router = useSearchParams();

  useEffect(() => {
    const sections = sectionsRef.current;
    let offsets = [];

    sections.forEach((section, index) => {
      const heading = section.querySelector(".left h2");

      offsets[index] =
        index === 0 ? -100 : offsets[index - 1] + heading.offsetHeight + 20;
      // offsets[index] =
      //   index === 0 ? 0 : offsets[index - 1] + heading.offsetHeight + 20;

      const trigger = ScrollTrigger.create({
        trigger: section,
        // start: `top center${offsets[index]}` || "top center",
        // start: "top center",
        start: `top+=150px center`,
        endTrigger: ".serviceContainer",
        end: "bottom center",
        pin: heading,
        pinSpacing: false,
        // markers: true,
        scrub: 1.6,

        onEnter: () => {
          gsap.to(heading, {
            y: offsets[index],
            duration: 1.6,
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(heading, {
            y: offsets[index + 1] || 0,
            duration: 1.6,
            ease: "power2.out",
          });
        },
        onEnterBack: () => {
          gsap.to(heading, {
            y: offsets[index],
            duration: 1.6,
            ease: "power2.out",
          });
        },

        onUpdate: (self) => {
          if (self.progress === 1) {
            gsap.to(heading, {
              y: offsets[index],
              duration: 0.6,
            });
          }
        },
      });

      return () => {
        trigger.kill();
      };
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (router.get("section")) {
      const sectionIndex = ["Craft", "Code", "Convert"].indexOf(
        router.get("section").charAt(0).toUpperCase() +
          router.get("section").slice(1)
      );

      if (sectionIndex !== -1 && sectionsRef.current[sectionIndex]) {
        setTimeout(() => {
          sectionsRef.current[sectionIndex].scrollIntoView({
            behavior: "smooth",
          });
        }, 500);
      }
    }
  }, [router]);

  const serviceList = services?.map((serv) => ({
    title: serv?.name,
    data: serv?.services,
    banner: serv?.banner_image,
  }));

  return (
    <>
      <div className="wrapper-padding md:pt-10 serviceContainer">
        <div className="serviceContainer hidden md:block">
          {serviceList?.map((section, index) => (
            <div
              key={index}
              id={section.title.toLowerCase()}
              ref={(el) => (sectionsRef.current[index] = el)}
              className={`services grid grid-cols-12 ${index === 1 ? "my-20 lg:my-28 xl:my-40" : ""} ${index === 2 ? "pb-20 xl:pb-28" : ""} `}
            >
              <div className="left col-span-3">
                <h2
                  onClick={() => {
                    document
                      .getElementById(section.title.toLowerCase())
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="font-sora text-2xl lg:text-4xl xl:text-5xl service-Heading-Gradient font-bold w-fit cursor-pointer"
                >
                  {section?.title}
                </h2>
              </div>
              <div className="right col-span-9">
                <div className="rightSectionContent">
                  <div className="sectionContainer">
                    <div className="w-full h-auto border border-b-[#d9d9d9]/0.7 pb-8 border-r-0 border-l-0 border-t-0">
                      {section?.banner && (
                        <Image
                          className="h-full w-full"
                          src={section?.banner || "/image-1"}
                          alt={`${section?.title} Banner`}
                          height={300}
                          width={1000}
                          sizes="100vw"
                          unoptimized={disableImageOptimization}
                        />
                      )}
                    </div>
                    <div>
                      {Object.values(section.data)?.map((data, idx) => {
                        return (
                          <Link
                            href={`/service/${data?.post_name}` || "/"}
                            key={idx}
                            className="flex group items-center justify-between border border-t-0 border-l-0 border-r-0 border-b-[#d9d9d9] py-8"
                          >
                            <div className="flex space-x-4 xl:gap-x-8 items-center">
                              <div className="h-auto w-[230px] lg:w-[269px]">
                                {data?.list_page_image && (
                                  <Image
                                    className="h-full w-full object-contain"
                                    src={data?.list_page_image || "/image-1"}
                                    alt={data?.post_title}
                                    height={300}
                                    width={1000}
                                    sizes="100vw"
                                    unoptimized={disableImageOptimization}
                                  />
                                )}
                              </div>
                              <div className="space-y-2 xl:space-y-3">
                                <h3 className="relative font-sora w-fit service-Heading-Gradient text-lg lg:text-2xl xl:text-4xl font-semibold leading-[121%] capitalize ">
                                  {data?.post_title}
                                  <span className="absolute left-0 -bottom-1 w-3/4 h-[2px] bg-[#d81100] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                                </h3>

                                {Object.values(data?.service_list_pages || {})
                                  ?.length > 0 ? (
                                  <div className="text-xs xl:text-base font-satoshi font-normal flex flex-wrap gap-x-1 max-w-[300px] lg:max-w-[450px] xl:max-w-[600px]">
                                    {Object?.values(
                                      data?.service_list_pages
                                    )?.map((servic, idy) => (
                                      <span
                                        key={idy}
                                        className="text-[#101763] leading-[182%]"
                                      >
                                        <Link
                                          href={
                                            `/service/${data?.post_name}/${servic?.post_name}` ||
                                            "/services"
                                          }
                                        >
                                          {servic?.post_title}
                                        </Link>
                                        {idy !==
                                          Object?.values(
                                            data?.service_list_pages
                                          ).length -
                                            1 && (
                                          <span className="text-[#d81100] mx-1">
                                            |
                                          </span>
                                        )}
                                      </span>
                                    ))}
                                  </div>
                                ) : (
                                  <div className="text-xs xl:text-base font-satoshi font-normal flex flex-wrap gap-x-1 max-w-[300px] lg:max-w-[450px] xl:max-w-[600px]">
                                    {data?.list_page_services?.map(
                                      (servic, idy) => (
                                        <span
                                          key={idy}
                                          className="text-[#101763] leading-[182%]"
                                        >
                                          <Link
                                            href={
                                              `/service/${data?.post_name} ` ||
                                              "/services"
                                            }
                                          >
                                            {servic}
                                          </Link>
                                          {idy !==
                                            data?.list_page_services?.length -
                                              1 && (
                                            <span className="text-[#d81100] mx-1">
                                              |
                                            </span>
                                          )}
                                        </span>
                                      )
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                            <IconButton link={`/service/${data?.post_name}`} />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Services */}
      <div className="md:hidden">
        <MobileServicesNew serviceList={services} />
      </div>
    </>
  );
};

export default ServiceListNew;
