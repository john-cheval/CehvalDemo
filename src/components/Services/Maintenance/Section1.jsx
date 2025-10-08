import React from "react";
import image1 from "../../../../public/ServicesInner/Maintenance/1.png";
import vectorImage from "../../../../public/ServicesInner/Maintenance/Vector.svg";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const MaintenancePageSectionOne = ({ topImage, section, topMobileBanner }) => {
  const { title, link, sub_heading, description } = section?.sub_sections[0];
  return (
    <section className="pt-28 md:pt-36 wrapper-padding  ">
      <Image
        src={topImage || image1}
        alt="Image1"
        width={1200}
        height={500}
        className="rounded-tr-[15px] rounded-tl-[15px] w-full h-auto hidden sm:block"
      />

      <Image
        src={topMobileBanner || image1}
        alt="Image1"
        width={1200}
        height={500}
        className="rounded-tr-[15px] rounded-tl-[15px] w-full h-auto  sm:hidden"
      />

      <div className=" bg-[#F3F8FB] pt-6 md:pt-8 lg:pt-12 xl:pt-14 pb-8 md:pb-10 lg:pb-12 xl:pb-16 px-5 md:px-7 lg:px-10 2xl:px-14 rounded-br-[15px] rounded-bl-[15px] grid grid-cols-1 lg:grid-cols-2 gap-y-3 lg:gap-y-0 lg:gap-x-5 2xl:gap-x-8 relative z-50- overflow-hidden">
        <h2 className="text-main main-heading-1  font-semibold text-center lg:text-left relative z-50">
          {title}
        </h2>

        <div className="space-y-2 md:space-y-3 text-center lg:text-left relative z-50 ">
          <h5 className="heading-secondary !text-sec">{sub_heading}</h5>

          <div
            className=" text-main main-description "
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <Link
            href={link}
            className="rounded-[10px] bg-sec text-white text-base font-medium leading-[154%] py-3 pl-5 pr-3  flex items-center w-fit group gap-x-3 md:gap-x-5 lg:gap-x-10 mx-auto lg:mx-0"
          >
            Enquire Now
            <ArrowRight className=" group-hover:translate-x-2 transition-transform duration-300 !font-normal !text-sm" />
          </Link>
        </div>
        <Image
          src={vectorImage}
          alt="vectorImage"
          width={1000}
          height={400}
          className="absolute top-0 left-0  h-full z-10 w-fit"
        />
      </div>
    </section>
  );
};

export default MaintenancePageSectionOne;
