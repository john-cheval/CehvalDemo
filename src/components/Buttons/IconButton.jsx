"use client";
import gsap from "gsap";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import React, { useEffect } from "react";

const DarkButton = ({ link, color = false }) => {
  useEffect(() => {
    const buttons = gsap.utils.toArray(".animated-button");
    buttons.forEach((item) => {
      let icon = item.querySelector(".icon-wrapper");
      let tl = gsap.timeline({ paused: true });

      tl.to(icon, {
        duration: 0.2,
        xPercent: 150,
        yPercent: -150,
        ease: "power2.in",
      });
      tl.set(icon, { xPercent: -150, yPercent: 150 });
      tl.to(icon, { duration: 0.2, xPercent: 0, yPercent: 0 });

      item.addEventListener("mouseenter", () => tl.play(0));
    });
  }, []);

  return (
    <Link
      href={link}
      className={`animated-button flex items-center font-satoshi justify-center border border-black text-base md:text-lg font-medium ${
        color ? "text-[#101763]" : "text-black"
      } rounded-[4px] bg-white hover:bg-[#d81100] hover:text-white hover:border-none mt-5  px-6 py-6  transition-all duration-300 overflow-hidden relative`}
    >
      {/* Icon wrapper for animation */}
      <span className="icon-wrapper absolute w-full h-full flex items-center justify-center">
        <ArrowUpRight className="w-6 h-6" />
      </span>
    </Link>
  );
};

export default DarkButton;
