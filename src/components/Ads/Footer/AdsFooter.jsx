import Image from "next/image";
import React from "react";

const AdsFooter = () => {
  return (
    <footer className="relative z-[1000] w-screen h-fit text-white overflow-hidden bg-black md:bg-footer-bg footer-bg_image  bg-conver bg-no-repeat pb-16 lg:pb-0">
      <div className="w-full  pb-5 pt-10 md:pt-16 lg:pt-[86px]   wrapper-padding  ">
        <div className="absolute hidden md:block bg-footer-grad bottom-0 right-0 z-10" />
        <div className="flex flex-col">
          <div className="grid grid-cols-12 gap-3 lg:gap-4 xl:gap-6   ">
            {/* left */}
            <div className=" col-span-12 ">
              <div className="flex flex-col space-y-3">
                <p className="font-sora  font-light text-white  text-2xl md:text-4xl lg:text-5xl text-center lg:text-start footer-heading ">
                  Call us / text us,
                </p>
                <p
                  className="font-sora text-center lg:text-left font-normal text-3xl sm:text-4xl  md:text-5xl lg:text-6xl footer-heading-2"
                  style={{ textRendering: "optimizeSpeed" }}
                  id="lcp-heading"
                >
                  Let's get to work!
                </p>

                <a
                  href={"tel:+971 50 356 0927"}
                  className="font-sora text-center lg:text-left font-normal text-base sm:text-2xl md:text-3xl xl:text-[42px] pt-3 "
                >
                  +971 50 356 0927
                </a>
              </div>
            </div>
            {/* right */}
            <div className=" flex flex-col  col-span-12  ">
              <div className="flex  flex-col sm:flex-row items-center justify-start  gap-[20px] md:gap-[50px] 2xl:gap-[69px]  w-full pb-3 md:pb-14 pt-5 md:pt-8  z-50 footer_main- ">
                <div className="flex flex-col space-y-4 items-center justify-center lg:items-start lg:justify-start w-full lg:w-fit ">
                  <div>
                    <p className="font-satoshi  text-xl md:text-base font-medium  text-white mb-2 flex  ">
                      Connect
                    </p>
                    <Image
                      src={"/Footer/footer_line.svg"}
                      alt="line"
                      height={2}
                      width={44}
                      sizes="100vw"
                      className="w-11 h-auto mx-auto  lg:mx-0"
                      priority={false}
                    />
                  </div>
                  <div className="flex flex-col space-y-0 items-center justify-center lg:items-start lg:justify-start">
                    <a
                      className="cursor-pointer"
                      href={"mailto:info@chevalme.com"}
                    >
                      <p className="font-satoshi font-normal  border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all text-base sm:text-lg md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                        info@chevalme.com
                      </p>
                    </a>
                    <a className="cursor-pointer" href={"tel:+971503560927"}>
                      <p className="font-satoshi font-normal  border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all text-base sm:text-lg md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                        +971 50 356 0927
                      </p>
                    </a>

                    <a
                      target="_blank"
                      href={"https://maps.app.goo.gl/Y26or1kGZwuEGq5s6"}
                    >
                      <p className="font-satoshi font-normal  border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all text-base sm:text-lg md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3] text-center sm:text-start">
                        Suite 1, 101, Capital Golden Tower,
                        <br /> Business Bay, Dubai, UAE
                      </p>
                    </a>

                    <div className="flex flex-row space-x-3 !mt-3 md:!mt-2 ">
                      <a
                        target="_blank"
                        className="cursor-pointer border border-[#4c4c4c] hover:border-[#d81100] transition-all bg-[#272727] h-10 w-10 flex items-center justify-center rounded-full "
                        href={"https://www.facebook.com/chevalmiddleeast"}
                      >
                        <Image
                          src={"/Footer/social/fb.svg"}
                          height={12}
                          width={20}
                          sizes="100vw"
                          className="h-3 w-auto object-contain"
                          alt="facebook"
                          priority={false}
                        />
                      </a>

                      <a
                        target="_blank"
                        className="cursor-pointer border border-[#4c4c4c] hover:border-[#d81100] transition-all bg-[#272727] h-10 w-10 flex items-center justify-center rounded-full"
                        href={"https://www.instagram.com/chevalmiddleeast/"}
                      >
                        <Image
                          src={"/Footer/social/instagram.svg"}
                          height={12}
                          width={20}
                          sizes="100vw"
                          className="h-3 w-auto object-contain"
                          alt="instagram"
                          priority={false}
                        />
                      </a>

                      <a
                        target="_blank"
                        className="cursor-pointer border border-[#4c4c4c] hover:border-[#d81100] transition-all bg-[#272727] h-10 w-10 flex items-center justify-center rounded-full"
                        href={
                          "https://www.linkedin.com/company/chevalmiddleeast/"
                        }
                      >
                        <Image
                          src={"/Footer/social/linkedin.svg"}
                          height={12}
                          width={20}
                          sizes="100vw"
                          className="h-3 w-auto object-contain"
                          alt="aedin"
                          priority={false}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full pt-0 sm:pt-10-- z-50 pb-5 block">
            <div
              className={
                "grid grid-cols-12 gap-3 lg:gap-4 xl:gap-6 justify-items-start "
              }
            >
              <div className="flex flex-col md:flex-row  col-span-12 w-full md:w-fit  md:col-span-9 space-x-4  xl:space-x-5 mt-5 xl:mt-0 items-end- items-center ">
                <p className="font-satoshi  border-b border-b-transparent hover:border-b-transparent  text-sm md:text-base text-white font-normal  lg:leading-[2.3] ">
                  Cheval 2025 All rights reserved
                </p>
                <a
                  href={"/privacy-policy"}
                  className="font-satoshi font-normal  border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all text-sm md:text-base text-white leading-[2.3] lg:leading-[2.3] cursor-pointer"
                >
                  Privacy Policy
                </a>
              </div>

              {/* <div className="col-span-3 lg:flex  w-full  items-start justify-start  lg:justify-end lg:items-end hidden">
                <button
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="h-[50px]  w-[50px] xl:h-[60px]  xl:w-[60px]  rounded-full  items-center justify-center border border-white hover:border-[#d81100] duration-300 transition-all  flex  justify-self-end "
                >
                  <Image
                    src={"/Footer/arrow_forward.svg"}
                    width={20}
                    height={12}
                    sizes="100vw"
                    alt="arrow_forward"
                    className="w-4 h-auto object-cover"
                    priority={false}
                  />
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AdsFooter;
