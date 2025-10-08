import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as motion from "motion/react-client";

const SectionHero = ({ title, desc, bannerImg, bannerVideo, bannerList }) => {
  return (
    <section className="wrapper-padding relative w-screen bg-white-- bg-ads-hero-grad h-fit-- h-[100dvh]-- pt-28 pb-10 md:pb-14 md:py-36 pb-7-- ">
      <div className="grid grid-cols-12 gap-y-10 md:gap-y-0 relative z-50">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.4,
            ease: "easeIn",
          }}
          className="col-span-12 md:col-span-5 flex flex-col gap-y-3 md:gap-y-4 justify-center items-center md:items-start"
        >
          <h1
            style={{
              lineHeight: 1.1,
            }}
            className="text-main font-sora text-2xl sm:text-3xl lg:text-4xl text-center md:text-left xl:text-[50px] font-semibold tracking-[-.5px]  max-w-[558px]"
          >
            {title}
          </h1>
          <p className="text-black font-sora text-sm md:text-base font-light leading-[202%] text-center md:text-left">
            {desc}
          </p>
          <ul className="flex  gap-3 flex-wrap justify-center md:justify-start">
            {bannerList?.map((acc, index) => (
              <li
                className="text-main font-sora text-sm sm:text-base md:text-lg lg:text-xl leading-[135%] tracking-[-0.2px] flex gap-x-3 "
                key={index}
              >
                {acc} {index !== bannerList?.length - 1 && <span>|</span>}
              </li>
            ))}
          </ul>

          <Link
            href={"#contact"}
            className="bg-sec rounded-[10px] py-3 md:py-4 px-5 md:px-7 text-white font-satoshi text-sm md:text-base font-medium leading-[154%] flex items-center gap-x-2 w-fit group mt-3 md:mt-5"
          >
            Book a free consultation{" "}
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.4,
            ease: "easeIn",
          }}
          className=" col-span-12 md:col-span-7 relative z-50"
        >
          <div className="video-mask ">
            <video
              muted
              autoPlay
              loop
              playsInline
              src={bannerVideo}
              width="1920"
              height="1080"
            />
          </div>
        </motion.div>
      </div>
      <Image
        src={"/Ads/Vector.svg"}
        width={218}
        height={316}
        sizes="100vw"
        priority
        className="w-full h-auto max-w-[218px] max-h-[316px] object-cover absolute top-0 right-0"
      />
    </section>
  );
};

export default SectionHero;
