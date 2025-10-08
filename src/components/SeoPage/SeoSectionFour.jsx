import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const SeoSectionFour = ({ section }) => {
  return (
    <div className="wrapper-padding w-full">
      <div className="grid  grid-cols-12 gap-x-8">
        <div className="col-span-12 lg:col-span-4">
          <p
            style={{
              background: "linear-gradient(92deg, #FF0C15 0.33%, #000 26.13%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="text-2xl sm:text-3xl lg:text-4xl font-sora font-semibold leading-[136.5%] lg:max-w-[450px] text-center md:text-left mb-4 lg:mb-0 w-full"
          >
            {section?.title}
          </p>
        </div>

        <div
          className="font-satoshi col-span-12 lg:col-span-8 text-sm md:text-base text-center md:text-left leading-[154%] text-[#101763]"
          dangerouslySetInnerHTML={{ __html: section?.description }}
        ></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 f gap-5 pt-10 lg:pt-20">
        {section?.sub_sections?.map((card, index) => (
          <div
            key={index + 1}
            className="bg-[#101763] rounded-lg pt-8 pb-12 px-8"
          >
            <Link
              className="text-white font-satoshi py-3 px-3 flex gap-x-1 items-center text-sm md:text-base border border-white w-fit rounded-full group ml-auto"
              href={card?.link}
            >
              Projects{" "}
              <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
            </Link>
            <p className="text-white font-sora text-xl sm:text-2xl md:text-3xl text-center md:text-left font-semibold leading-[136.5%] py-7 lg:py-11">
              {card?.title}
            </p>
            <div
              className="text-white font-satoshi text-sm leading-[173.85%]  pt-10"
              dangerouslySetInnerHTML={{ __html: card?.description }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeoSectionFour;
