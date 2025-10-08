import React from "react";
import * as motion from "motion/react-client";
import { fadeUp, listContainer } from "@/util/motionTimeline";
import Image from "next/image";

const MaintenancePageSectionThree = ({ section }) => {
  const { title, description, sub_sections } = section;
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
        className=" text-black  text-center main-description mt-2"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-5 2xl:mt-8 gap-4 lg:gap-x-6 lg:gap-y-5 md:auto-rows-fr- "
        variants={listContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {sub_sections &&
          sub_sections?.length > 0 &&
          sub_sections?.map((item, index) => {
            return (
              <motion.div
                key={index}
                className="text-stack-card py-6 px-8"
                variants={fadeUp}
              >
                <p className="heading-secondary !text-black text-center sm:text-left">
                  {item?.title}
                </p>

                <div className="flex gap-y-6 gap-x-6 justify-center sm:justify-start flex-wrap mt-5 items-center-">
                  {item?.gallery &&
                    item?.gallery?.length > 0 &&
                    item?.gallery?.map((img, index) => (
                      <Image
                        key={index}
                        src={img?.url}
                        alt={img?.title || "image"}
                        width={100}
                        height={33}
                        className=" max-h-10 object-contain"
                      />
                    ))}

                  {item?.description && (
                    <div
                      className="our-tech-stack"
                      dangerouslySetInnerHTML={{ __html: item?.description }}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
      </motion.div>
    </section>
  );
};

export default MaintenancePageSectionThree;
