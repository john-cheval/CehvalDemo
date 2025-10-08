/** @format */

import React from "react";
import Image from "next/image";

import image1 from "../../../../public/abudhabi/1.jpeg";
import image2 from "../../../../public/abudhabi/2.png";
import image3 from "../../../../public/abudhabi/3.jpg";
import Link from "next/link";
import { disableImageOptimization } from "@/util/constants";
function Section1() {
  return (
    <>
      <div className="relative w-screen h-fit  space-y-12 pt-24 sm:pt-28 md:pt-36 pb-20 sm:space-y-14 md:space-y-16 flex items-center flex-col bg-white overflow-x-hidden">
        <div className="w-full   h-fit  wrapper-padding">
          <div className="flex items-center lg:items-start xl:space-y-0 space-y-4 xl:items-end lg:flex-row flex-col justify-between w-full">
            <h1 className="capitalize font-sora font-semibold lg:max-w-[590px] md:leading-tight sm:leading-tight leading-tight text-center lg:text-left   text-[#101763] text-3xl sm:text-4xl  md:text-5xl">
              Web Development Company In{" "}
              <span className="underline decoration-2 underline-offset-8">
                Abu Dhabi
              </span>
            </h1>
            <Link href={"/contact-us"}>
              <div className="flex items-center justify-between py-3 space-x-5 rounded-[50px] sm:w-fit w-full  px-8 border border-[#101763] text-[#101763] bg-transparent  font-sora text-center font-semibold text-base group">
                <span className="">Start Your Journey Today </span>
                <svg
                  className="w-4 object-contain group-hover:rotate-45 transition-transform duration-300"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                    fill="#101763"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full pl-5-- sm:pl-10-- md:pl-12-- wrapper-padding ">
          <div className=" w-full relative">
            <Image
              src={image1}
              className="h-fit w-full object-contain object-center"
              alt="abudhabi"
              // unoptimized={disableImageOptimization}
            />
          </div>
        </div>
        <div className="w-full   h-fit  wrapper-padding">
          <p className="font-satoshi max-w-[820px] text-[#101763] paragraphText-Size">
            Are you a business owner looking to take your online presence to the
            next level? Look no further! Cheval, a leading web development
            company in Dubai, is here to turn your ideas into reality. With our
            expertise in custom website development, we specialize in designing
            and creating fully customized websites that serve your specific
            needs. Whether you require a custom e-commerce website or a
            service-oriented site, our team of professionals is committed to
            delivering exceptional results.
          </p>
        </div>
        <div className="w-full h-fit wrapper-padding">
          <div className="w-full grid grid-cols-4 lg:grid-cols-12 grid-flow-row gap-y-5 lg:gap-y-0 lg:gap-4">
            <div className="flex space-y-5  sm:items-start lg:pr-2 items-center sm:justify-start justify-center  flex-col col-span-4 lg:col-span-4 h-fit">
              <h2
                style={{
                  background:
                    "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",

                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
                className="font-sora text-3xl text-center lg:text-left font-semibold text-[#101763] lg:text-4xl  !leading-[130%] "
              >
                Expert Web Development in Abu Dhabi For All Sectors by Cheval
              </h2>
              <div className="my-3- mx-auto lg:ml-1 w-full max-w-40 h-[1px] bg-black "></div>
            </div>

            <div className="col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex relative rounded-lg  bg-[#F2F4F9] w-full h-full">
                <Link href={"/projects"}>
                  <div className="flex absolute top-0 right-0 bg-white my-3 md:my-8 mx-3 md:mx-6 items-center justify-between py-2.5 text-[#FF0C15] space-x-2 rounded-[50px] w-fit z-20 px-3 md:px-4 border border-[#FF0C15]   font-sora text-center text-xs md:text-sm ">
                    <span className="">Projects </span>
                    <svg
                      className="w-3.5 object-contain hidden md:block"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                        fill="#FF0C15"
                      />
                    </svg>
                  </div>
                </Link>
                <div className="flex w-full  flex-col py-8 space-y-5 px-10">
                  <div className="font-sora w-fit md:my-20 mt-5  font-semibold text-[#101763] text-2xl md:text-3xl ">
                    <h3 className="mb-3">WordPress</h3>
                    <div className="h-[1px] w-16 bg-black"></div>
                  </div>
                  <p className="font-satoshi w-full paragraphText-Size text-black">
                    Unravel the full potential of your WordPress website with
                    our comprehensive development support plans. We take care of
                    all the essential aspects, including WordPress software and
                    plugin updates, regular backups, and diligent security
                    monitoring. At Cheval, the top
                    <b> web design company in Abu Dhabi,</b> we offer
                    personalized WordPress development support. With our expert
                    assistance, you can channel your energy toward scaling your
                    business without worrying about managing complex tech
                    stacks.
                  </p>
                </div>
              </div>
              <div className="flex relative rounded-lg  bg-[#F2F4F9] w-full h-full">
                <Link href={"/projects"}>
                  <div className="flex absolute top-0 right-0 bg-white my-3 md:my-8 mx-3 md:mx-6 items-center justify-between py-2.5 text-[#FF0C15] space-x-2 rounded-[50px] w-fit z-20 px-3 md:px-4 border border-[#FF0C15]   font-sora text-center text-xs md:text-sm">
                    <span className="">Projects </span>
                    <svg
                      className="w-3.5 object-contain hidden md:block"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                        fill="#FF0C15"
                      />
                    </svg>
                  </div>
                </Link>
                <div className="flex w-full  flex-col py-8 space-y-5 px-10">
                  <div className="font-sora w-fit md:my-20 mt-5  font-semibold text-[#101763] text-2xl md:text-3xl ">
                    <h3 className="mb-3">SharePoint</h3>
                    <div className="h-[1px] w-16 bg-black"></div>
                  </div>
                  <p className="font-satoshi w-full paragraphText-Size text-black">
                    From SharePoint migration to SharePoint admin support to
                    SharePoint development – we offer comprehensive SharePoint
                    solutions! Our design team is dedicated to helping you
                    streamline your operations, saving you time and money. By
                    leveraging the power of SharePoint, power automate, power
                    BI, and power apps, we can automate your processes, boost
                    efficiency, and drive productivity.
                  </p>
                </div>
              </div>
              <div className="flex relative rounded-lg  bg-[#F2F4F9] w-full h-full">
                <Link href={"/projects"}>
                  <div className="flex absolute top-0 right-0 bg-white my-3 md:my-8 mx-3 md:mx-6 items-center justify-between py-2.5 text-[#FF0C15] space-x-2 rounded-[50px] w-fit z-20 px-3 md:px-4 border border-[#FF0C15]   font-sora text-center text-xs md:text-sm ">
                    <span className="">Projects </span>
                    <svg
                      className="w-3.5 object-contain hidden md:block"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                        fill="#FF0C15"
                      />
                    </svg>
                  </div>
                </Link>
                <div className="flex w-full  flex-col py-8 space-y-5 px-10">
                  <div className="font-sora w-fit md:my-20 mt-5  font-semibold text-[#101763] text-2xl md:text-3xl ">
                    <h3 className="mb-3">PHP</h3>
                    <div className="h-[1px] w-16 bg-black"></div>
                  </div>
                  <p className="font-satoshi w-full paragraphText-Size text-black">
                    Cheval <b>website design company in Abu Dhabi </b>
                    specializes in creating websites with a powerful back and
                    seamless front end. Whether you need a website for your
                    business or personal use, our team can help you establish a
                    highly functional and user-friendly webpage.
                  </p>
                </div>
              </div>
              {/* <div className="col-span-1 hidden lg:block"></div> */}
              <div className="flex relative rounded-lg  bg-[#F2F4F9] w-full h-full">
                <Link href={"/projects"}>
                  <div className="flex absolute top-0 right-0 bg-white my-3 md:my-8 mx-3 md:mx-6 items-center justify-between py-2.5 text-[#FF0C15] space-x-2 rounded-[50px] w-fit z-20 px-3 md:px-4 border border-[#FF0C15]   font-sora text-center text-xs md:text-sm">
                    <span className="">Projects </span>
                    <svg
                      className="w-3.5 object-contain hidden md:block"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                        fill="#FF0C15"
                      />
                    </svg>
                  </div>
                </Link>
                <div className="flex w-full  flex-col py-8 space-y-5 px-10">
                  <div className="font-sora w-fit md:my-20 mt-5  font-semibold text-[#101763] text-2xl md:text-3xl ">
                    <h3 className="mb-3">Joomla</h3>
                    <div className="h-[1px] w-16 bg-black"></div>
                  </div>
                  <p className="font-satoshi w-full paragraphText-Size text-black">
                    Our professionals are committed to delivering the
                    outstanding results you desire from Joomla maintenance
                    services. With the help of the Joomla platform, our team
                    creates unique content for your pages. Our expertise
                    includes utilizing essential SEO tools and integrating vital
                    plugins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-fit wrapper-padding">
          <div className="w-full h-[650px]-- relative grid grid-cols-2  gap-3">
            <div className="col-span-2 lg:col-span-1 flex-col w-full flex items-end justify-end relative h-full">
              <Image
                src={image2}
                className="object-cover w-full absolute top-0 rounded-lg left-0 h-[60%] object-center"
                alt="Image-2"
                // unoptimized={disableImageOptimization}
              />
              <div className=" w-full h-full bg-gradient-to-b from-transparent rounded-t-lg to-[#27172F] to-95% z-20"></div>
              <div className="flex w-full  h-fit bg-[#27172F] rounded-b-lg flex-col pb-14 space-y-4  z-20 px-8 md:px-14 py-8 lg:py-0">
                <h4
                  style={{
                    background:
                      "linear-gradient(92.09deg, #FF0C15 0.33%, #FFFFFF 26.13%)",

                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                  className="font-sora font-semibold text-white text-3xl lg:text-4xl  !leading-[130%] "
                >
                  Why Cheval as your Web Development Partner?
                </h4>
                <p className="font-satoshi w-full paragraphText-Size text-white lg:pb-5 ">
                  Cheval ME, our website design company in Abu Dhabi’s expert
                  web developers deliver top-tier web development solutions
                  across industries and worldwide. From highly robust SaaS
                  platforms and business portals to eCommerce solutions and
                  content management systems, we are committed to providing the
                  best-in-class web development services for businesses of all
                  sizes.
                </p>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1 flex-col w-full flex items-end justify-end relative h-full">
              <Image
                src={image3}
                className="object-cover w-full absolute top-0 rounded-lg left-0 h-full object-top"
                alt="Image"
                // unoptimized={disableImageOptimization}
              />
              <div className="flex w-full  h-fit  rounded-b-lg flex-col pb-14 space-y-4  z-20 px-8 md:px-14 py-8 lg:py-0">
                <h4 className="font-sora font-semibold text-white text-3xl lg:text-4xl  !leading-[130%] pt-5 ">
                  What Makes Us The Best Web Development Company?
                </h4>
                <ul className="flex flex-col list-disc pl-5 gap-y-3 font-satoshi w-full paragraphText-Size text-white ">
                  <li>
                    Better Research & Data-driven Web Development Strategy
                  </li>
                  <li>Best-in-class Expert Team</li>
                  <li>Mobile Optimized Website</li>
                  <li>SEO Friendly Websites</li>
                  <li>Premium client service & communication</li>
                </ul>
                <Link href={"/contact-us"} className="hidden sm:block lg:pb-5">
                  <div className="flex items-center justify-between mt-2 py-3 text-white space-x-3.5 rounded-[50px] sm:w-fit w-full  px-5   bg-[#27172F]  font-sora text-center text-sm ">
                    <span className="">Contact Us</span>
                    <svg
                      className="w-3 rotate-45 object-contain"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
