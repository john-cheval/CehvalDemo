import React from "react";

const AboutHeader = ({ content, heading }) => {
  return (
    <div className="wrapper-padding relative w-screen h-fit pt-28 md:pt-36 pb-7 md:pb-14 ">
      <div className="grid gap-2 lg:gap-6 grid-cols-1 lg:grid-cols-2">
        {heading && (
          <p
            className="w-full text-center lg:text-start  xl:max-w-[650px] font-sora font-normal text-[25px] sm:text-3xl  md:text-[40px] leading-[135%] "
            style={{ lineHeight: 1.2 }}
          >
            <span className="text-[#d81100]">{heading?.split(",")[0]},</span>{" "}
            <span>{heading?.split(",")[1]}</span>
          </p>
        )}
        <p
          dangerouslySetInnerHTML={{
            __html: content,
          }}
          className="text-[#464646] text-xs para text-center lg:text-start md:text-base font-sora font-normal leading-[187%]  w-full space-y-3"
          style={{
            lineHeight: "187%",
          }}
        ></p>
      </div>
    </div>
  );
};

export default AboutHeader;
