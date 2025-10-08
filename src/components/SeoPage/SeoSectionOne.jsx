import React from "react";

const SeoSectionOne = ({ section }) => {
  return (
    <div className=" wrapper-padding sm:space-y-14 md:space-y-16">
      <div className="grid grid-cols-12 md:grid-cols-10 gap-2 grid-flow-row">
        <div className="col-span-12 md:col-span-6 relative space-y-4">
          <h3
            style={{
              background:
                "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",

              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
            className="font-sora font-semibold text-[#101763] text-2xl sm:text-3xl md:text-4xl  leading-[136.5%] max-w-[650px] text-center md:text-left "
          >
            {section?.title}
          </h3>
          <div
            className="text-[#101763] font-satoshi text-sm md:text-base font-normal leading-[154%] text-center md:text-left"
            dangerouslySetInnerHTML={{ __html: section?.description }}
          ></div>
        </div>
        <div className="col-span-12 md:col-span-4 relative mt-3 md:mt-0  mx-auto">
          {section?.sub_sections?.map((item, index) => (
            <div key={index + 1} className="">
              <h4 className="text-[#d81100] font-sora text-3xl text-center md:text-left md:text-4xl lg:text-5xl font-semibold leading-normal">
                {item?.title}
              </h4>
              <p className="text-[#101763] font-sora text-lg md:text-xl font-semibold text-center md:text-left mt-2">
                {item?.sub_heading}
              </p>

              {index === 0 && (
                <div className="w-[69px] h-[2px] bg-[#ff0c15] mt-4 mb-4 mx-auto md:mx-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeoSectionOne;
