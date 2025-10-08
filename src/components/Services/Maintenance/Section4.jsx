import React from "react";
import * as motion from "motion/react-client";
import { fadeUp, listContainer } from "@/util/motionTimeline";
import { CiCircleCheck } from "react-icons/ci";

const MaintenancePageSectionFour = (services) => {
  const { title, sub_sections } = services?.services;
  return (
    <section className="wrapper-padding relative  pt-8  lg:pt-12 xl:pt-16">
      <motion.h4
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="heading-2  text-center"
      >
        {title}
      </motion.h4>

      <motion.div
        variants={listContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className=" grid grid-cols-1  md:grid-cols-2 md:gap-x-3 lg:gap-x-4  xl:gap-x-5 gap-y-3 mt-6 "
      >
        {sub_sections &&
          sub_sections?.length > 0 &&
          sub_sections?.map((item, index) => {
            return (
              <motion.div key={index + 1} variants={fadeUp}>
                <div className="relative h-full box">
                  <div className="relative z-50 flex  gap-x-2.5 items-start py-8  px-4 sm:px-5  lg:py-8">
                    <CiCircleCheck className="text-sec shrink-0 text-xl mt-[7px]  " />
                    <div>
                      <h6 className="text-main font-sora leading-normal font-medium text-lg md:text-xl lg:text-2xl">
                        {item?.title}
                      </h6>
                      <div
                        className="main-description text-black mt-1"
                        dangerouslySetInnerHTML={{ __html: item?.description }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
      </motion.div>
    </section>
  );
};

export default MaintenancePageSectionFour;
