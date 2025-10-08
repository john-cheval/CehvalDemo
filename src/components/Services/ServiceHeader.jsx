import React from "react";

const ServiceHeader = ({ data }) => {
  return (
    <div className="relative w-screen  h-[367px] md:h-[422px]-- md:h-[350px] sectionPin0 overflow-hidden flex items-center  justify-center service-header">
      <div>
        <video
          playsInline
          autoPlay
          muted
          loop
          controlsList="nodownload"
          id="video"
          className="absolute inset-0 w-full h-full object-cover opacity-80 -z-10"
        >
          <source src={data?.banner_video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-[5] bg-service-header-gradient" />

        <div className="flex items-center justify-center  w-full  mt-14 sm:mt-0 ">
          <p
            className="lg:w-[662px] w-[80%] text-white text-center font-sora text-xl sm:text-2xl md:text-3xl lg:text-[35px] leading-[139%] tracking-[-0.4px] md:pt-10"
            style={{
              lineHeight: 1.3,
            }}
          >
            {data?.sub_heading}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeader;
