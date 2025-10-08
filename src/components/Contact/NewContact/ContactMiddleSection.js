import Link from "next/link";
import Phone from "../../../../public/Contact/call.svg";
import email from "../../../../public/Contact/mail.svg";
import location from "../../../../public/Contact/location.svg";

import facebook from "../../../../public/Contact/contct/fb.svg";
import instagram from "../../../../public/Contact/contct/insta.svg";
import linkedin from "../../../../public/Contact/contct/link.svg";

import React from "react";
import Image from "next/image";

const ContactMiddleSection = ({ data }) => {
  return (
    <div className="wrapper-padding mt-10 md:mt-[75px] lg:mt-[65px]  ">
      <div className="flex md:items-center justify-center flex-col">
        <h2
          className="text-[#101763] md:text-center font-sora text-3xl md:text-4xl lg:text-[40px] font-normal leading-[140%] w-[80%] lg:w-[551px] mb-4 md:mb-7 "
          style={{
            lineHeight: "140%",
          }}
        >
          Let<span className="text-[#d81100]">’</span>s create something great
          together.
        </h2>
        <div className="bg-[#d81100] w-[76px] h-[6px]" />
      </div>

      <div className="flex items-start md:items-center flex-col md:flex-row justify-center gap-x-10 gap-y-5 md:gap-y-0  lg:gap-x-14 mt-6 sm:mt-7 mb-3">
        {data?.address_list?.map((item, index) => {
          return (
            <div key={index + 1} className="flex flex-col gap-y-3">
              <p className="text-[#101763] font-satoshi text-lg md:text-xl font-medium leading-[154%] ">
                {item?.title}
              </p>
              <div className="flex space-x-2">
                <Image
                  src={Phone}
                  alt="phone"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="h-[15px] w-[15px] mt-2 "
                />
                <div className="flex items-center gap-2 flex-col sm:flex-row ">
                  <Link
                    href={`tel:${item.phone_number}`}
                    className="text-[#101763] font-satoshi text-[15px] md:text-base font-medium leading-[154%]"
                    rel="nofollow"
                  >
                    {item?.phone_number}
                  </Link>

                  {item?.landline_number && (
                    <>
                      <span className="text-[#101763] font-satoshi text-[15px] md:text-base font-medium leading-[154%] hidden sm:block">
                        |
                      </span>
                      <Link
                        href={`tel:${item?.landline_number}`}
                        rel="nofollow"
                        className="text-[#101763] font-satoshi text-[15px] md:text-base font-medium leading-[154%]"
                      >
                        {item?.landline_number}
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <div className="flex  space-x-3 ">
                <Image
                  src={email}
                  alt="email"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="h-[15px] w-[15px] mt-2 "
                />
                <Link
                  href={`mailto:${item?.email_address}`}
                  className="text-[#101763] font-satoshi text-[15px] md:text-base font-medium leading-[154%]"
                  rel="nofollow"
                >
                  {item?.email_address}
                </Link>
              </div>
              <div className="flex space-x-3 ">
                <Image
                  src={location}
                  alt="location"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="h-[15px] w-[15px] mt-2 "
                />
                <Link
                  href={item?.map_link}
                  target="_blank"
                  className=""
                  passHref
                  rel="nofollow"
                  legacyBehavior
                >
                  <div
                    className="!leading-[1.7] text-[#101763] font-satoshi text-[15px] md:text-base font-medium  max-w-[320px]"
                    dangerouslySetInnerHTML={{ __html: item?.address }}
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactMiddleSection;
