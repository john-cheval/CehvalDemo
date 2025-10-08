import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Benifits = ({ heading, description, link, banner }) => {
  return (
    <div className="grid relative grid-cols-1 md:grid-cols-2 w-full rounded-lg overflow-hidden ">
      <div
        className="hidden md:block"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="absolute right-0 top-0 h-full w-full md:w-[70%] bg-gradient-to-r from-transparent to-black to-0% md:to-[30%] z-20"></div>
      <div className="flex flex-col justify-center px-8 py-10 md:py-20 relative z-50 text-white">
        <p
          className="font-sora text-2xl text-center md:text-left font-semibold leading-[153%]  mb-4"
          style={{
            background: "linear-gradient(90deg, #FF0C15 0%, #FFF 13.42%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {heading}
        </p>
        <div
          className="mb-6 text-white locBul font-sora text-sm mx-auto md:mx-0"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <Link
          href={link}
          className="text-white bg-[#FF0C15] px-6 py-4 font-sora text-sm flex items-center gap-x-2 group rounded-full w-fit mx-auto md:mx-0"
        >
          Explore more today{" "}
          <ArrowRight className="group-hover:translate-x-2 transition-all duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default Benifits;
