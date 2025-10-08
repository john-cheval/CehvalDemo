import React from "react";

import Image from "next/image";
import { fetchData } from "@/server/getHomePageData";
import { baseUrl } from "@/util/baseUrl";
import CareerItem from "@/components/Career/CareersList";
import CareerFormPage from "@/page-views/CareerPage";
import generateMetadataData from "@/util/generateMetaTitle";
// import { isVideo } from "@/util/checkIsVideo";

export async function generateMetadata() {
  return await generateMetadataData(5422, "/careers", false);
}

async function fetchWithFallback(url) {
  try {
    return await fetchData(url);
  } catch (error) {
    console.error(`Failed to fetch data from ${url}:`, error);
    return null;
  }
}

export default async function Career() {
  const [services] = await Promise.all([
    fetchWithFallback(`${baseUrl}/wp-json/custom/v1/full_details?ID=5422`),
  ]);
  const isVideo = (videoObject) => {
    return (
      videoObject &&
      typeof videoObject === "object" &&
      videoObject.url &&
      videoObject.url.toLowerCase().endsWith(".mp4")
    );
  };

  try {
    return (
      <>
        {/* Section 1 */}
        <div
          // id="section1"
          className="relative w-screen h-[500px] sm:h-[100dvh] overflow-hidden"
        >
          <video
            autoPlay
            muted
            playsInline
            loop
            id="video"
            className="lg:w-screen w-full h-[100dvh] object-cover"
            poster="/comon/short.gif"
            width="1920"
            height="1080"
            style={{ aspectRatio: "16/9" }}
            preload="auto"
          >
            <source
              src={services?.banner_video || "/career/career.mp4"}
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-8">
            {/* <h1 className="font-sora text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5.3rem] tracking-tight font-extralight mb-3 md:mb-5 heading2">
              {services?.sub_heading}
              <br />
              {services?.sub_heading_1}
            </h1> */}

            <h1
              className="font-sora text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5.3rem] tracking-tight font-extralight mb-3 md:mb-5 heading2 leading-[1.3]"
              dangerouslySetInnerHTML={{ __html: services?.sub_heading }}
            />
            <p className="font-sora font-normal text-sm sm:text-base md:text-lg text-white max-w-md sm:max-w-xl md:max-w-2xl mb-4 sm:mb-6">
              {services?.short_description}
            </p>
            <a
              href={"#oppenings"}
              className="animated-button flex items-center justify-center font-satoshi text-sm sm:text-base md:text-lg font-medium text-white border border-white rounded-sm w-[160px] sm:w-[180px] md:w-[201px] h-[50px] sm:h-[55px] md:h-[61px] transition-all duration-300 relative overflow-hidden"
            >
              <span className="absolute w-full h-full flex items-center justify-center">
                {services?.button_label || "Current Openings"}
              </span>
            </a>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white px-4 sm:px-6 md:px-10 py-8 md:py-10 lg:py-20">
          <div className="flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8 text-center md:text-left">
            <h1 className="font-sora font-semibold text-[#101763] text-center !leading-[135%] tracking-[-0.4px] max-w-[950px]  text-2xl lg:text-3xl xl:text-[40px]">
              {services?.our_culture_heading}
            </h1>
            <div className="text-[#404040] font-sora font-normal max-w-[980px] text-center text-sm sm:text-base md:text-lg leading-relaxed space-y-3 sm:space-y-4 lg:space-y-5">
              <div
                dangerouslySetInnerHTML={{
                  __html: services?.our_culture_description,
                }}
              />
            </div>
          </div>
        </div>

        {/* Section 3 */}

        <div className="relative bg-black">
          <div className="flex flex-col lg:flex-row flex-col-reverse  items-start relative z-10">
            <div className="w-full lg:w-[56%] relative z-10 pt-6 sm:pt-0 lg:pt-8 px-4 sm:px-6 lg:pl-14  pb-6 lg:pb-0">
              {services?.why_cheval_gallery?.map((item, index) => (
                <div key={index} className="w-full mt-6 sm:mt-8">
                  <img
                    className="w-full object-cover rounded-lg"
                    src={item?.url}
                    alt={item?.alt || "why-cheval-1"}
                  />
                </div>
              ))}
            </div>
            <div className="relative flex lg:sticky !top-0 w-full lg:w-[44%] bg-black py-8 sm:py-10 lg:py-[100px] px-4 sm:px-6 lg:px-[50px] pb-[20px] !lg:pb-[200px] h-screen">
              <div className="hidden lg:block w-[260%] h-full bg-black absolute top-0 right-0"></div>
              <div className="relative z-10 flex flex-col justify-center">
                <h2 className="w-fit text-center font-sora font-semibold text-xl md:text-2xl xl:text-[40px] mb-6 sm:mb-8 lg:mb-[44px] text-white">
                  {services?.why_cheval_heading}
                </h2>
                <hr className="border-gray-300/40 mb-4 sm:mb-6 lg:mb-0" />
                <h3 className="w-fit font-sora font-normal text-base sm:text-lg md:text-xl xl:text-[30px] mt-6 sm:mt-8 lg:mt-[30px] mb-5 sm:mb-6 lg:mb-[26px] text-white">
                  {services?.why_cheval_sub_heading}
                </h3>
                <div className="font-sora text-sm sm:text-base font-normal space-y-4 sm:space-y-5 max-w-[980px]">
                  <div
                    className="text-white"
                    dangerouslySetInnerHTML={{
                      __html: services?.why_cheval_description,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="w-screen wrapper-padding pt-10 md:pt-20 bg-white">
          {/* Heading */}
          <h2 className="font-sora font-semibold text-2xl md:text-3xl lg:text-[32px] xl:text-[40px] sm:tracking-[-1.76px] leading-[121%] text-center text-[#101763] mb-6 md:mb-8 xl:mb-[60px]">
            {services?.section_career_heading}
          </h2>
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-[10px] px-0 sm:px-4 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:col-span-2 gap-4 sm:gap-6 lg:gap-[10px]">
              {/* Card 1 */}
              {services?.career_sections?.[0] && (
                <div className="border border-[#DDDDDD] rounded-xl flex sm:block gap-4 wrapper-padding py-5 shadow-sm hover:shadow-md transition">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#D81100"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 sm:w-10 h-6 sm:h-10 lg:w-15 lg:h-15 "
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold leading-[120%] text-[#101763] text-base sm:text-[22px] lg:text-[25px] mt-0 mb-2 sm:mb-3 sm:mt-4">
                      {services?.career_sections[0]?.title}
                    </h3>
                    <p className="text-[#101763] text-xs sm:text-lg leading-[135%]">
                      {services?.career_sections[0]?.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Card 2 */}
              {services?.career_sections?.[1] && (
                <div className="border border-[#DDDDDD] flex sm:block gap-4 rounded-xl wrapper-padding py-5 shadow-sm hover:shadow-md transition">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#D81100"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 sm:w-10 h-6 sm:h-10 lg:w-15 lg:h-15 "
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#101763] leading-[120%] text-base sm:text-[22px] lg:text-[25px] mt-0 mb-2 sm:mb-3 sm:mt-4">
                      {services?.career_sections?.[1]?.title}
                    </h3>
                    <p className="text-[#101763] text-xs sm:text-lg leading-[135%]">
                      {services?.career_sections?.[1]?.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Card 3 */}
              {services?.career_sections?.[3] && (
                <div className="border border-[#DDDDDD] flex sm:block gap-4 rounded-xl wrapper-padding py-5 shadow-sm hover:shadow-md transition">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#D81100"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 sm:w-10 h-6 sm:h-10 lg:w-15 lg:h-15 "
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#101763] leading-[120%] text-base sm:text-[22px] lg:text-[25px] mt-0 mb-2 sm:mb-3 sm:mt-4">
                      {services?.career_sections?.[3]?.title}
                    </h3>
                    <p className="text-[#101763] text-xs sm:text-lg leading-[135%]">
                      {services?.career_sections?.[3]?.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Card 4 */}
              {services?.career_sections?.[4] && (
                <div className="rounded-xl border border-[#DDDDDD] overflow-hidden shadow-sm hover:shadow-md transition sm:h-full h-[150px]">
                  {isVideo(services?.career_sections?.[4]?.video) ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source
                        src={services?.career_sections?.[4]?.video.url}
                        type={services?.career_sections?.[4]?.video.mime_type}
                      />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      className="w-full- h-[200px]- sm:h-[265px]- object-cover"
                      src={services?.career_sections?.[4]?.image.url}
                      alt="Career image-1"
                    />
                  )}
                </div>
              )}
            </div>

            {/* Card 5 - Image with Gradient Background */}
            {services?.career_sections?.[2] && (
              <div className="relative border border-[#DDDDDD] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition h-[300px] lg:h-full sm:col-span-2 lg:col-span-1">
                {/* Background image with gradient overlay */}
                <div
                  className="absolute bottom-0 inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0)_100%)] h-[300px] sm:h-[430px] bg-cover bg-bottom top-auto"
                  style={{
                    backgroundImage: `linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0) 100%), url(${services?.career_sections?.[2]?.image?.url || "/career/expect04.jpg"})`,
                  }}
                ></div>

                {/* Content */}
                <div className="absolute inset-0 flex gap-4 sm:flex-col flex-row justify-start p-4 sm:p-6">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#D81100"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 sm:w-10 h-6 sm:h-10 lg:w-15 lg:h-15 "
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#101763] text-base sm:text-[22px] lg:text-[25px] mt-0 mb-2 sm:mb-3 sm:mt-4">
                      {services?.career_sections?.[2]?.title}
                    </h3>
                    <p className="text-[#101763] text-xs sm:text-lg max-w-xs">
                      {services?.career_sections?.[2]?.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* Card 6 - Image */}
            {services?.career_sections?.[5] && (
              <div className="rounded-xl border border-[#DDDDDD] overflow-hidden shadow-sm hover:shadow-md transition sm:col-span-2 lg:col-span-1">
                <img
                  className="w-full h-[200px] sm:h-[265px] object-cover"
                  src={services?.career_sections?.[5]?.image.url}
                />
              </div>
            )}
            {/* Card 7 */}
            {services.career_sections[6] && (
              <div className="relative border border-[#DDDDDD] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition sm:col-span-2 lg:col-span-2 h-[160px] sm:h-[265px]">
                {isVideo(services?.career_sections?.[6]?.video) ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source
                      src={services?.career_sections?.[6]?.video.url}
                      type={
                        services?.career_sections?.[6]?.video.mime_type ||
                        "video/mp4"
                      }
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    className="w-full h-[200px]- sm:h-[265px]- object-cover h-full"
                    src={services?.career_sections?.[6]?.image.url}
                    alt="Career image-1"
                  />
                )}

                <div className="absolute inset-0 bg-[linear-gradient(99.54deg,_#FFFFFF_29.61%,_rgba(255,_255,_255,_0)_64.71%)]"></div>

                <div className="absolute inset-0 flex gap-4 sm:flex-col flex-row md:justify-center p-4 sm:p-6">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#D81100"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 sm:w-10 h-6 sm:h-10 lg:w-15 lg:h-15 "
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#101763] leading-[120%] text-base sm:text-[22px] lg:text-[25px] mt-0 mb-2 sm:mb-3 sm:mt-4">
                      {services?.career_sections?.[6]?.title}
                    </h3>
                    <p className="text-[#101763] leading-[135%] text-xs sm:text-lg max-w-xs">
                      {services?.career_sections?.[6]?.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section
          className="px-4 sm:px-6 md:px-10 py-10  sm:py-14 md:py-16 lg:py-20 text-center bg-white"
          id="oppenings"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="font-sora font-semibold text-lg sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[40px]  leading-snug sm:tracking-[-1.76px] text-[#101763] mb-4 sm:mb-6 md:mb-8 lg:mb-[20px]">
              {services?.join_the_team_heading}
            </h2>
            <div
              className="font-sora text-[#404040] font-normal text-sm sm:text-base md:text-lg mx-auto mb-8 sm:mb-10 md:mb-12"
              dangerouslySetInnerHTML={{
                __html: services?.join_the_team_description,
              }}
            />
            {/* <CareerItem item={services.careers_list} /> */}
            <div className="divide-y border-b border-black">
              {Object.values(services?.careers_list || {}).map((job, idx) => (
                <CareerItem key={job?.ID ?? idx} item={job} />
              ))}
            </div>
          </div>
        </section>
        <CareerFormPage
          title={services?.form_heading || "Apply to join our team"}
        />
      </>
    );
  } catch (error) {
    return (
      <div>Error loading page content. Please try again later.{error}</div>
    );
  }
}
