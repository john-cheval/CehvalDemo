import React from "react";
import * as motion from "motion/react-client";

const SectionTwo = ({ section }) => {
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
            className="font-sora grad-sub-txt text-xl md:text-2xl lg:text-3xl font-semibold leading-[136.5%] text-center md:text-left w-full md:w-fit"
          >
            {section?.title}
          </motion.h2>

          {section?.description && (
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
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-[#101763] font-satoshi text-sm md:text-lg font-normal leading-[154%] text-center md:text-left"
              dangerouslySetInnerHTML={{ __html: section?.description }}
            ></motion.div>
          )}
        </div>

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
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="col-span-12 md:col-span-8 mx-auto md:mx-0 mt-4 md:mt-0 "
        >
          {section?.sub_sections?.map((item, index) => (
            <div key={index + 1}>
              {item?.title && (
                <p className="text-[#101763] font-satoshi text-sm md:text-lg font-normal leading-[154%]">
                  {item?.title}
                </p>
              )}

              <div
                className=" subDesc "
                dangerouslySetInnerHTML={{ __html: item?.description }}
              ></div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="w-full h-[1px] bg-[#101763] mt-8 md:mt-10 lg:mt-20"></div>
    </div>
  );
};

export default SectionTwo;
