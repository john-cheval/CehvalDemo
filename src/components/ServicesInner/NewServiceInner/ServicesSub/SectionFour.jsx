import React from "react";
import * as motion from "motion/react-client";
const SectionFour = ({ section }) => {
  return (
    <div className="wrapper-padding">
      <div className="grid grid-cols-12 gap-4 lg:gap-x-12">
        <div className="col-span-12 md:col-span-4 space-y-4">
          <motion.h2
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="font-sora grad-sub-txt text-xl md:text-2xl lg:text-3xl font-semibold leading-[136.5%]  text-center md:text-left w-full md:w-fit"
          >
            {section?.title}
          </motion.h2>
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="  text-[#101763] font-satoshi text-sm md:text-lg font-normal leading-[154%] text-center md:text-left"
            dangerouslySetInnerHTML={{ __html: section?.description }}
          ></motion.div>
        </div>

        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-y-16 sm:gap-y-20 md:gap-y-0 md:gap-x-7 mt-10 sm:mt-20 ">
          {section?.sub_sections?.map((item, index) => (
            <motion.div
              className="col-span-1 grid grid-cols-1 grid-flow-row  gap-20-- lg:gap-0"
              key={index + 1}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
            >
              <div
                className={`w-full relative h-fit col-span-1 bg-[#F2F4F9] flex flex-col text-[#27172F] space-y-4 px-10 pt-14 sm:pt-16 lg:pt-20 pb-10 ${index % 2 === 0 ? "" : "md:mt-20"}`}
              >
                <p className=" absolute text-[90px] sm:text-[150px] font-sora font-semibold -top-10 sm:-top-16 leading-none left-10 text-[#EE2525] ">
                  {index + 1}
                </p>
                <p className="font-sora font-semibold text-xl sm:text-2xl lg:text-3xl ">
                  {item?.title}
                </p>
                <p
                  className="font-satoshi w-full text-sm sebdesc2 text-[#27172F] leading-[173.85%]"
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                ></p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
