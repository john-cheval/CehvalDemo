import { servicesDataSub } from "@/data/servicesData";
import { disableImageOptimization } from "@/util/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServicesSection = ({ section }) => {
  return (
    <section className="wrapper-padding pt-10 md:pt-14 lg:pt-[74px]">
      <div>
        <h2 className="text-main  font-sora text-2xl sm:text-3xl lg:text-[40px] font-semibold leading-[135%] tracking-[-0.4px] text-center md:text-left">
          {section?.title}
        </h2>
        <span className="bg-sec w-16 h-1 block mt-2 md:mt-3 mx-auto md:mx-0" />
      </div>

      <div className="pt-10 md:pt-16 pb-8 md:pb-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-9 gap-y-7 md:gap-y-14 lg:gap-y-20">
        {section?.sub_sections?.map((data, index) => (
          <div
            key={data?.id || index}
            className="border-b-- pb-5 md:pb-10 border-[#D9D9D9]-- relative flex flex-col items-center md:items-start"
          >
            <div>
              <Image
                src={data?.image?.url}
                alt={data?.title || "image"}
                sizes="100vw"
                height={54}
                width={67}
                // unoptimized={disableImageOptimization}
                className="w-full h-auto object-cover max-w-16"
              />
            </div>

            <div className="space-y-2 mt-5 md:mt-7">
              <p className="text-main font-sora text-lg sm:text-xl md:text-2xl font-semibold leading-[135%] tracking-[-0.25px] text-center md:text-left">
                {data?.title}
              </p>
              <div
                className="text-[#464646] font-sora  text-sm md:text-base font-light leading-[202%] max-w-[422px]-- text-center md:text-left"
                dangerouslySetInnerHTML={{ __html: data?.description }}
              ></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#D81100] to-[#101763]" />
          </div>
        ))}
      </div>

      <Link
        href={section?.button_link}
        className="bg-sec text-white rounded-[10px] flex items-center font-satoshi text-sm md:text-base font-medium leading-[154%] gap-x-10 md:gap-x-14 lg:gap-x-20 py-3 md:py-4 px-5 md:px-7 w-fit mx-auto group"
      >
        {section?.button_link_text}
        <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
      </Link>
    </section>
  );
};

export default ServicesSection;
