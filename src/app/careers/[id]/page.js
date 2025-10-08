import React from "react";
import { fetchData } from "@/server/getHomePageData";
import CareerItem from "@/components/Career/CareersList";
import { baseUrl } from "@/util/baseUrl";
import CareerFormPage from "@/page-views/CareerPage";
import generateMetadataData from "@/util/generateMetaTitle";
import { toast } from "react-toastify";
import ShareButton from "@/components/Career/ShareButton";
import Link from "next/link";
import { isVideo } from "@/util/checkIsVideo";

export async function generateMetadata({ params }) {
  const id = (await params).id;
  return await generateMetadataData(id, `careers_details/${id}`, true);
}
async function fetchWithFallback(url) {
  try {
    return await fetchData(url);
  } catch (error) {
    console.error(`Failed to fetch data from ${url}:`, error);
    return null;
  }
}

export default async function CareerDetail({ params }) {
  const dataID = await params;

  const [data] = await Promise.all([
    fetchWithFallback(
      `${baseUrl}/wp-json/custom/v1/careers_details?slug=${dataID.id}`
    ),
  ]);

  return (
    <>
      <div className="w-full sm:pt-28 pb-6 bg-white wrapper-padding-">
        <div className="relative w-full h-[251px]  md:h-[351px]  overflow-hidden">
          {/* Background Video */}
          {isVideo(data?.top_banner?.url) ? (
            <video
              autoPlay
              muted
              playsInline
              loop
              id="video"
              className="!w-full h-full object-cover"
              poster="/comon/short.gif"
              style={{ aspectRatio: "16/9" }}
              preload="auto"
            >
              <source
                src={(data && data.banner_video) || "/career/career.mp4"}
                type="video/mp4"
              />
            </video>
          ) : (
            <img
              className="w-full h-[200px]- sm:h-[265px]- object-cover h-full"
              src={data?.top_banner?.url}
              alt="Career image-1"
            />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-8">
            {/* Heading */}
            <h1 className="font-sora text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5.3rem] tracking-tight font-extralight mb-3 md:mb-5 heading2">
              {data && data.banner_heading}
            </h1>
          </div>
        </div>
      </div>

      <section className="w-full flex flex-col lg:flex-row gap-[40px] lg:gap-[60px] wrapper-padding py-[60px] bg-white">
        {/* Left Content */}
        <div className="w-full lg:w-[50%]">
          {/* Title */}
          <h1 className="font-sora font-semibold text-[#101763] !leading-[135%] tracking-[-0.4px] max-w-[482px] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[40px] mb-[13px]">
            {data && data?.post_title}
          </h1>

          {/* Job Tags */}
          <div className="flex flex-wrap gap-3 mb-7">
            <button className="flex items-center gap-2 text-sm text-[#101763] font-satoshi rounded-md px-[13px] py-[10px] bg-[#F5F5F5]">
              <img src="/career/calendar_month.svg" />
              {data && data?.time}
            </button>
            <button className="flex items-center gap-2 text-sm text-[#101763] font-satoshi rounded-md px-[13px] py-[10px] bg-[#F5F5F5]">
              <img src="/career/location_on.svg" />
              {data && data?.location}
            </button>

            <ShareButton itemData={data} />
          </div>

          {/* Intro Paragraph */}
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3 md:mb-8 font-sora">
            {data && data.post_content}
          </p>

          {/* Requirements */}
          {Array.isArray(data?.section_list) && data.section_list[0] && (
            <div className="requirement-area">
              <h2 className="text-[#101763] font-sora font-semibold text-xl sm:text-[25px] leading-[120%] mb-4">
                {data.section_list[0].title}
              </h2>
              <div
                className="text-[#404040] text-sm sm:text-base font-sora leading-relaxed mb-6"
                dangerouslySetInnerHTML={{
                  __html: data.section_list[0].description,
                }}
              />
            </div>
          )}

          {/* Description */}
          {Array.isArray(data?.section_list) && data.section_list[1] && (
            <>
              <h2 className="text-[#101763] font-sora font-semibold text-xl sm:text-[25px] leading-[120%] mb-4">
                {data.section_list[1].title}
              </h2>
              <div
                className="text-[#404040] text-sm sm:text-base font-sora leading-relaxed mb-6 requiredList"
                dangerouslySetInnerHTML={{
                  __html: data.section_list[1].description,
                }}
              />
            </>
          )}

          {/* Back Link */}
          <Link
            href="/careers/"
            className="text-[#101763] font-medium text-sm sm:text-base leading-[154%]"
          >
            ← Back
          </Link>
        </div>

        {/* Right Content (Form) */}
        <div className="bg-white w-full lg:w-[50%] border border-[#DDDDDD] p-3 md:p-7 sticky rounded-md !top-[20px] h-fit">
          <CareerFormPage
            title={(data && data.form_heading) || "Apply to join our team"}
            isCareerInner={data?.post_title}
          />
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-10 py-10  sm:py-14 md:py-16 lg:py-20 text-center bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-sora font-semibold text-lg sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[40px]  leading-snug sm:tracking-[-1.76px] text-[#101763] mb-4 sm:mb-6 md:mb-8 lg:mb-[20px]">
            {(data && data.join_the_team_heading) || "Join the team"}
          </h2>
          <div
            className="font-sora text-[#404040] font-normal text-sm sm:text-base md:text-lg mx-auto mb-8 sm:mb-10 md:mb-12"
            dangerouslySetInnerHTML={{
              __html:
                (data && data.join_the_team_description) ||
                " We’re always looking for curious minds, builders, and problem-solvers. Explore our current openings and find the role where you can do your best work.",
            }}
          />
          <CareerItem item={(data && data.careers_list) || []} />
          {/* Job List */}
          <div className="divide-y border-b border-black">
            {Object.values((data && data.careers_list) || {}).map(
              (job, idx) => (
                <CareerItem key={job?.ID ?? idx} item={job} />
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
