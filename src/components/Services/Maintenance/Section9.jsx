"use client";
import React from "react";
import { fadeUp, listContainer } from "@/util/motionTimeline";
import { CiCircleCheck } from "react-icons/ci";
import { motion } from "motion/react";
import useMediaQuery from "@/util/useMediaQuery";

const MaintenancePageSectionNine = ({ content }) => {
  const { title, sub_sections } = content;
  const isMobile = useMediaQuery("(max-width: 500px)");

  return (
    <section className="wrapper-padding relative  pt-8  lg:pt-12 xl:pt-16 ">
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
        className="heading-2  text-center text-main"
      >
        {title}
      </motion.h4>

      <motion.div
        variants={listContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5"}  gap-3 mt-7`}
      >
        {sub_sections?.map((item, index) => {
          return (
            <motion.div
              key={index + 1}
              variants={fadeUp}
              className="relative h-full box"
            >
              <div className="py-8 px-6 relative z-50 flex flex-col ">
                <CiCircleCheck className="text-sec text-2xl shrink-0" />

                <div
                  className="main-description text-black pt-6 sm:pt-8"
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default MaintenancePageSectionNine;
