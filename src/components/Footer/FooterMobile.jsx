"use client";
import React, { useState } from "react";
import add from "../../../public/Footer/add.svg";
import Link from "next/link";
import Image from "next/image";

const FooterMobile = ({ links }) => {
  const [isServeOpen, setIsServeOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  const toggleServe = () => {
    setIsServeOpen((prev) => !prev);
    setIsServiceOpen(false);
    setIsConnectOpen(false);
  };

  const toggleService = () => {
    setIsServiceOpen((prev) => !prev);
    setIsServeOpen(false);
    setIsConnectOpen(false);
  };

  const toggleConnect = () => {
    setIsConnectOpen((prev) => !prev);
    setIsServeOpen(false);
    setIsServiceOpen(false);
  };
  return (
    <div>
      {/* We Serve In Section */}
      <div>
        <div
          className={`border   ${isServeOpen ? "border-b-0" : "border-[#4c4c4c]"} border-r-0 border-l-0 cursor-pointer`}
        >
          <button
            className="text-white font-satoshi text-base font-semibold leading-[150%] flex justify-between w-full py-4"
            onClick={toggleServe}
            aria-expanded={isServeOpen}
          >
            {links[0]?.title}
            <Image
              src={add}
              alt="add"
              className={`h-[24px] w-[24px] transition-transform duration-300 ${
                isServeOpen ? "rotate-45" : ""
              }`}
            />
          </button>
        </div>
        <div
          className={`flex flex-col space-y-4 transition-all duration-300 overflow-hidden ${
            isServeOpen
              ? "max-h-[500px] opacity-100 py-4 border border-b-[#4c4c4c] border-r-0 border-l-0 border-t-0"
              : "max-h-0 opacity-0"
          }`}
        >
          {links[0]?.children?.map((item, index) => (
            <Link
              key={index}
              title={item?.attr_title}
              className="text-white font-satoshi text-base font-normal leading-[150%] flex justify-between w-full"
              href={item?.url}
            >
              {item?.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div>
        <div
          className={`border    ${isServiceOpen ? "border-b-0" : "border-[#4c4c4c]"} border-r-0 border-l-0 border-t-0`}
        >
          <button
            className="text-white font-satoshi text-base font-semibold leading-[150%] flex justify-between w-full py-4"
            onClick={toggleService}
          >
            {links[1]?.title}
            <Image
              src={add}
              alt="add"
              className={`h-[24px] w-[24px] transition-transform duration-300 ${
                isServiceOpen ? "rotate-45" : ""
              }`}
            />
          </button>
        </div>
        <div
          className={`flex flex-col space-y-4 transition-all duration-300 overflow-hidden ${
            isServiceOpen
              ? "max-h-[500px] opacity-100 py-4 border border-b-[#4c4c4c] border-r-0 border-l-0 border-t-0"
              : "max-h-0 opacity-0"
          }`}
        >
          {links[1]?.children?.map((item, index) => (
            <Link
              key={index}
              title={item.attr_title}
              className="text-white font-satoshi text-base font-normal leading-[150%] flex justify-between w-full"
              href={item.url}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <div
          className={`border  ${isConnectOpen ? "border-b-0" : "border-[#4c4c4c]"} border-r-0 border-l-0 border-t-0`}
        >
          <button
            className="text-white font-satoshi text-base font-semibold leading-[150%] flex justify-between w-full py-4"
            onClick={toggleConnect}
          >
            Connect
            <Image
              src={add}
              alt="add"
              className={`h-[24px] w-[24px] transition-transform duration-300 ${
                isConnectOpen ? "rotate-45" : ""
              }`}
            />
          </button>
        </div>
        <div
          className={`flex flex-col space-y-4 transition-all duration-300 overflow-hidden ${
            isConnectOpen
              ? "max-h-[500px] opacity-100 py-4 border border-b-[#4c4c4c] border-r-0 border-l-0 border-t-0"
              : "max-h-0 opacity-0"
          }`}
        >
          <Link
            href="mailto:info@chevalme.com"
            className="text-white font-satoshi text-base font-normal leading-[150%] flex justify-between w-full"
          >
            info@chevalme.com
          </Link>
          <Link
            href="tel:+971503560927"
            className="text-white font-satoshi text-base font-normal leading-[150%] flex justify-between w-full"
          >
            +971 50 356 0927
          </Link>
          <Link
            target="_blank"
            href="https://maps.app.goo.gl/Y26or1kGZwuEGq5s6"
            className="text-white font-satoshi text-base font-normal leading-[150%] flex justify-between w-full"
          >
            Suite 1, 101, Capital Golden Tower, <br /> Business Bay, Dubai, UAE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
