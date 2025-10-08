import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Section3 = ({ heading, list }) => {
  const buildHead = heading ?? "";
  const [firstBuildWord, ...restBuildWords] = buildHead.split(" ");
  const restBuildText = restBuildWords.join(" ");
  return (
    <div className="wrapper-padding">
      <div className="w-full grid grid-cols-12  gap-4">
        <div className="flex space-y-5 sm:space-y-10 sm:items-start pr-2-- items-center sm:justify-start justify-center  flex-col  col-span-12 lg:col-span-4 h-fit">
          <h2
            style={{}}
            className="font-sora font-semibold text-[#101763] text-2xl sm:text-3xl text-center  md:text-4xl  leading-normal ext-center md:text-left "
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
          </h2>
          <div className="my-3 ml-1 w-full max-w-40 h-[1px] bg-black"></div>
        </div>

        <div className=" col-span-12 lg:col-span-8 space-y-4 ">
          {list?.map((item, index) => (
            <div
              key={index}
              className="bg-[#F2F4F9] py-[56px] wrapper-padding rounded-lg  flex flex-col lg:flex-row lg:items-center justify-between gap-y-4"
            >
              <div className="space-y-6 lg:max-w-[80%]">
                <p className="font-sora text-xl sm:text-2xl md:text-3xl text-[#101763] font-semibold leading-[136.5%] text-center sm:text-left">
                  {item?.title}
                </p>
                <div
                  className="font-sora text-[#27172F] text-sm leading-[173.85%] text-center sm:text-left  tetx-sm md:text-base "
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                ></div>

                <span className="w-16 h-1 bg-[#FF0C15] md:inline-block hidden "></span>
              </div>

              <Link
                href="/contact-us"
                className="font-sora text-sm leading-[173.85%] text-white flex items-center bg-[#FF0C15] px-5 md: py-3 md:py-4 rounded-full h-fit gap-x-2 group w-fit mx-auto sm:mx-0"
              >
                Enquire Now{" "}
                <ArrowRight className="group-hover:translate-x-2 transition-all duration-300" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
