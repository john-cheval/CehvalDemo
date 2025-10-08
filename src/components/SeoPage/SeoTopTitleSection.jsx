import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const SeoTopTitleSection = ({ title }) => {
  const words = title
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  const location = words[words.length - 1];
  const titleWithoutLocation = words.slice(0, -1).join(" ");
  return (
    <div className="w-full   h-fit wrapper-padding">
      <div className="flex items-center lg:items-start xl:space-y-0 space-y-4 xl:items-end lg:flex-row flex-col justify-between w-full">
        <h1 className="capitalize font-sora font-semibold lg:max-w-[590px] md:leading-tight sm:leading-tight leading-tight text-center lg:text-left   text-[#101763] text-3xl sm:text-4xl  md:text-5xl">
          {titleWithoutLocation}{" "}
          <span className="underline decoration-2 underline-offset-8">
            {location}
          </span>
        </h1>
        <Link href={"/contact-us"}>
          <div className="flex items-center justify-between py-3 space-x-3 md:space-x-5 rounded-[50px] sm:w-fit w-full  px-8 border border-[#101763] text-[#101763] bg-transparent  font-sora text-center font-semibold text-sm md:text-base  group">
            <span className="">Start Your Journey Today </span>

            <ArrowUpRight className="text-[#101763] group-hover:rotate-45 transition-transform duration-300" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SeoTopTitleSection;
