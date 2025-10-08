"use client";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect } from "react";

const DarkButton = ({
  link,
  color = false,
  text,
  transform = false,
  bgWhite = false,
}) => {
  useEffect(() => {
    const buttons = gsap.utils.toArray(".animated-button");
    buttons.forEach((item) => {
      let span = item.querySelector("span");
      let tl = gsap.timeline({ paused: true });

      tl.to(span, { duration: 0.2, yPercent: -150, ease: "power2.in" });
      tl.set(span, { yPercent: 150 });
      tl.to(span, { duration: 0.2, yPercent: 0 });

      item.addEventListener("mouseenter", () => tl.play(0));
    });
  }, []);
  return (
    <Link
      href={link}
      // aria-label={text}
      className={`animated-button  flex items-center font-satoshi justify-center border border-black text-sm md:text-lg font-medium ${color ? "text-[#101763]" : "text-black"} rounded-[4px]     mt-5  w-[165px] lg:w-[201px] h-[45px] md:h-[61px] transition-all duration-300 overflow-hidden ${transform ? "capitalize" : ""} relative ${bgWhite ? "bg-white" : ""}`}
    >
      <span className="absolute w-full h-full flex items-center justify-center">
        {text}
      </span>
    </Link>
  );
};

export default DarkButton;
