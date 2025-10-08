import Image from "next/image";
import React from "react";
import CraftImage from "../../../public/Header/craft.png";
import { ServiceList } from "./ServiceListN";
import { disableImageOptimization } from "@/util/constants";

const CraftCenter = ({ link, closeMegaMenu }) => {
  const {
    3812: craft,
    3810: uiUx2,
    3808: branding2,
    3809: customDesign2,
  } = link;

  const sections = {
    "UI/UX": uiUx2,
    Branding: branding2,
    "Custom Design": customDesign2,
  };

  return (
    <>
      <div
        id="rightSideCraft"
        className="col-span-6 bigMenuCol px-9 p-10 flex bigMain-gap-- gap-x-24-- bigMenu-bg"
      >
        {craft?.map((section) => {
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

      <div className="relative col-span-4 w-full big_image h-full">
        <Image
          src={CraftImage}
          alt="craftImage"
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

export default CraftCenter;
