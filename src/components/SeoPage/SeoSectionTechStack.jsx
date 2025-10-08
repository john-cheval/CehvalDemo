import Image from "next/image";
import React from "react";

const SeoSectionTechStack = () => {
  const cards = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    title: `CI/CD Tools`,
    description: `The Cheval ME website development team specializes in providing creative, high-quality, and comprehensive WordPress website development services at an affordable price. With a track record of successfully delivering over 500+ fully custom`,
  }));
  return (
    <div className="wrapper-padding">
      <div className="w-full h-fit wrapper-padding">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4">
          <p className="font-sora font-semibold text-[#101763] text-3xl text-center md:text-start md:text-4xl  leading-normal max-w-[400px] ">
            Here Is the Tech Stack We Use for The Android App Development
            Process
          </p>

          {cards?.map((item, index) => (
            <div
              className="flex bg-white   w-full h-full flex-col py-10 px-8 "
              key={index + 1}
            >
              <h3 className="font-sora font-semibold text-[#101763] text-xl sm:text-2xl md:text-3xl ">
                {item?.title}
              </h3>
              <div
                className="font-satoshi w-full text-sm pt-20 text-[#101763]"
                dangerouslySetInnerHTML={{ __html: item?.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeoSectionTechStack;
