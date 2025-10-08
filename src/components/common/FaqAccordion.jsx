"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqAccordion = ({ title, faqList }) => {
  return (
    <div className="bg-white w-full">
      <div className="wrapper-padding py-12-- lg:py-20-- md:pb-14 pt-8 md:pt-12 w-full ">
      <div className=" col-span-12-- flex flex-col space-y-5 md:space-y-10 xl:space-y-14">
        <h4 className="font-sora text-center md:text-left font-semibold leading-tight text-[#101763] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h4>
      </div>

      <div className="lg:col-span-6 col-span-12">
        <Accordion
          type="single"
          collapsible
          className={`w-full `}
          defaultValue="item-0"
        >
          {faqList?.map((data, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={` ${index === 0 ? "border-t-0" : "border-t"} py-3 border-[#101763] border-b-0`}
            >
              <AccordionTrigger
                className="relative text-xl md:text-2xl lg:text-3xl font-normal leading-[140%] font-sora text-[#101763] 
                transition-all duration-300 ata-[state=open]:font-bold   "
              >
                {data?.title}
              </AccordionTrigger>
              <AccordionContent className="font-satoshi text-center sm:text-left   text-base text-[#191919]   transition-all duration-300  ">
                <p
                  className="accList  "
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
};

export default FaqAccordion;
