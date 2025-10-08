import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";
import { fadeUp, listContainer } from "@/util/motionTimeline";

const HomeSectionFour = ({ sectionData }) => {
  const { title, description, section_list } = sectionData;
  return (
    <section className="wrapper-padding">
      <div className="grid grid-cols-12 gap-y-5 lg:gap-x-5">
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
          className="heading-1 !text-center lg:!text-left col-span-12 lg:col-span-5"
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
          viewport={{ once: true, amount: 0.2, delay: 0.3 }}
          className="main-desc !text-center lg:!text-left col-span-12 lg:col-span-7 mt-0 lg:mt-3"
          dangerouslySetInnerHTML={{ __html: description }}
          variants={fadeUp}
        />
      </div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 lg:gap-x-10 mt-10 lg:mt-14 "
        variants={listContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {section_list &&
          section_list.length > 0 &&
          section_list?.map((item, index) => {
            return (
              <motion.div
                key={index + 1}
                className="flex gap-x-6 items-center "
                variants={fadeUp}
              >
                <div
                  className="rounded-[10px]- 
                    box relative"
                >
                  <div className="relative- p-2  m-[2px]- ">
                    <Image
                      src={item?.image?.url}
                      alt={item?.title || `image-${index + 1}`}
                      width={40}
                      height={40}
                      className="w-full- w-10 h-10 max-h-12- h-auto- object-cover- relative z-40"
                    />
                  </div>
                </div>

                <div
                  className={`border-b border-b-[#D0D0D0] py-5 md:py-6 w-full  ${index === 0 ? "border-t border-t-[#D0D0D0]" : ""} 
                  ${index === 1 ? "border-t-0 md:border-t border-t-transparent md:border-t-[#D0D0D0]" : ""} `}
                >
                  <h5 className="heading-secondary">{item?.title}</h5>
                  <div
                    className="main-desc mt-2 md:mt-3 lg:min-h-[78px] xl:min-h-0 "
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

export default HomeSectionFour;
