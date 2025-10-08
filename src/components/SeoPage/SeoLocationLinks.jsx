import { disableImageOptimization } from "@/util/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SeoLocationLinks = ({ section }) => {
  return (
    <div className="w-full h-fit wrapper-padding">
      <div className="relative max-w-screen wrapper-padding- sm:py-0 py-10 w-full">
        <div className="grid grid-cols-3 gap-5 w-full h-fit">
          <div className=" col-span-3 xl:col-span-1 lg:pr-[20%]">
            <h4
              style={{
                background:
                  "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",

                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
              className="font-sora font-semibold col-span-3 lg:col-span-1 text-[#101763] text-2xl sm:text-3xl  leading-normal text-center lg:text-start "
            >
              {section?.title}
            </h4>
            <div className="my-5 lg:ml-1 w-full max-w-32 h-[1px] bg-black mx-auto "></div>
          </div>
          <div className=" col-span-3 xl:col-span-2 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2.5 grid-flow-row h-fit">
            {section?.sub_sections?.map((serv, index) => (
              <Link
                key={index}
                href={serv?.link}
                className="col-span-1 flex flex-col items-center md:items-start justify-between-- space-y-2 md:space-y-4 bg-[#F8F8F8] w-full h-[20vw]-- py-5 md:py-7 lg:py-10 px-10"
              >
                <Image
                  src={serv?.image?.url}
                  className="w-11  md:w-20 mt-3-- object-contain h-fit"
                  // sizes="100vw"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  height={300}
                  width={400}
                  alt={index}
                  // unoptimized={disableImageOptimization}
                />
                <h5
                  style={{
                    background:
                      "linear-gradient(92.09deg, #FF0C15 0.33%, #101763 26.13%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                  className="font-sora font-semibold text-[#101763] text-base md:text-lg lg:text-xl leading-tight text-center md:text-left "
                >
                  {serv?.title}
                </h5>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoLocationLinks;
