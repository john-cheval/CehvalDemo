import Image from "next/image";
import React from "react";

const SectionList = ({ data, ID }) => {
  return (
    <>
      {data?.map((section, index) => (
        <div key={index + 1}>
          {section?.description && (
            <div className="flex flex-col mt-7 md:space-y-0 space-y-3-- bg-white pt-6 md:pt-11 md:flex-row w-full py-12 px-10 rounded-[30px] justify-between text-[#101763] pb-3-- md:pb-6-- lg:pb-10-- xl:pb-16--">
              <h5 className="font-sora font-semibold text-3xl text-center md:text-start sm:text-4xl md:text-5xl mb-3 md:mb-0">
                {section?.title}
              </h5>
              <p
                dangerouslySetInnerHTML={{ __html: section?.description }}
                className="font-satoshi text-center md:text-start   text-[15px] md:text-base  w-full md:w-1/2 lg:w-[65%]"
              />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default SectionList;
