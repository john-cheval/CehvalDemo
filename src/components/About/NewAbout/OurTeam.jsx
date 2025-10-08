"use client";
import React from "react";
import linkedin from "../../../..//public/About/Group.png";
import Image from "next/image";
import Link from "next/link";
import OurTeamMobile from "./OurTeamMobile";
import OurValues from "./OurValues";
import { disableImageOptimization } from "@/util/constants";

const OurTeam = ({ title, team, data }) => {
  return (
    <div
      className="wrapper-padding bg-about-member-gradient lg:rounded-tr-[60px] lg:rounded-tl-[60px] pt-14 -mt-16 relative"
      style={{ zIndex: 4 }}
    >
      <h1 className="mb-8 text-center text-[#101763] lg:text-start  font-sora text-3xl sm:text-4xl lg:text-6xl font-normal leading-[133%] tracking-[-1.76px] heading2">
        {title}
      </h1>

      <div className="containers">
        {team?.map((item, index) => (
          <div key={index} className="cards active">
            <>
              <div className="image-container">
                <Image
                  className="card-image"
                  src={item?.image}
                  alt={item?.title}
                  width={50}
                  height={50}
                  sizes="100vw"
                  // unoptimized={disableImageOptimization}
                />
              </div>
              <div className="content font-satoshi">
                <h1>{item?.title}</h1>
                <h3>{item?.position}</h3>
                <div
                  className="space-y-3 para team-des"
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                ></div>

                {item?.linkedin_link && (
                  <Link
                    href={item?.linkedin_link}
                    className="h-12 w-12 flex items-center justify-center border rounded-full mt-5"
                  >
                    <Image
                      src={linkedin}
                      alt="linkedin"
                      className="w-4 h-auto"
                      height={10}
                      width={10}
                      sizes="100vw"
                    />
                  </Link>
                )}
              </div>
            </>
            {/* )} */}

            {/* {activeCard !== index && (
              <div className="non-active-content font-satoshi relative">
                <h1 className=" mr-[20px] xl:mr-[47px] mt-10 z-20">
                  {item?.title}
                </h1>
                <h3 className="mt-10 z-20">{item?.position}</h3>

                <div className="h-full w-full absolute inset-0 z-10 ">
                  <Image
                    className="object-cover h-full w-full rotate-180"
                    src={gradient}
                    alt={item?.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
              </div>
            )} */}
          </div>
        ))}
      </div>

      <div className="lg:hidden">
        <OurTeamMobile team={team} />
      </div>

      <OurValues valuesData={data} />
    </div>
  );
};

export default OurTeam;
