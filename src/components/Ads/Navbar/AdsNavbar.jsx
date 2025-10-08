import { disableImageOptimization } from "@/util/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AdsNavbar = ({ scroll }) => {
  return (
    <nav
      className={`wrapper-padding ${scroll ? "mt-0 py-5 md:py-6 " : "mt-28 lg:mt-20"}  flex justify-between items-center transition-all duration-300`}
    >
      <Link href={"/"}>
        <Image
          src={"/logo.svg"}
          width={124}
          height={26}
          sizes="100vw"
          className="h-6  object-contain"
          alt="logo"
          priority
        />
      </Link>

      <ul className="flex items-center gap-x-8">
        <li>
          <a href={"tel:+971 50 356 0927"} aria-label="Phone">
            <p
              className={`hover:text-[#D81100] transition-colors duration-300 font-satoshi text-base font-semibold flex items-center gap-2  text-[#000]`}
            >
              <Image
                className="h-[16px] w-[16px]  object-cover"
                src={"/Header/call.svg"}
                alt="phone"
                sizes="100vw"
                height={20}
                width={20}
              />
              <span className="hidden sm:block">+971 50 356 0927</span>
            </p>
          </a>
        </li>

        <li>
          <a href={"mailto:info@chevalme.com"} aria-label="Email">
            <p
              className={`hover:text-[#D81100] transition-colors duration-300 font-satoshi text-base font-semibold flex items-center gap-2  text-[#000]`}
            >
              <Image
                className="h-[16px] w-[16px]  object-cover"
                src={"/Header/mail.svg"}
                alt="Mail"
                sizes="100vw"
                height={20}
                width={20}
              />
              <span className="hidden sm:block">info@chevalme.com</span>
            </p>
          </a>
        </li>
      </ul>

      <div className="fixed hidden lg:block bottom-4 right-3 xl:bottom-24 xl:right-6 z-[10000000]">
        <Link
          // href="https://web.whatsapp.com/send?phone=%2B971503560927&text=Hello!+I+am+interested+in+your+service"
          href=" https://api.whatsapp.com/send/?phone=971503560927&text=Hello%21+I+am+interested+in+your+service&type=phone_number&app_absent=0"
          target="_blank"
          aria-label="Go to Whats app"
        >
          <div className="whapp animated pulse">
            <div className="whapp-btn">
              <Image
                className="w-8 object-contain"
                src={"/whatsapp.png"}
                alt="WhatsApp"
                width={32}
                height={32}
                // unoptimized={disableImageOptimization}
              />
              <span className="red-dot"></span>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default AdsNavbar;
