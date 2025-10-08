/** @format */
import Image from "next/image";
import React from "react";
import ScreenShotList from "../Branding/ScreenShotList";
import SectionList from "../Branding/SectionList";
import BrandHeaderNew from "../Branding/BrandHeaderNew";
import { disableImageOptimization } from "@/util/constants";

function WorkInnerSection1({ data }) {
  const isVideo = (url) => url?.endsWith(".mp4");
  return (
    <div className="relative w-screen h-fit bg-[#ececec]-- overflow-x-hidden">
      <div className="w-full space-y-7-- md:space-y-10-- flex-- items-center-- pt-24 md:pt-[7rem] sm:pt-28 pb-6 md:pb-10 xl:pb-16  h-fit flex-col--   wrapper-padding">
        {data?.banner_image && isVideo(data?.banner_image) ? (
          <video
            autoPlay
            muted
            playsInline
            loop
            id="video"
            className="rounded-[1rem] col-span-1 md:col-span-2 w-full h-full object-cover "
          >
            <source src={data?.banner_image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={data?.banner_image}
            width={1200}
            height={400}
            sizes="100vw"
            className="rounded-[1rem]  bg-transparent w-full h-auto h-[80%]-- object-contain-- max-h-[622px]-- xl:h-auto--"
            alt={data?.post_title || "WorkImage"}
            // unoptimized={disableImageOptimization}
          />
        )}

        <BrandHeaderNew data={data} />

        {data?.section_list && (
          <SectionList data={data?.section_list} ID={data?.ID} />
        )}

        {data && (
          <ScreenShotList
            data1={data?.screenshot_list}
            data2={data?.section_list}
            // data={screenshot_list}
            // data2={section_list}
            ID={data?.ID}
          />
        )}
      </div>
    </div>
  );
}

export default WorkInnerSection1;
