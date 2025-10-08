/** @format */

import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { ArrowRight, ArrowUpRight } from "lucide-react";
import WeServeLoc from "./WeServeLoc";
import Process from "./Process";
import Section3 from "./Section3";
import Benifits from "./Benifits";
import SeoSectionOne from "../SeoPage/SeoSectionOne";
import SeoSectionTwo from "../SeoPage/SeoSectionTwo";
import SeoSectionSeven from "../SeoPage/SeoSectionSeven";
import SeoSectionEight from "../SeoPage/SeoSectionEight";
// import SeoSectionTechStack from "../SeoPage/SeoSectionTechStack";
import SeoSectionThree from "../SeoPage/SeoSectionThree";
import SeoSectionFour from "../SeoPage/SeoSectionFour";
import SeoBannerSection from "../SeoPage/SeoBannerSection";
import SeoTopTitleSection from "../SeoPage/SeoTopTitleSection";
import SeoOurSerivcesSection from "../SeoPage/SeoOurSerivcesSection";
import SectionBgLeftImage from "./SectionBgLeftImage";
import SeoSectionChoose from "../SeoPage/SeoSectionChoose";
import LocationServicesLoc from "./ServicesLoc";
import SeoLocationLinks from "../SeoPage/SeoLocationLinks";
import { disableImageOptimization } from "@/util/constants";
import SeoTwoBgSection from "../SeoPage/SeoTwoBgSection";

