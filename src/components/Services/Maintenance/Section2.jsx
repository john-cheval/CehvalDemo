import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import image1 from "../../../../public/ServicesInner/Maintenance/image2.png";

const MaintenancePageSectionTwo = ({ section }) => {
  const { title, button_link_text, button_link, description, image } = section;
  return (
    <section className="wrapper-padding relative h-full pt-5 md:pt-8  lg:pt-12">
      <div className="relative  rounded-[8px] box h-full grid grid-cols-12 overflow-hidden">
        <div className="relative z-50 pt-5 md:pt-8 lg:pt-12 xl:pt-14 pb-5 md:pb-8 lg:pb-14 xl:pb-[70px] px-5 md:px-8 lg:pr-0 lg:pl-8 xl:pl-14  col-span-12  lg:col-span-4 space-y-3 md:space-y-4 lg:space-y-5 text-center lg:text-left">
          <h3 className="heading-2">{title}</h3>
          <div
            className=" text-black main-description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <Link
            href={button_link}
            className="rounded-[10px] bg-sec text-white text-base font-medium leading-[154%] py-3 pl-5 pr-3  flex items-center w-fit group gap-x-3 md:gap-x-5 lg:gap-x-10 mx-auto lg:mx-0"
          >
            {button_link_text}
            <ArrowRight className=" group-hover:translate-x-2 transition-transform duration-300 !font-normal !text-sm" />
          </Link>
        </div>
        <div className="col-span-12  lg:col-span-8 relative z-50 lg:mt-20 ">
          <Image
            src={image?.url || image1}
            alt={title || "image-1"}
            width={750}
            height={350}
            className="w-full h-auto  "
          />
        </div>
      </div>
    </section>
  );
};

export default MaintenancePageSectionTwo;
