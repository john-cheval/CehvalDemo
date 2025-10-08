import React from "react";
import * as motion from "motion/react-client";

const SectionOne = ({ section }) => {
  return (
    <div className="wrapper-padding">
      <div className="grid grid-cols-12 gap-4 lg:gap-x-12">
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
          className="font-sora grad-sub-txt text-xl md:text-2xl lg:text-3xl font-semibold leading-[136.5%] col-span-12 md:col-span-4 text-center md:text-left w-fit"
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
          className=" col-span-12 md:col-span-8 text-[#101763] font-satoshi text-sm md:text-lg font-normal leading-[154%] text-center md:text-left space-y-5 md:space-y-8"
          dangerouslySetInnerHTML={{ __html: section?.description }}
        ></motion.div>
      </div>

      <div className="w-full h-[1px] bg-[#101763] mt-8 md:mt-10 lg:mt-20"></div>
    </div>
  );
};

export default SectionOne;
