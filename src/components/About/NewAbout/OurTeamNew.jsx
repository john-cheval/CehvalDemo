import Image from "next/image";
import React from "react";
import linkedin from "../../../..//public/About/Group.png";
// import OurTeamMobile from "./OurTeamMobile";
import OurValues from "./OurValues";
import Link from "next/link";
import { disableImageOptimization } from "@/util/constants";

const OurTeamNew = ({ title, team, data }) => {
  return (
    <section className=" bg-about-member-gradient ">
      <div
        className="wrapper-padding border-top-- pt-14 -mt-16 relative"
        style={{ zIndex: 4 }}
      >
        <h1 className="mb-8 text-center text-[#101763] lg:text-start  font-sora text-3xl sm:text-4xl lg:text-6xl font-normal leading-[133%] tracking-[-1.76px] heading2">
          {title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {team?.map((item, index) => (
            <div
              key={index + 1}
              className="bg-white rounded-[30px] overflow-hidden p-6 lg:p-12 grid grid-cols-12 gap-x-6"
            >
              <div className="overflow-hidden col-span-12 lg:col-span-3 mx-auto lg:mx-0 mb-5 md:mb-0 border-[#ececec]">
                <Image
                  className="rounded-full w-[100px] h-[100px] md:w-[148px] md:h-[148px] object-cover"
                  src={item?.image}
                  alt={item?.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  // unoptimized={disableImageOptimization}
                />
              </div>

              <div className="col-span-12 lg:col-span-9 text-center lg:text-left">
                <h1 className="text-[#101763] font-satoshi text-2xl md:text-[28px] font-medium leading-[154%] mb-1">
                  {item?.title}
                </h1>
                <h3 className="font-satoshi text-[#707070] text-lg font-medium leading-[154%] mb-2">
                  {item?.position}
                </h3>
                <div
                  className="space-y-3 para font-satoshi text-sm text-[#838383] team-des"
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                ></div>
                {item?.linkedin_link && (
                  <Link
                    href={item?.linkedin_link}
                    className="h-12 w-12 flex items-center justify-center border rounded-full mt-5 mx-auto lg:mx-0"
                  >
                    <Image
                      src={linkedin}
                      alt="linkedin"
                      className="w-4 h-auto"
                      height={0}
                      width={0}
                      sizes="100vw"
                    />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="lg:hidden">
        <OurTeamMobile team={team} />
      </div> */}

        <OurValues valuesData={data} />
      </div>
    </section>
  );
};

export default OurTeamNew;
