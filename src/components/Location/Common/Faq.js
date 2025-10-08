/** @format */

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function LocationFaq({ data }) {
  return (
    <div className="bg-white w-full">
      <div className="relative w-screen h-fit  py-12-- sm:pb-14 md:pb-16 text-[#101763]  overflow-x-hidden">
        <div className="relative max-w-screen wrapper-padding sm:py-0 py-10 w-full">
          <div className="relative flex flex-col space-y-5 md:space-y-10 h-fit w-full gap-x-14">
            <div className="w-full">
              <h3
                style={{}}
                className="font-sora font-semibold text-[#101763] text-3xl lg:text-4xl text-left  leading-normal "
              >
                <span
                  style={{
                    background:
                      "linear-gradient(92.09deg, #FF0C15 0.33%, #101763 26.13%)",

                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  FAQs
                </span>
              </h3>
            </div>

            <div className="w-full">
              <Accordion type="single" collapsible className="w-full">
                {data?.map((data, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className={` ${index === 0 ? "border-t-0" : "border-t"} py-3 border-[#101763] border-b-0`}
                  >
                    <AccordionTrigger className="text-lg sm:text-xl md:text-2xl text-[#101763] font-sora font-semibold  ">
                      {data?.question}
                    </AccordionTrigger>
                    <AccordionContent className="paragraphSize  text-black">
                      <p dangerouslySetInnerHTML={{ __html: data?.answer }}></p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationFaq;
