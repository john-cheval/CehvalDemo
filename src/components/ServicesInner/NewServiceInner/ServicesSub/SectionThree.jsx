"use client";
import React from "react";
import useMediaQuery from "@/util/useMediaQuery";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay,
    },
  }),
};
const SectionThree = ({ section }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="wrapper-padding">
      <div className="grid grid-cols-12 gap-4 lg:gap-x-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          custom={0}
          className="col-span-12 md:col-span-4 space-y-4"
          style={{
            position: isMobile ? "static" : "sticky",
            top: "120px",
            alignSelf: "start",
          }}
        >
          <h2 className="font-sora  text-[#101763] text-xl md:text-2xl lg:text-3xl font-semibold leading-[136.5%]  text-center md:text-left">
            {section?.title}
          </h2>
          {section?.description && (
            <div
              className="  text-[#101763] font-satoshi text-sm md:text-lg font-normal leading-[154%] text-center md:text-left"
              dangerouslySetInnerHTML={{ __html: section?.description }}
            ></div>
          )}
        </motion.div>

        <div className="col-span-12 md:col-span-8  mt-4 md:mt-0">
          {section?.sub_sections?.map((item, index) => (
            <motion.div
              key={index + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              custom={(index + 1) * 0.1}
              className={`space-y-2 pb-5 md:pb-8 border-b border-b-[#101763] ${index === 0 ? "" : "pt-5 md:pt-7"} ${index === section?.sub_sections?.length - 1 ? "border-b-0" : ""}`}
            >
              <p className="grad-sub-txt md:w-fit text-lg sm:text-xl lg:text-2xl xl:text-3xl font-sora font-semibold text-center md:text-left">
                {item?.title}
              </p>
              <div
                className="font-satoshi text-sm sm:text-base lg:text-lg text-[#101763] leading-[154%] text-center md:text-left"
                dangerouslySetInnerHTML={{ __html: item?.description }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#101763] mt-8 md:mt-10 lg:mt-20"></div>
    </div>
  );
};

export default SectionThree;
