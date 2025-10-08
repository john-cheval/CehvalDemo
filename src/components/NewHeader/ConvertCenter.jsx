import Image from "next/image";
import React from "react";
import ConvertImage from "../../../public/Header/convert.png";
import { ServiceList } from "./ServiceListN";
import { disableImageOptimization } from "@/util/constants";

const ConvertCenter = ({ link, closeMegaMenu }) => {
  const { 3814: covert, 3833: SEO, 3834: SMM, 3832: DM } = link;
  const sections = {
    "Search Engine Optimization (SEO)": SEO,
    "Social Media Management": SMM,
    "Digital Marketing": DM,
  };
  return (
    <>
      <div
        id="rightSideConvert"
        className="col-span-7 bigMenuCol px-9 p-10 flex bigMain-gap-- gap-x-24-- bigMenu-bg"
      >
        {covert?.map((section) => {
          const { title, url, attr_title } = section;
          const sectionData = sections[title];

          return (
            <div className="w-[33.33%]" key={title}>
              <ServiceList
                title={title}
                data={sectionData}
                closeMegaMenu={closeMegaMenu}
                attribute_title={attr_title}
                url={url}
              />
            </div>
          );
        })}
      </div>

      <div className="relative col-span-3 w-full h-auto big_image">
        <Image
          src={ConvertImage}
          alt="codeImage"
          className="object-cover w-full h-full"
          height={0}
          width={0}
          sizes="100vw"
          unoptimized={disableImageOptimization}
        />
      </div>
    </>
  );
};

export default ConvertCenter;
