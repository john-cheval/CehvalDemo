import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";
import { fadeUp, listContainer } from "@/util/motionTimeline";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const MaintenancePageSectionEight = ({ content }) => {
  const { title, image, description, sub_sections } = content;
  return (
    <section className="wrapper-padding relative  pt-8  lg:pt-12 xl:pt-16">
      <div className="bg-[#000325] text-white rounded-[15px] py-10  md:py-12 lg:py-14 2xl:py-20 px-5  sm:px-8 md:px-10 lg:px-14 2xl:px-20 grid grid-cols-12 gap-y-5 md:gap-y-0 md:gap-x-5 lg:gap-x-8 2xl:gap-x-14">
        <div className="col-span-12 md:col-span-6 lg:col-span-7">
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
            className="heading-2 !text-white text-center md:text-left  "
          >
            {title}
          </motion.h4>
          <motion.div
            className="main-description mt-2 text-center md:text-left"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <motion.div
            variants={listContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-5 md:mt-8"
          >
            {sub_sections?.map((item, index) => {
              return (
                <motion.div variants={fadeUp} key={index + 1} className="">
                  {index === 0 && (
                    <div className="block h-px w-[200px] sm:w-[320px] bg-[#4A4E77] mx-auto md:mx-0" />
                  )}
                  <h6 className="heading-secondary !text-white !font-medium !leading-normal py-5  sm:py-6 md:py-8 text-center md:text-left">
                    {item?.title}
                  </h6>
                  <div className="block h-px w-[200px] sm:w-[320px] bg-[#4A4E77] relative mainteneancelist mx-auto md:mx-0" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-5 relative">
          <div className="relative">
            <Image
              src={image?.url}
              alt={title}
              width={500}
              height={750}
              className="w-full h-auto rounded-[15px] md:rounded-[30px] overflow-hidden"
            />
            <Link
              href={"#"}
              className="rounded-[10px] bg-sec text-white text-base font-medium leading-[154%] py-3 pl-5 pr-3  flex items-center w-fit group gap-x-1 sm:gap-x-3 md:gap-x-5 lg:gap-x-10 absolute bottom-8 lg:bottom-14 left-[45%]  sm:left-1/2 md:left-8 -translate-x-1/2 md:-translate-x-0"
            >
              Enquire Now
              <ArrowRight className=" group-hover:translate-x-2 transition-transform duration-300 !font-normal !text-sm" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenancePageSectionEight;
