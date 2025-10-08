"use client";

import React, { useState, useEffect } from "react";

import AdsSectionTwo from "@/components/Ads/Sections/Section2";
import AdsSection3 from "@/components/Ads/Sections/Section3";
import AdsSection4 from "@/components/Ads/Sections/Section4";
import AdsSection5 from "@/components/Ads/Sections/Section5";
import ExitIntentPopup from "@/components/shared/popup";
import { useExitIntent } from "use-exit-intent";
import AdsContactForm from "@/components/Ads/AdsContactForm";
import AdsSectionOne from "@/components/Ads/Sections/AdsSectionOne";
import AdsSectionSix from "@/components/Ads/Sections/Section6";
import AdsFooter from "@/components/Ads/Footer/AdsFooter";
import { motion } from "motion/react";
import { disableImageOptimization } from "@/util/constants";
import Image from "next/image";
// import Link from "next/link";
import AdsPopOverForm from "@/components/Ads/AdsPopOverForm";

export default function WebsiteDevelopmentClientContent({
  googleReviews,
  clientList,
  memeber,
}) {
  const exitIntentConfig = {
    // cookie: {
    //   daysToExpire: 30,
    //   key: "use-exit-intent",
    // },
    desktop: {
      triggerOnIdle: false,
      useBeforeUnload: true,
      triggerOnMouseLeave: true,
      // delayInSecondsToTrigger: 1,
      mouseLeaveDelayInSeconds: 0,
    },
    mobile: {
      triggerOnIdle: false,
      // delayInSecondsToTrigger: 1,
      // mouseLeaveDelayInSeconds: 1,
      triggerOnMouseLeave: 0,
    },
  };
  const [showPopup, setShowPopup] = useState(false);
  const { registerHandler } = useExitIntent(exitIntentConfig);

  useEffect(() => {
    registerHandler({
      id: "exitIntentOfferPopup",
      handler: () => {
        if (!showPopup) {
          setShowPopup(true);
        }
      },
    });
  }, [registerHandler]);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const popupVariants = {
    hidden: { y: -500, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
    exit: { y: 500, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-x-7- bg-white pt-20 sm:pt-24 lg:pt-[90px] md:pt-[110px] ">
        <aside className="lg:col-span-8 pl-5 sm:pl-10 md:pl-12 pr-7 col-span-12 space-y-3 md:space-y-5  lg:space-y-8">
          <AdsSectionOne title="Website" />
          <AdsSectionTwo title="Website" />
          <AdsSection3 />
          <AdsSection4 teamList={memeber} />
          <AdsSection5 reviews={googleReviews} />
          <AdsSectionSix clientsData={clientList} />
        </aside>
        <aside
          className="hidden lg:block lg:col-span-4 pr-5 sm:pr-10 md:pr-12 "
          style={{
            position: "sticky",
            top: "80px",
            alignSelf: "start",
            zIndex: "1111",
          }}
        >
          <AdsContactForm />
        </aside>

        <div className="flex lg:hidden fixed bottom-8 md:bottom-5 justify-center w-full z-[1113]">
          <a
            href="https://api.whatsapp.com/send/?phone=971503560927&text=Hello%21+I+am+interested+in+your+service&type=phone_number&app_absent=0"
            target="_blank"
            aria-label="Go to Whats app"
            className="bg-[#1AC500] flex items-center gap-x-1 py-4 md:py-6 pl-5 pr-2 border border-white rounded-l-[50px]"
          >
            <Image
              className="w-6 object-contain"
              src={"/Ads/new/wagtsapp.svg"}
              alt="WhatsApp"
              width={32}
              height={32}
              unoptimized={disableImageOptimization}
            />
            <span className=" font-sora text-sm text-white leading-normal">
              WhatsApp
            </span>
          </a>

          <a
            href={"tel:+971503560927"}
            aria-label="Phone"
            className="bg-[#101763] flex items-center gap-x-1 py-4 md:py-6 pr-10 pl-8 border border-white rounded-r-[50px]"
          >
            <Image
              className="w-6 object-contain"
              src={"/Ads/new/call.svg"}
              alt="call"
              width={32}
              height={32}
              unoptimized={disableImageOptimization}
            />
            <span className=" font-sora text-sm text-white leading-normal">
              Call
            </span>
          </a>
        </div>

        <AdsFooter />
      </div>

      <motion.div
        key="exitIntentPopup"
        variants={popupVariants}
        initial="hidden"
        animate={showPopup ? "visible" : "hidden"}
        exit="exit"
        className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50  ${showPopup ? "z-[99995555513]" : ""}`}
      >
        <ExitIntentPopup
          show={true}
          onClose={handleClosePopup}
          pageSpecific={true}
        >
          <AdsPopOverForm />
        </ExitIntentPopup>
      </motion.div>
    </>
  );
}
