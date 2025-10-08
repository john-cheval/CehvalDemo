import { disableImageOptimization } from "@/util/constants";
import Image from "next/image";
import React from "react";

const SeoOurSerivcesSection = ({ section }) => {
  return (
    <div className="w-full h-fit wrapper-padding">
      <div className="w-full grid grid-cols-1 md:grid-cols-2- lg:grid-cols-12 grid-flow-row gap-y-4  lg:gap-x-4">
        {section?.title && (
          <div className="flex space-y-5 lg:items-start pr-2 items-center md:col-span-4 sm:justify-start justify-center  flex-col col-span-1 h-fit">
            <p
              style={{
                background:
                  "linear-gradient(92deg, #FF0C15 0.33%, #000 26.13%)",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="font-sora text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left font-semibold !leading-[136.5%]"
            >
              {section?.title}
            </p>
            <div className="my-3- lg:ml-1 w-full max-w-40 h-[1px] bg-black mx-auto"></div>
            {section?.description && (
              <div
                className="text-[#27172f] font-satoshi text-sm md:text-base !leading-[173.85%] mt-3 text-center lg:text-left"
                dangerouslySetInnerHTML={{ __html: section?.description }}
              ></div>
            )}
          </div>
        )}
        <div className="col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {section?.sub_sections?.map((item, index) => (
            <div className="flex flex-col  w-full h-full" key={index + 1}>
              <div className="flex">
                <Image
                  src={item?.image?.url}
                  height={400}
                  width={600}
                  unoptimized={disableImageOptimization}
                  sizes="100vw"
                  alt={item?.title}
                  className="w-full h-60- h-auto object-cover- object-center- mb-2-"
                />
              </div>
              <div className="flex w-full bg-white flex-col py-8 space-y-4 px-10 h-full">
                <h3 className="font-sora font-semibold text-[#101763] text-xl sm:text-2xl lg:text-3xl  text-center md:text-left">
                  {item?.title}
                </h3>
                <div
                  className="font-satoshi w-full paragraphText-Size text-[#101763] text-center md:text-left"
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeoOurSerivcesSection;
