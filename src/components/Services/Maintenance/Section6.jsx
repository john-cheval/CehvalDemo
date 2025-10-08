import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";

const MaintenancePageSectionSix = ({ content }) => {
  const { title, image, sub_sections } = content;
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

      <div className="grid grid-cols-12 mt-6 md:mt-8 gap-y-3 md:gap-y-5 lg:gap-y-0 lg:gap-x-5">
        <div
          className=" col-span-12 lg:col-span-3 space-y-3 md:space-y-5
         lg:space-y-[20px] xl:space-y-[130px] lg:mt-[160px] xl:mt-[200px]"
        >
          {sub_sections?.slice(0, 2)?.map((item, index) => {
            return (
              <div
                className="text-center lg:text-right mx-auto-"
                key={index + 1}
              >
                <h6 className="heading-secondary">{item?.title}</h6>
                <div
                  className="text-center- main-description text-black mx-auto- md:mt-2 lg:mb-8"
                  dangerouslySetInnerHTML={{
                    __html: item?.description,
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className=" col-span-12 lg:col-span-6">
          {sub_sections[2] && (
            <div className="text-center mx-auto">
              <h6 className="heading-secondary">{sub_sections[2]?.title}</h6>
              <div
                className="lg:text-center main-description text-black  lg:mb-8 lg:mx-auto md:mt-2"
                dangerouslySetInnerHTML={{
                  __html: sub_sections[2]?.description,
                }}
              />
            </div>
          )}
          <Image
            src={image?.url}
            alt={title}
            width={700}
            height={400}
            className="w-full h-auto hidden lg:block"
          />
        </div>
        <div className=" col-span-12 lg:col-span-3 space-y-3 md:space-y-5 lg:space-y-[20px] xl:space-y-[130px] lg:mt-[160px] xl:mt-[200px]">
          {sub_sections?.slice(3)?.map((item, index) => {
            return (
              <div
                className="text-center lg:text-left mx-auto-"
                key={index + 1}
              >
                <h6 className="heading-secondary">{item?.title}</h6>
                <div
                  className="text-center- main-description text-black lg:max-w-[300px] lg:mb-8 mx-auto- md:mt-2"
                  dangerouslySetInnerHTML={{
                    __html: item?.description,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MaintenancePageSectionSix;
