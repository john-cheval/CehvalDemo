import React from "react";

const ServiceSectionTwo = ({
  title,
  description,
  heading,
  fullDescription,
}) => {
  return (
    <div className="lg:py-16 md:py-10 py-6 wrapper-padding  ">
      <div className="space-y-5 md:space-y-8 flex flex-col items-center ">
        <h1
          className="servgradtext w-fit !text-center font-sora text-xl sm:text-2xl md:text-start md:text-3xl  xl:text-[40px] font-semibold leading-[135%] tracking-[-0.4px] max-w-[950px] "
          style={{
            lineHeight: "1.3",
          }}
        >
          {title}
        </h1>

        <div className=" text-[#101763] font-sora text-sm md:text-base font-normal leading-[187%] space-y-4 lg:space-y-5 text-center max-w-[1100px]">
          {description && (
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
          )}
          {fullDescription && (
            <div
              dangerouslySetInnerHTML={{ __html: fullDescription }}
              className=""
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceSectionTwo;
