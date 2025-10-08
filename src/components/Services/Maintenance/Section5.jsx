import React from "react";
import * as motion from "motion/react-client";
import { fadeUp, listContainer } from "@/util/motionTimeline";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const MaintenancePageSectionFive = ({ content }) => {
  const { title, description, sub_sections } = content;
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
        className="heading-2  text-center text-main"
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
        className="main-description  text-center  text-black mx-auto lg:max-w-[70%] mt-2"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <motion.div
        className="grid grid-cols-12 lg:gap-x-10 mt-5 md:mt-8 lg:mt-12 xl:mt-14"
        variants={listContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-0 sm:gap-x-3 md:gap-x-5">
          {sub_sections?.slice(0, 2)?.map((item, index) => {
            return (
              <motion.div
                key={index + 1}
                variants={fadeUp}
                className="relative h-full box"
              >
                <div className="py-10 px-8 sm:p-8 relative z-50 gap-y-2.5 flex flex-col h-full">
                  <h5 className="heading-secondary sm:min-h-[50px]">
                    {item?.title}
                  </h5>
                  <div
                    className="text-black main-description"
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  />
                  <Link
                    href={item?.link || "/contact-us"}
                    className="rounded-[10px] bg-sec text-white text-base font-medium leading-[154%] py-3 pl-5 pr-3  flex items-center w-fit group gap-x-3 md:gap-x-5 lg:gap-x-10 mx-0 mt-3 sm:mt-auto"
                  >
                    Enquire Now
                    <ArrowRight className=" group-hover:translate-x-2 transition-transform duration-300 !font-normal !text-sm" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          variants={fadeUp}
          className="col-span-12 lg:col-span-5 text-main mt-5 lg:mt-6"
        >
          <h4 className="heading-secondary">{sub_sections[2]?.title}</h4>
          <div
            className="maintenence-description mt-4 xl:mt-7"
            dangerouslySetInnerHTML={{ __html: sub_sections[2]?.description }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MaintenancePageSectionFive;