function Section1({ data }) {
  const expHead = data?.our_services_heading ?? "";
  const [firsExptWord, ...restExpWords] = expHead.split(" ");
  const restExpText = restExpWords.join(" ");

  return (
    <>
      <div className="relative w-screen h-fit  space-y-8 pt-24 sm:pt-28 md:pt-36 pb-20  sm:space-y-12 md:space-y-16 flex items-center flex-col bg-[#F6F6F4] overflow-x-hidden">
        {data?.post_title && <SeoTopTitleSection title={data?.post_title} />}

        <SeoBannerSection
          left={data?.left_banner}
          right={data?.right_banner}
          title={data?.post_title}
        />

        {data?.location_description && (
          <div className="w-full  h-fit  wrapper-padding">
            <div
              className="font-satoshi max-w-[820px]  text-[#101763] paragraphText-Size text-center md:text-left"
              dangerouslySetInnerHTML={{ __html: data?.location_description }}
            />
          </div>
        )}

        {data?.our_services_list && (
          <div className="w-full h-fit wrapper-padding">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4">
              <div className="flex space-y-5 sm:space-y-10 sm:items-start pr-2 items-center sm:justify-start justify-center  flex-col col-span-1 h-fit">
                <h2
                  style={{}}
                  className="font-sora font-semibold text-[#101763] text-3xl text-center md:text-start md:text-4xl  leading-normal "
                >
                  <span
                    style={{
                      background:
                        "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      color: "transparent",
                    }}
                  >
                    {firsExptWord}
                  </span>{" "}
                  {restExpText}
                </h2>
                <div className="my-3 ml-1 w-full max-w-40 h-[1px] bg-black"></div>
              </div>

              {data?.our_services_list?.map((item, index) => (
                <div className="flex flex-col  w-full h-full" key={index + 1}>
                  <Image
                    src={item?.image?.url}
                    height={0}
                    width={0}
                    sizes="100vw"
                    alt={item?.title}
                    unoptimized={disableImageOptimization}
                    className="w-full h-60 object-cover object-center"
                  />
                  <div className="flex w-full bg-white flex-col py-8 space-y-4 px-10 h-full">
                    <h2 className="font-sora font-semibold text-[#101763] text-xl sm:text-2xl md:text-3xl ">
                      {item?.title}
                    </h2>
                    <div
                      className="font-satoshi w-full paragraphText-Size text-[#101763]"
                      dangerouslySetInnerHTML={{ __html: item?.description }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {data?.what_sets_us_apart_list && (
          <Section3
            heading={data?.what_sets_us_apart_heading}
            list={data?.what_sets_us_apart_list}
          />
        )}

        {data?.benefits_of_hiring_heading && (
          <div className="w-full wrapper-padding">
            <Benifits
              heading={data?.benefits_of_hiring_heading}
              description={data?.benefits_of_hiring_description}
              link={data?.benefits_of_hiring_link}
              banner={data?.benefits_of_hiring_banner}
            />
          </div>
        )}
      </div>

      {data?.section_for_seo && (
        <div className="pb-12 sm:pb-14 md:pb-16 space-y-12 bg-white--">
          {data?.section_for_seo?.map((section, index) => {
            switch (section.section_type) {
              case "fullhandheadingwithgraybg":
                return <SeoSectionEight key={index} section={section} />;

              case "lefthandheadingwithdescriptionhappyclients":
                return <SeoSectionOne key={index} section={section} />;

              case "alternativeheadingwithdescription":
                return <SeoSectionSeven key={index} section={section} />;

              case "lefthandheadingwithdescription":
                return <SeoSectionThree key={index} section={section} />;

              case "lefthandheadingwithbluebg":
                return <SeoSectionFour key={index} section={section} />;

              case "listwithimages":
                return <SeoOurSerivcesSection key={index} section={section} />;

              case "listwithoutimages":
                return <SeoSectionTwo key={index} section={section} />;

              case "listwithnumbers":
                return <Process key={index} section={section} />;

              case "listwithiconimages":
                return <SeoSectionChoose key={index} section={section} />;

              case "listpagelinks":
                return <SeoLocationLinks key={index} section={section} />;

              case "listwithtwobgimages":
                return <SeoTwoBgSection key={index} section={section} />;

              case "industriesweserve":
                return (
                  <div key={index} className="w-full wrapper-padding">
                    <div className="w-full grid grid-cols-3 gap-4 grid-flow-row h-fit">
                      <h4
                        style={{}}
                        className="font-sora col-span-3 lg:col-span-1 font-semibold lg:pr-5 text-[#101763] text-2xl sm:text-3xl lg:text-4xl  leading-tight text-center lg:text-left "
                      >
                        {section?.title}
                      </h4>
                      <WeServeLoc serveList={section?.sub_sections} />
                    </div>
                  </div>
                );

              case "leftimagewithrightdesc":
                return (
                  <div
                    key={index}
                    className="w-full wrapper-padding flex flex-col gap-y-10 "
                  >
                    <h4 className="font-sora font-semibold text-[#101763] text-2xl sm:text-3xl text-center lg:text-left lg:text-4xl w-full lg:max-w-4xl leading-normal ">
                      {section?.title}
                    </h4>
                    <div className="flex flex-col gap-8 ">
                      {section?.sub_sections?.map((item, index) => (
                        <div
                          className="grid-cols-10 w-full grid grid-flow-row space-y-4 lg:space-y-0"
                          key={index + 1}
                        >
                          <Image
                            src={item?.image?.url}
                            height={0}
                            width={0}
                            sizes="100vw"
                            alt={item?.title}
                            unoptimized={disableImageOptimization}
                            className="h-[358px] w-full col-span-10 lg:col-span-6 object-cover object-center"
                          />
                          <div className="flex flex-col col-span-10 lg:col-span-4 justify-center text-[#27172F] h-full space-y-2 lg:pl-7">
                            <p className="font-sora font-semibold text-xl  sm:text-3xl text-center md:text-left">
                              {item?.title}
                            </p>
                            <div
                              className="font-satoshi w-full paragraphText-Size text-center md:text-left "
                              dangerouslySetInnerHTML={{
                                __html: item?.description,
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );

              case "leftimagewithrightdescbg":
                return <SectionBgLeftImage key={index} section={section} />;

              case "contactusbg":
                return (
                  <div
                    className="w-full h-full py-14 lg:h-[50vh] lg:py-0 relative flex items-center justify-center"
                    key={index}
                  >
                    <Image
                      src={section?.sub_sections[0]?.image?.url}
                      width={0}
                      height={0}
                      sizes="100vw"
                      unoptimized={disableImageOptimization}
                      alt={section?.sub_sections[0]?.title || "image"}
                      className="object-cover- w-[60%] absolute top-0 left-0 h-full object-left hidden lg:block"
                    />
                    <div className="absolute right-0 top-0 h-full w-full lg:w-[70%] bg-gradient-to-r from-transparent to-black to-0% lg:to-40% z-20"></div>
                    <div className="absolute -right-32 top-1/2 -translate-y-1/2 z-20 blur-[120px] rounded-full w-64 h-64 bg-[#FF0C15] hidden md:block"></div>

                    <div className="flex flex-col justify-center items-center lg:items-center space-y-5 text-white lg:absolute z-20 left-1/2- w-full lg:w-[50%]-  pr-5 sm:pr-10 md:pr-12 h-full wrapper-padding">
                      {section?.sub_sections[0]?.title && (
                        <h4
                          className="font-sora font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl- w-full lg:w-[80%]  leading-tight text-center "
                          style={{
                            background:
                              "linear-gradient(93deg, #FF0C15 0.34%, #FFF 14.22%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {" "}
                          {section?.sub_sections[0]?.title}
                        </h4>
                      )}

                      <div
                        className="font-satoshi w-full paragraphText-Size text-center lg:text-left"
                        dangerouslySetInnerHTML={{
                          __html: section?.sub_sections[0]?.description,
                        }}
                      ></div>

                      <Link
                        href={section?.sub_sections[0]?.link}
                        className="py-4 px-7 bg-sec text-white font-base rounded-full"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
      )}
    </>
  );
}

export default Section1;
