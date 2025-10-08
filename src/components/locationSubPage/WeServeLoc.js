import React from "react";
import Image from "next/image";
import { disableImageOptimization } from "@/util/constants";
const WeServeLoc = ({ serveList }) => {
  return (
    <div className="col-span-3 lg:col-span-2 h-fit w-full grid text-[#27172F]grid-cols-1 md:grid-cols-2 justify-center">
      {serveList?.map((item, index) => (
        <div key={index + 1}>
          <div className="hidden lg:block col-span-2 h-[1px] w-full  bg-[#D8D8D8]"></div>
          <div className="py-6 col-span-2 md:col-span-1 text-base   sm:text-xl font-normal flex leading-none items-center gap-x-4 md:gap-x-6 px-3 uppercase justify-start">
            <Image
              src={item?.image?.url}
              alt={item?.title}
              height={0}
              width={0}
              sizes="100vw"
              unoptimized={disableImageOptimization}
              className="w-10 object-contain h-fit"
            />
            <p className="text-base md:text-xl font-satoshi ">
              <span className="font-semibold">
                {item?.title?.split(" ")[0]}
              </span>{" "}
              {item?.title?.split(" ").slice(1).join(" ")}
            </p>
          </div>
        </div>
      ))}
      <div className="col-span-2 h-[1px] w-full  bg-[#D8D8D8] hidden md:block"></div>
    </div>
  );
};

export default WeServeLoc;
