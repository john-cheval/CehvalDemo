import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

const SeoSectionTwo = ({ section }) => {
  return (
    <div className="w-full h-fit wrapper-padding ">
      <div className="w-full grid grid-cols-1 md:grid-cols-2- lg:grid-cols-12 grid-flow-row gap-y-4  lg:gap-x-4">
        <div className="flex space-y-5 lg:items-start lg:pr-4 items-center sm:justify-start justify-center flex-col lg:col-span-4 h-fit">
          <h2 className="font-sora font-semibold text-[#101763] text-2xl sm:text-3xl lg:text-4xl !leading-[136.5%] text-center lg:text-left">
            {section?.title}
          </h2>
          <div className="lg:ml-1 w-full max-w-40 h-[1px] bg-black mx-auto inline-block"></div>
          {section?.description && (
            <div
              className="text-[#101763] font-satoshi text-sm md:text-base font-normal leading-[154%] text-center lg:text-left "
              dangerouslySetInnerHTML={{ __html: section?.description }}
            ></div>
          )}
        </div>

        <div className="col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {section?.sub_sections &&
            section?.sub_sections?.map((card, index) => (
              <div
                key={index}
                className="flex relative col-span-1 bg-[#fff] w-full mt-4 md:mt-0 h-full"
              >
                <div className="flex w-full flex-col py-6 md:py-8 space-y-24 px-5 md:px-10">
                  <h3 className="text-[#101763] font-sora font-semibold leading-[136.5%]  pt-5 md:pt-0 text-xl sm:text-2xl lg:text-3xl text-center md:text-left md:min-h-[80px]">
                    {card?.title}
                  </h3>
                  <div className="space-y-5">
                    <div
                      className="font-satoshi text-[14px] text-[#101763] leading-[173.85%] min-h-[120px] text-sm md:text-base text-center md:text-left "
                      dangerouslySetInnerHTML={{ __html: card?.description }}
                    ></div>

                    {card?.link && (
                      <Link
                        href={card?.link}
                        className="flex items-center justify-between py-3 space-x-3.5 rounded-[50px] sm:w-fit w-fit mx-auto md:mx-0 px-5 border border-white bg-[#d81100] group"
                      >
                        <span className="text-white font-sora text-sm text-center">
                          Enquire Now
                        </span>

                        <ArrowRight className="text-white group-hover:translate-x-2 transition-transform duration-300" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SeoSectionTwo;
