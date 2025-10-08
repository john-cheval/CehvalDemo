import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";
import { fadeUp, listContainer } from "@/util/motionTimeline";

const HomeSectionSix = ({ sectionData }) => {
  const { title, section_list } = sectionData;
  return (
    <section className="wrapper-padding">
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
        className="heading-1 !text-center lg:!text-left"
      >
        {title}
      </motion.h4>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 2xl:mt-8 gap-4 lg:gap-x-6 lg:gap-y-5 auto-rows-fr "
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
                key={index}
                className="text-stack-card py-6 px-8"
                variants={fadeUp}
              >
                <p className="heading-secondary !text-black">{item?.title}</p>

                <div className="flex gap-y-6 gap-x-6 flex-wrap mt-5 items-center">
                  {item?.image_gallery &&
                    item?.image_gallery?.length > 0 &&
                    item?.image_gallery?.map((img, index) => (
                      <Image
                        key={index}
                        src={img?.url}
                        alt={img?.title || "image"}
                        width={100}
                        height={33}
                        className="w-auto- max-h-8- h-full- object-cover"
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

export default HomeSectionSix;
