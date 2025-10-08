import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import * as motion from "motion/react-client";

import {
  chevalVariants,
  containerVariants,
  itemVariants,
} from "@/util/motionTimeline";

const HomeSectionOne = ({ content }) => {
  const { web_title, web_link } = content;
  return (
    <section className="relative h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden bg-white wrapper-padding">
      <div className="fixed  left-1/2 -translate-x-1/2 bottom-[20%] -translate-y-1/2 md:-translate-y-0 lg:bottom-0 lg:top-auto flex- items-center justify-center z-10">
        <div
          className="h-full w-full relative"
          // initial="hidden"
          // animate="visible"
          // variants={chevalVariants}
        >
          <h2 className="text-[#dbdbdb] font-sora text-[341px]- main-home-heading-2 font-semibold leading-[139%] tracking-tighter md:tracking-[-13.64px]">
            Cheval
          </h2>
        </div>
      </div>

      <article
        // initial="hidden"
        // animate="visible"
        // variants={containerVariants}
        className="absolute top-[25%] left-5 right-5 lg:right-auto lg:left-1/2 lg:-translate-x-1/2 flex flex-col items-center z-10"
      >
        <h1
          title={web_title}
          className="font-sora text-2xl sm:text-3xl md:text-4xl font-bold md:mb-3 lg:text-5xl xl:text-[54px] relative heading2 main-home-heading text-center"
          // variants={itemVariants}
        >
          {web_title}
        </h1>
        <p
          // variants={itemVariants}
          className="text-main font-sora text-base md:text-[22px] text-center leading-[190%] mt-1"
        >
          We specialise in full-stack development, AI, blockchain and Web3
          platforms with design and digital marketing that support real growth
        </p>
        <div /* variants={itemVariants} */>
          <Link
            href={web_link}
            className="text-white text-base font-medium leading-[154%] bg-sec rounded-[10px] py-4 px-5 flex items-center group transition-all duration-300 ease-in-out border-sec hover:text-main hover:bg-transparent border hover:border-main mt-4 gap-x-2"
          >
            Schedule a tech consult{" "}
            <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300 ease-in-out" />
          </Link>
        </div>
      </article>
    </section>
  );
};

export default HomeSectionOne;
