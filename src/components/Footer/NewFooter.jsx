"use client";
import Image from "next/image";
import Link from "next/link";
import React, { memo, Suspense, useEffect, useState } from "react";
import fb from "../../../public/Footer/social/fb.svg";
import insta from "../../../public/Footer/social/instagram.svg";
import linkedin from "../../../public/Footer/social/linkedin.svg";
import arrowForward from "../../../public/Footer/arrow_forward.svg";
import footerLine from "../../../public/Footer/footer_line.svg";
import FooterMobile from "./FooterMobile";
import { usePathname } from "next/navigation";
// import AdsFooter from "../Ads/Footer/AdsFooter";

const NewFooter = ({ footer }) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapVisible, setMapVisible] = useState(false);

  const pathname = usePathname();

  const MapComponent = () => {
    useEffect(() => {
      setMapLoaded(true);
    }, []);
    return (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57787.433334419904!2d55.16559858442186!3d25.1453385510925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f699813fd9451%3A0xc4b554ceb43cff51!2sCheval%20ME!5e0!3m2!1sen!2sin!4v1695555265331!5m2!1sen!2sin"
        title="Best Web Solution Agency in UAE"
        allowFullScreen
        loading="lazy"
        rel="nofollow"
        referrerPolicy="no-referrer-when-downgrade"
        className=" max-w-[350px]-- xl:w-full-- w-full h-[210px]  rounded-[10px] mb-4"
        onLoad={() => setMapLoaded(true)}
      ></iframe>
    );
  };

  useEffect(() => {
    // Intersection Observer for lazy loading map
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setMapVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "200px" }
    );

    const mapContainer = document.getElementById("map-container");
    if (mapContainer) observer.observe(mapContainer);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Mark the LCP element for priority rendering
    const lcpElement = document.getElementById("lcp-heading");
    if (lcpElement) {
      // Use requestIdleCallback to ensure browser prioritizes this element
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => {
          lcpElement.style.visibility = "visible";
        });
      }
    }
  }, []);
  return (
    <>
      {pathname.includes("/ads") ? null : (
        <footer className="relative z-[1000] w-screen h-fit text-white overflow-hidden bg-black md:bg-footer-bg footer-bg_image  bg-conver bg-no-repeat">
          {/* Overlay Ellips */}
          <div className="w-full  pb-5 pt-10 md:pt-16 lg:pt-[86px]   wrapper-padding  ">
            <div className="absolute hidden md:block bg-footer-grad bottom-0 right-0 z-10" />
            <div className="flex flex-col">
              <div className="grid grid-cols-12 gap-3 lg:gap-4 xl:gap-6 justify-items-center xl:justify-items-start--   ">
                {/* left */}
                <div className=" col-span-12 lg:col-span-4">
                  <div className="flex flex-col space-y-3">
                    <p className="font-sora  font-light text-white  text-2xl md:text-4xl lg:text-5xl text-center lg:text-start footer-heading ">
                      Call us / text us,
                    </p>
                    <p
                      className="font-sora font-normal text-3xl sm:text-4xl  md:text-5xl lg:text-6xl footer-heading-2"
                      style={{ textRendering: "optimizeSpeed" }}
                      id="lcp-heading"
                    >
                      Let's get to work!
                    </p>
                  </div>
                </div>
                {/* right */}
                <div className=" flex flex-col  col-span-12 lg:col-span-8 ">
                  <div className=" xl:flex-col xl:space-y-6 flex flex-col sm:flex-row xl:items-start lg:justify-start items-center justify-center space-x-2  ">
                    <Link
                      href={"mailto:info@chevalme.com"}
                      rel="nofollow"
                      className="font-sora font-normal text-base sm:text-2xl md:text-3xl xl:text-[42px] "
                    >
                      info@chevalme.com
                    </Link>
                    <span className="xl:hidden font-sora font-normal text-base sm:text-2xl md:text-3xl xl:text-[42px] hidden sm:block   ">
                      |
                    </span>
                    <Link
                      rel="nofollow"
                      href={"tel:+971 50 356 0927"}
                      className="font-sora font-normal text-base sm:text-2xl md:text-3xl xl:text-[42px]  "
                    >
                      +971 50 356 0927
                    </Link>
                  </div>
                  <div className=" hidden md:flex  flex-col sm:flex-row items-center justify-start  gap-[20px] md:gap-[50px] 2xl:gap-[69px]  w-full py-10 sm:py-14 md:pt-14 pb-10 z-50 footer_main ">
                    {footer?.map((data) => (
                      <div
                        className="flex flex-col  space-y-4  items-center justify-center md:items-start md:justify-start"
                        key={data?.id}
                      >
                        <div>
                          <p className="font-satoshi  text-xl sm:text-sm md:text-base font-medium  text-white mb-2 flex items-center justify-center ">
                            {data?.title}
                          </p>
                          <Image
                            src={footerLine}
                            alt="line"
                            height={0}
                            width={0}
                            sizes="100vw"
                            className="w-11 h-auto"
                            priority={false}
                          />
                        </div>
                        <div className="flex flex-col  space-y-0">
                          {data?.children?.map((item, index) => (
                            <Link
                              className="cursor-pointer"
                              href={item?.url}
                              key={index}
                              title={item?.attr_title}
                            >
                              <p className="font-satoshi font-normal  border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all text-lg md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                                {item?.title}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    <div className="flex flex-col space-y-4 items-center justify-center md:items-start md:justify-start ">
                      <div>
                        <p className="font-satoshi  text-xl md:text-base font-medium  text-white mb-2 flex  ">
                          Connect
                        </p>
                        <Image
                          src={footerLine}
                          alt="line"
                          height={0}
                          width={0}
                          sizes="100vw"
                          className="w-11 h-auto"
                          priority={false}
                        />
                      </div>
                      <div className="flex flex-col space-y-0 items-center justify-center md:items-start md:justify-start">
                        <Link
                          className="cursor-pointer"
                          href={"mailto:info@chevalme.com"}
                          rel="nofollow"
                        >
                          <p className="font-satoshi font-normal  border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all text-lg md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                            info@chevalme.com
                          </p>
                        </Link>
                        <Link
                          className="cursor-pointer"
                          href={"tel:+971503560927"}
                          rel="nofollow"
                        >
                          <p className="font-satoshi font-normal  border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all text-lg md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                            +971 50 356 0927
                          </p>
                        </Link>

                        <Link
                          target="_blank"
                          href={"https://maps.app.goo.gl/Y26or1kGZwuEGq5s6"}
                          rel="nofollow"
                        >
                          <p className="font-satoshi font-normal  border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all text-lg md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3] text-center sm:text-start">
                            Suite 1, 101, Capital Golden Tower,
                            <br /> Business Bay, Dubai, UAE
                          </p>
                        </Link>

                        <div className="flex flex-row space-x-3 !mt-3 md:!mt-2 ">
                          <Link
                            target="_blank"
                            className="cursor-pointer border border-[#4c4c4c] hover:border-[#d81100] transition-all bg-[#272727] h-10 w-10 flex items-center justify-center rounded-full "
                            href={"https://www.facebook.com/chevalmiddleeast"}
                            rel="nofollow"
                          >
                            <Image
                              src={fb}
                              className="h-3 w-auto object-contain"
                              alt="facebook"
                              priority={false}
                            />
                          </Link>

                          <Link
                            target="_blank"
                            className="cursor-pointer border border-[#4c4c4c] hover:border-[#d81100] transition-all bg-[#272727] h-10 w-10 flex items-center justify-center rounded-full"
                            href={"https://www.instagram.com/chevalmiddleeast/"}
                            rel="nofollow"
                          >
                            <Image
                              src={insta}
                              className="h-3 w-auto object-contain"
                              alt="instagram"
                              priority={false}
                            />
                          </Link>

                          <Link
                            target="_blank"
                            className="cursor-pointer border border-[#4c4c4c] hover:border-[#d81100] transition-all bg-[#272727] h-10 w-10 flex items-center justify-center rounded-full"
                            href={
                              "https://www.linkedin.com/company/chevalmiddleeast/"
                            }
                            rel="nofollow"
                          >
                            <Image
                              src={linkedin}
                              className="h-3 w-auto object-contain"
                              alt="linkedin"
                              priority={false}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" hidden md:block" id="map-container">
                    {mapVisible && (
                      <Suspense
                        fallback={
                          <div className="w-full h-[210px] bg-gray-200 rounded-[10px] mx-auto mt-7" />
                        }
                      >
                        <MapComponent />
                      </Suspense>
                    )}
                  </div>
                </div>
              </div>

              <div className="w-full pt-0 sm:pt-10-- z-50 pb-5 hidden md:block">
                <div
                  className={
                    "grid grid-cols-12 gap-3 lg:gap-4 xl:gap-6 justify-items-center lg:justify-items-start mx-auto-- "
                  }
                >
                  <div className="md:flex hidden  col-span-9 flex-row space-x-4  xl:space-x-5 mt-5 xl:mt-0 items-end ">
                    <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent  sm:text-sm md:text-base text-white font-normal  lg:leading-[2.3] ">
                      Cheval 2025 All rights reserved
                    </p>
                    <Link
                      href={"/privacy-policy"}
                      className="font-satoshi font-normal text-xs  border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] lg:leading-[2.3] cursor-pointer"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href={"/sitemap.html"}
                      className="font-satoshi font-normal text-xs  border-b-transparent  sm:text-sm md:text-base text-[#272727]- text-white leading-[2.3] lg:leading-[2.3] "
                    >
                      Sitemap
                    </Link>
                    {/* <Link
                  href={"/terms-conditions"}
                  className="font-satoshi font-normal text-xs  border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] lg:leading-[2.3] cursor-pointer"
                >
                  Terms & Conditions
                </Link> */}
                  </div>

                  <div className="col-span-3 flex  w-full  items-start justify-start  lg:justify-end lg:items-end">
                    <button
                      // href={"#"}
                      onClick={() =>
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        })
                      }
                      className="h-[50px]  w-[50px] xl:h-[60px]  xl:w-[60px]  rounded-full  items-center justify-center border border-white hover:border-[#d81100] duration-300 transition-all  flex  justify-self-end "
                    >
                      <Image
                        src={arrowForward}
                        alt="arrow_forward"
                        className="w-4 h-auto object-cover"
                        priority={false}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* moblie */}
              <div className="md:hidden w-full mt-9">
                <FooterMobile links={footer} />
                <div className="md:hidden  flex flex-row space-x-4 mt-7 items-center justify-center ">
                  <Link
                    target="_blank"
                    className="cursor-pointer border border-[#4c4c4c] hover:border-[#d81100] transition-all bg-[#272727] h-10 w-10 flex items-center justify-center rounded-full "
                    href={"https://www.facebook.com/chevalmiddleeast"}
                    rel="nofollow"
                  >
                    <Image
                      src={fb}
                      className="h-3 w-auto object-contain"
                      alt="facebook"
                      priority={false}
                    />
                  </Link>

                  <Link
                    target="_blank"
                    className="cursor-pointer border border-[#4c4c4c] hover:border-[#d81100] transition-all bg-[#272727] h-10 w-10 flex items-center justify-center rounded-full"
                    href={"https://www.instagram.com/chevalmiddleeast/"}
                    rel="nofollow"
                  >
                    <Image
                      src={insta}
                      className="h-3 w-auto object-contain"
                      alt="instagram"
                      priority={false}
                    />
                  </Link>

                  <Link
                    target="_blank"
                    className="cursor-pointer border border-[#4c4c4c] hover:border-[#d81100] transition-all bg-[#272727] h-10 w-10 flex items-center justify-center rounded-full"
                    href={"https://www.linkedin.com/company/chevalmiddleeast/"}
                    rel="nofollow"
                  >
                    <Image
                      src={linkedin}
                      className="h-3 w-auto object-contain"
                      alt="linkedin"
                      priority={false}
                    />
                  </Link>
                </div>

                <div className="mt-7 md:hidden">
                  {/* {mapLoaded && (
                <Suspense
                  fallback={
                    <div
                      className="w-full h-[210px] bg-gray-200 rounded-[10px] mx-auto "
                      id="map-container"
                    />
                  }
                > */}
                  <MapComponent />
                  {/* </Suspense>
              )} */}
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-6 md:hidden space-y-4 sm:space-y-0">
                  <div className="flex flex-col xl:flex-row  xl:space-x-5 ">
                    <Link
                      href={"/privacy-policy"}
                      className="text-white text-base font-satoshi font-normal leading-[217%] text-center sm:text-left hover:text-[#d81100] duration-300 transition-all"
                    >
                      Privacy Policy
                    </Link>

                    {/* <Link
                  href={"/terms-conditions"}
                  className="text-white text-base font-satoshi font-normal leading-[217%] text-center sm:text-left hover:text-[#d81100] duration-300 transition-all"
                >
                  Terms & Conditions
                </Link> */}
                    <p className="text-white text-base font-satoshi font-normal leading-[217%]">
                      Cheval 2025 All rights reserved
                    </p>
                  </div>
                  <Link
                    href={"/sitemap.html"}
                    className="text-base font-satoshi font-normal leading-[217%] text-center sm:text-left text-[#272727]- text-white"
                  >
                    Sitemap
                  </Link>
                  <button
                    // href={"#"}
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                    className=" h-[50px] w-[50px] rounded-full  items-center justify-center border border-white hover:border-[#d81100] duration-300 transition-all hidden-- flex  "
                  >
                    <Image
                      src={arrowForward}
                      alt="arrow_forward"
                      className="w-4 h-auto object-cover"
                      priority={false}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default NewFooter;
