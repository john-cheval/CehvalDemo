import React from "react";
import * as motion from "motion/react-client";
import { fadeUp, listContainer } from "@/util/motionTimeline";

const HomeSectionFive = ({ sectionData }) => {
  const { title, description, section_list } = sectionData;
  return (
    <section className="wrapper-padding ">
      <div className="grid grid-cols-12 gap-y-5 lg:gap-x-8">
        <motion.div
          className="col-span-12 lg:col-span-4 xl:col-span-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h4
            className="heading-1 !text-center lg:!text-left"
            variants={fadeUp}
          >
            {title}
          </motion.h4>
          <motion.div
            className="main-desc mt-4 !text-center lg:!text-left"
            dangerouslySetInnerHTML={{ __html: description }}
            variants={fadeUp}
          />
        </motion.div>
        <motion.div
          variants={listContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="col-span-12 lg:col-span-8 xl:col-span-7 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-0 lg:mt-3 auto-rows-fr "
        >
          {section_list &&
            section_list?.length > 0 &&
            section_list?.map((item, index) => {
              return (
                <motion.div key={index + 1} variants={fadeUp}>
                  <div className="relative h-full">
                    {" "}
                    <div className="rounded-[10px] relative box h-full">
                      <div className="relative z-50 px-4 sm:px-8 py-4 sm:py-8 h-full ">
                        <div className="bg-white w-fit px-5 py-1 rounded-3xl ">
                          <p
                            className="text-[14px] font-bold !leading-[176%] font-sora inline-block "
                            style={{
                              background:
                                "linear-gradient(100deg, #101763 12.24%, #D81100 86.27%)",
                              backgroundClip: "text",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            }}
                          >
                            Step {index + 1}
                          </p>
                        </div>

                        <div className="pt-5 md:pt-10">
                          <h6 className="heading-secondary-2 min-h-[50px] md:min-h-[85px] ">
                            {item?.title}
                          </h6>
                          <div
                            className="main-desc  !text-black mt-2 "
                            dangerouslySetInnerHTML={{
                              __html: item?.description,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSectionFive;
