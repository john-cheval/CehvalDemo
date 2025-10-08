"use client";
import React, { useRef } from "react";
import CustomMarquee from "../Home/Section10/CustomMarquee";
import Image from "next/image";
import { disableImageOptimization } from "@/util/constants";

const SectionClients = ({ clients }) => {
  const swiperRef = useRef();
  return (
    <section>
      <div className="relative w-full">
        <div className="overflow-hidden md:pt-12 w-full">
          <CustomMarquee ref={swiperRef} speed={12} direction="right">
            {clients?.map((item, index) => (
              <div
                key={index}
                className="w-[10rem] sm:w-[13rem] mx-4 flex-none h-28 relative self-center object-center object-contain"
              >
                <Image
                  src={item.image}
                  fill
                  alt={`client-${index}`}
                  priority={false}
                  unoptimized={disableImageOptimization}
                  className="object-contain brightness-95 opacity-80 "
                  sizes="(max-width: 640px) 10rem, 13rem"
                />
              </div>
            ))}
          </CustomMarquee>
        </div>
      </div>
    </section>
  );
};

export default SectionClients;
