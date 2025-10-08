import React from "react";
import OurValuesInner from "./OurValuesInner";
import OurValuesInnerMobile from "./OurValuesInnerMobile";

const OurValues = ({ valuesData }) => {
  return (
    <div className="pt-10 lg:pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 mb-5 lg:mb-12">
        <h2 className="text-[#101753] text-center lg:text-start font-sora text-3xl sm:text-4xl lg:text-6xl leading-[133%] tracking-[-2.4px] heading2">
          {valuesData?.our_values_heading}
        </h2>
        <p
          dangerouslySetInnerHTML={{
            __html: valuesData?.our_values_description,
          }}
          className="text-black font-satoshi text-sm lg:text-base text-center lg:text-start leading-[154%] w-full para"
        ></p>
      </div>
      <div className="md:block hidden ">
        <OurValuesInner valuesData={valuesData} />
      </div>
      <div className="md:hidden wrapper-padding">
        <OurValuesInnerMobile valuesData={valuesData} />
      </div>

      <div className="grid grid-cols-1  lg:grid-cols-12  pt-12  pb-10 wrapper-padding  rounded-[30px]  lg:gap-x-3 space-y-3 lg:space-y-0 ">
        <h2 className="text-[#101763] col-span-4 font-sora text-center lg:text-start text-3xl sm:text-4xl lg:text-6xl leading-[133%] md:tracking-[-2.4px] heading2">
          {valuesData?.our_ideology_heading}
        </h2>
        <p
          dangerouslySetInnerHTML={{
            __html: valuesData?.our_ideology_description,
          }}
          className="text-[#101763] lg:col-span-8 font-satoshi text-sm md:text-base text-center lg:text-start leading-[154%] w-full para"
        ></p>
      </div>
    </div>
  );
};

export default OurValues;
