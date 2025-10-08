"use client";
import React, { useState } from "react";
import Image from "next/image";
import serviceAcc from "../../../../public/ServicesInner/serviceAcc.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { disableImageOptimization } from "@/util/constants";

function ServiceAccordion({ title, accoridion }) {
  const [selectedImage, setSelectedImage] = useState(accoridion?.[0]?.image);

  return (
    <div className="wrapper-padding pt-12 lg:pt-24 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-10 lg:gap-20 ">
        <div className="lg:col-span-6 col-span-12 flex flex-col space-y-5 md:space-y-10 xl:space-y-14">
          <h2 className="w-full font-sora text-2xl text-center md:text-start md:text-4xl leading-[135%] tracking-[-0.4px] text-[#101763] capitalize">
            {title}
          </h2>
          <div className="xl:w-[510px] w-full max-w-[600px] h-[400px] lg:h-auto lg:w-[402px] overflow-hidden rounded-[30px]">
            <Image
              src={serviceAcc}
              alt="serviceAcc"
              className="w-full h-full"
              width={500}
              height={300}
              sizes="100vw"
              // unoptimized={disableImageOptimization}
            />
          </div>
        </div>

        <div className="lg:col-span-6 col-span-12">
          <Accordion type="single" collapsible className=" w-full ">
            {accoridion?.map((data, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={` ${index === 0 ? "border-t-0" : "border-t"} py-3 border-[#cfcfcf] border-b-0`}
              >
                <AccordionTrigger
                  className="text-black font-sora text-xl lg:text-2xl xl:text-3xl font-normal leading-[135%] data-[state=open]:font-bold tracking-[-0.3px] "
                  onClick={() => setSelectedImage(data.image)}
                >
                  {data?.title}
                </AccordionTrigger>
                <AccordionContent className="paragraphSize text-[#191919] w-full text-center font-satoshi text-base">
                  <p
                    dangerouslySetInnerHTML={{ __html: data?.description }}
                  ></p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default ServiceAccordion;
