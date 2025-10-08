import { disableImageOptimization } from "@/util/constants";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SeoBannerSection = ({ left, right, title }) => {
  return (
    <div className=" grid grid-cols-12 md:grid-cols-12 gap-2 grid-flow-row">
      {left && (
        <div className="col-span-12 sm:col-span-6 relative">
          <Image
            src={left}
            height={400}
            width={600}
            sizes="100vw"
            alt={title || "image"}
            unoptimized={disableImageOptimization}
            className="h-full w-full object-cover object-center--"
          />
          <Link href={"/projects"} className="hidden md:block">
            <div className="flex absolute bottom-0 right-0 my-14 mx-20 items-center justify-between py-2.5 text-white space-x-2 rounded-[50px] sm:w-fit w-full--  px-4 border border-white  bg-transparent  font-sora text-center text-sm ">
              <span className="">Projects </span>

              <ArrowUpRight className="text-white" />
            </div>
          </Link>
        </div>
      )}

      <div
        className={`hidden-- sm:block-- col-span-12 ${left ? "sm:col-span-6" : "col-span-12"} relative `}
      >
        <Image
          src={right}
          height={400}
          width={600}
          unoptimized={disableImageOptimization}
          sizes="100vw"
          alt={title}
          className="h-full w-full object-cover object-center--"
        />
      </div>
    </div>
  );
};

export default SeoBannerSection;
