"use client";
import Image from "next/image";
import React from "react";
import MobileAdsForm from "../MobileAdsForm";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ExitIntentPopup from "@/components/shared/popup";

const AdsSectionOne = ({ title }) => {
  const [showForm, setShowForm] = useState(false);
  const popupVariants = {
    hidden: { y: -500, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
    exit: { y: 500, opacity: 0, transition: { duration: 0.3 } },
  };
  const handleClosePopup = () => {
    setShowForm(false);
  };
  return (
    <>
      <section className="bg-[#F2F4F9] rounded-[15px] lg:rounded-[30px] pt-7 md:pt-10 lg:pt-12  xl:pt-16 pb-11 lg:pb-14 wrapper-padding lg:!px-10 2xl:!px-14 flex flex-col items-center lg:items-start">
        <p className="text-[#101763] text-sm sm:text-lg md:text-xl leading-[150.6%] font-sora text-center lg:text-left mb-3">
          {" "}
          Need a {title} Development Company
          <br /> who can develop a professional {title.toLowerCase()} tailored
          to your goals?
        </p>

        <h1 className="ads-heading max-w-[75%]- text-center lg:text-left mb-5">
          Let’s Discuss the right{" "}
          <span className=" ads-header "> Technology Stack </span> for your{" "}
          {title === "Website" ? "Business" : ""} {title}
        </h1>

        <span className="ads-line "></span>

        <span className="text-[#101763] font-sora text-sm md:text-base lg:text-xl font-normal leading-[150.6%] block mt-5 mb-2">
          Our expertise
        </span>

        <p className="font-sora text-base md:text-xl font-bold leading-[150.6%] text-black text-center lg:text-left">
          {title === "Website"
            ? "React.js / Next.js, HTML 5, Node.js, Laravel, Headless CMS (Strapi, Sanity, Contentful), WordPress, and more"
            : "Hybrid App, iOS App, Android App, React Native App, Flutter App, Progressive Web App, and more"}
        </p>

        <button
          onClick={() => setShowForm(!showForm)}
          className="w-[200px] md:w-[229px] lg:hidden h-[50px] md:h-[59px] flex items-center justify-center bg-[#d81100] font-satoshi text-sm md:text-base font-medium leading-[154%] space-x-9 text-white rounded-lg mx-auto group hover:bg-[#101763] transition-all duration-500 mt-4 md:mt-5 "
        >
          Enquire Now
          <Image
            src={"/Contact/arrow-white.png"}
            alt="arrow_right"
            width={30}
            height={30}
            sizes="100vw"
            className="w-5 md:w-[33px] h-5 md:h-[33px] ml-2 group-hover:translate-x-3 transition-all"
          />
        </button>
      </section>

      <motion.div
        key="exitIntentPopup"
        variants={popupVariants}
        initial="hidden"
        animate={showForm ? "visible" : "hidden"}
        exit="exit"
        className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50  ${showForm ? "z-[99995555513]" : ""}`}
      >
        <ExitIntentPopup
          show={true}
          onClose={handleClosePopup}
          pageSpecific={true}
        >
          <MobileAdsForm />
        </ExitIntentPopup>
      </motion.div>
    </>
  );
};

export default AdsSectionOne;
