import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as motion from "motion/react-client";
import { disableImageOptimization } from "@/util/constants";

const ServiceSubBanner = ({ image, heading, desc }) => {
  return (
    <div
      className=" mt-[90px] md:mt-[110px] relative
    "
    >
      <Image
        src={image}
        alt={heading}
        sizes="100vw"
        width={1200}
        height={400}
        priority
        loading="eager"
        className="w-full h-[400px] lg:h-full object-cover"
        unoptimized={disableImageOptimization}
      />

      <div className="wrapper-padding absolute w-full bottom-7 lg:bottom-14 z-20 flex flex-col lg:flex-row  lg:justify-between items-center gap-x-5 space-y-3 lg:space-y-5 ">
        <div className="space-y-3 lg:space-y-5 lg:max-w-[80%]">
          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="font-sora text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center lg:text-left "
          >
            {heading}
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="font-sora text-white text-lg md:text-xl lg:text-2xl text-center lg:text-left font-semibold max-w-[1200px]"
          >
            {desc}
          </motion.p>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <Link
            href="#contact"
            className="bg-[#d81100] rounded-[10px] text-white font-satoshi text-sm md:text-base font-medium leading-[154%] py-4 px-6 flex object-center gap-x-14 group w-fit "
          >
            Start your project{" "}
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>

      <div className="bg-service-sub_grad absolute bottom-0 left-0 w-full h-full" />
    </div>
  );
};

export default ServiceSubBanner;
