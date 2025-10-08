import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";
import * as motion from "motion/react-client";
import { fadeUp, listContainer } from "@/util/motionTimeline";

const HomeSectionSeven = ({ sectionData }) => {
  const { title, description, section_list, image } = sectionData;
  return (
    <section className="wrapper-padding">
      <div className="grid grid-cols-12 gap-y-8 lg:gap-y-0 lg:gap-x-10 xl:gap-x-16">
        <div className="col-span-12 lg:col-span-6 xl:col-span-7">
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
            className="mt-7 space-y-5 md:space-y-7 "
            variants={listContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {section_list &&
              section_list?.length > 0 &&
              section_list?.map((item, index) => {
                return (
                  <motion.div
                    key={index + 1}
                    className="pb-5 md:pb-7 border-b border-b-[#C9CEFF] flex items-center justify-between group"
                    variants={fadeUp}
                  >
                    <div className=" space-y-2 md:space-y-4 w-[80%]">
                      <h5 className="heading-secondary">{item?.title}</h5>
                      {item?.description && (
                        <div
                          className="main-desc "
                          dangerouslySetInnerHTML={{
                            __html: item?.description,
                          }}
                        />
                      )}
                    </div>
                    <IoArrowForward
                      size={20}
                      className="mt-3 md:mt-4 group-hover:translate-x-2 transition-transform duration-300 ease-in-out text-[#B4B4B4] group-hover:text-sec"
                    />
                  </motion.div>
                );
              })}
          </motion.div>
        </div>
        <div className="col-span-12 space-y-5 lg:col-span-6 xl:col-span-5 mt-0 lg:mt-3   ">
          <Image
            src={image?.url}
            alt={title || "image"}
            width={600}
            height={400}
            sizes="100vw"
            className="w-full h-auto object-cover block rounded-[30px]"
          />

          <div className="relative">
            <Image
              src={"/Home/New/servicesss.jpg"}
              alt="services"
              height={400}
              width={600}
              sizes="100vw"
              className="w-full h-auto object-cover block rounded-[30px] border border-[#C9CEFF]"
            />
            <div
              className="home-services-overlay absolute top-[10%] left-0 md:left-16 w-full md:w-[75%] px-5 md:px-0"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div className="absolute bottom-[8%] sm:bottom-[10%] left-0 md:left-16 flex justify-center w-full md:justify-start">
              <Link
                href={"/contact-us"}
                className="text-white text-[15px] md:text-base font-medium leading-[154%] bg-sec rounded-[10px] py-3 md:py-4 px-5 flex items-center group transition-all duration-300 ease-in-out border-sec hover:text-main hover:bg-transparent border hover:border-main mt-4 gap-x-2 w-fit"
              >
                Lets Build Together{" "}
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300 ease-in-out" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionSeven;
