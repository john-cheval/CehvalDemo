/** @format */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { disableImageOptimization } from "@/util/constants";

function LocationServicesLoc({ service, heading }) {
  const buildHead = heading ?? "";
  const [firstBuildWord, ...restBuildWords] = buildHead.split(" ");
  const restBuildText = restBuildWords.join(" ");
  return (
    <div className="relative w-screen h-fit  py-8-- sm:pt-14 md:pt-16 bg-white overflow-x-hidden">
      <div className="relative max-w-screen wrapper-padding sm:py-0 py-10 w-full">
        <div className="grid grid-cols-3 gap-5 w-full h-fit">
          <div className=" col-span-3 xl:col-span-1 lg:pr-[20%]">
            <h4
              style={{}}
              className="font-sora font-semibold text-[#101763] text-2xl sm:text-3xl lg:text-4xl  leading-normal text-center lg:text-left"
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
                {firstBuildWord}
              </span>{" "}
              {restBuildText}
            </h4>
            <div className="my-5 lg:ml-1 w-full max-w-32 h-[1px] bg-black mx-auto "></div>
          </div>
          <div className=" col-span-3 xl:col-span-2 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2.5 grid-flow-row h-fit">
            {service?.map((serv, index) => (
              <Link
                key={index}
                href={serv?.link}
                className="col-span-1 flex flex-col items-center md:items-start justify-between-- space-y-2 md:space-y-4 bg-[#F8F8F8] w-full h-[20vw]-- py-5 md:py-7 lg:py-10 px-10"
              >
                <Image
                  src={serv?.image?.url}
                  className="w-11  md:w-20 mt-3-- object-contain h-fit"
                  sizes="100vw"
                  height={0}
                  width={0}
                  alt={index}
                  unoptimized={disableImageOptimization}
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
}

export default LocationServicesLoc;
