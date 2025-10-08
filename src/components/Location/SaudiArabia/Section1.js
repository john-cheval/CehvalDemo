/** @format */

import React from "react";
import Image from "next/image";

import image1 from "../../../../public/saudi/1.png";
import image2 from "../../../../public/saudi/2.jpeg";
import image3 from "../../../../public/saudi/3.jpeg";
import image4 from "../../../../public/saudi/4.png";
import image5 from "../../../../public/saudi/5.png";
import image6 from "../../../../public/saudi/6.png";
import image7 from "../../../../public/saudi/7.png";
import image8 from "../../../../public/saudi/8.png";
import image9 from "../../../../public/saudi/9.jpeg";
import image10 from "../../../../public/saudi/10.jpeg";
import Link from "next/link";
import WeServe from "../Common/WeServe";
import WebDevProcess from "../Common/WebDevProcess";
import WhyChooseUs from "../Common/WhyChooseUs";
import { disableImageOptimization } from "@/util/constants";
function Section1() {
  return (
    <>
      <div className="relative w-screen h-fit  space-y-12 pt-24 sm:pt-28 md:pt-36 pb-20 sm:space-y-14 md:space-y-16 flex items-center flex-col bg-white overflow-x-hidden">
        <div className="w-full h-fit  wrapper-padding">
          <div className="flex items-center lg:items-start xl:space-y-0 space-y-4 xl:items-end lg:flex-row flex-col justify-between w-full">
            <div className="flex flex-col space-y-4 w-fit lg:max-w-[760px]">
              <h1 className="capitalize font-sora font-bold  md:leading-tight sm:leading-tight leading-tight   text-[#101763] text-center lg:text-left  text-3xl sm:text-4xl md:text-5xl">
                Web Development Company In{" "}
                <span className="underline decoration-2 underline-offset-8">
                  Saudi Arabia
                </span>
              </h1>
            </div>
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
        <div className="w-full h-fit wrapper-padding">
          <div className=" w-full relative">
            <Image
              src={image1}
              // unoptimized={disableImageOptimization}
              alt="image-1"
              className="h-fit  w-full object-contain object-center"
            />
          </div>
        </div>
        <div className="w-full   h-fit  wrapper-padding">
          <p className="font-satoshi max-w-[1150px] text-[#101763] paragraphText-Size">
            At <span className="text-[#FF0C15]">Cheval</span>, we understand the
            significance of a well-designed website. As a leading Web Design
            Agency in Saudi Arabia, we strive to create visually appealing and
            user-friendly websites that leave a lasting impression. Our skilled
            designers and developers work tirelessly to ensure our client's
            online presence is professional and engaging. Trust us to elevate
            your brand and drive success in the digital world. We create
            exceptional online experiences by blending artistic flair with
            advanced technology, reflecting your brand's identity and captivate
            audiences.
          </p>
        </div>
        <div className="w-full h-fit wrapper-padding">
          <h2
            style={{
              background:
                "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",

              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
            className="font-sora font-semibold text-[#101763] text-2xl sm:text-3xl text-center md:text-left md:max-w-[645px] !leading-[130%] "
          >
            Types of Web Development Services We are Providing in Saudi Arabia
          </h2>
          <div className="w-full grid grid-cols-4 lg:grid-cols-3 grid-flow-row gap-y-10 mt-10">
            <div className="h-[1px] col-span-4 lg:col-span-3 w-full bg-[#C5C5C5]  "></div>
            <div className="flex relative flex-col  col-span-4 md:col-span-2 lg:col-span-1 md:border-r border-[#c5c5c5] w-full h-full justify-between ">
              <div className="h-full relative flex">
                <Link href={"/projects"}>
                  <div className="flex absolute top-0 left-0 bg-[#F2F4F9]  md:mx-8 items-center justify-between py-2.5 text-[#27172F] space-x-2 rounded-[50px] w-fit  z-20  px-4    font-sora text-center text-sm ">
                    <span className="">Projects </span>
                    <svg
                      className="w-3.5 object-contain"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                        fill="#27172F"
                      />
                    </svg>
                  </div>
                </Link>
                <div className="flex w-full h-full  flex-col py-8 justify-start md:px-10">
                  <div className="font-sora w-fit pt-10  font-semibold text-[#101763] text-2xl md:text-3xl">
                    <h3 className="mb-4  line-clamp-2">
                      Responsive web design
                    </h3>
                    <div className="h-[1px] w-16 bg-black"></div>
                  </div>
                  <div className="flex flex-col space-y-5 pt-10">
                    <p className="font-satoshi w-full paragraphText-Size text-black">
                      We specialize in creating optimized websites for all
                      devices, ensuring a seamless user experience across
                      desktops, tablets, and mobile phones.
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-5 w-full">
                <Image
                  src={image10}
                  // unoptimized={disableImageOptimization}
                  alt="image-10"
                  className="w-full h-[180px] rounded-lg  object-cover object-center"
                />
              </div>
            </div>
            <div className="h-[1px] col-span-4 md:hidden lg:col-span-3 w-full bg-[#C5C5C5] "></div>
            <div className="flex relative flex-col col-span-4 md:col-span-2 lg:col-span-1  md:border-r border-[#c5c5c5] w-full h-full justify-between">
              <div className="h-full relative flex">
                <Link href={"/projects"}>
                  <div className="flex absolute top-0 left-0 bg-[#F2F4F9]  md:mx-8 items-center justify-between py-2.5 text-[#27172F] space-x-2 rounded-[50px] w-fit z-20  px-4    font-sora text-center text-sm ">
                    <span className="">Projects </span>
                    <svg
                      className="w-3.5 object-contain"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                        fill="#27172F"
                      />
                    </svg>
                  </div>
                </Link>
                <div className="flex w-full h-full  flex-col py-8 justify-start md:px-10">
                  <div className="font-sora w-fit pt-10  font-semibold text-[#101763] text-2xl md:text-3xl">
                    <h3 className="mb-4  line-clamp-2">
                      Custom Web Development
                    </h3>
                    <div className="h-[1px] w-16 bg-black"></div>
                  </div>
                  <div className="flex flex-col space-y-5 pt-10">
                    <p className="font-satoshi w-full paragraphText-Size text-black">
                      Our team of experienced developers can create unique and
                      tailored websites that meet your specific business
                      requirements, incorporating advanced features and
                      functionalities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-5 w-full">
                <Image
                  src={image2}
                  alt="image-2"
                  // unoptimized={disableImageOptimization}
                  className="w-full h-[180px] rounded-lg  object-cover object-center"
                />
              </div>
            </div>
            <div className="h-[1px] col-span-4 lg:hidden lg:col-span-3 w-full bg-[#C5C5C5]"></div>

            <div className="flex relative col-span-4 md:col-span-2 lg:col-span-1  flex-col border-[#c5c5c5] w-full h-full justify-between md:border-r lg:border-r-0 ">
              <div className="h-full relative flex">
                <Link href={"/projects"}>
                  <div className="flex absolute top-0 left-0 bg-[#F2F4F9]  md:mx-8 items-center justify-between py-2.5 text-[#27172F] space-x-2 rounded-[50px] w-fit  z-20  px-4    font-sora text-center text-sm ">
                    <span className="">Projects </span>
                    <svg
                      className="w-3.5 object-contain"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                        fill="#27172F"
                      />
                    </svg>
                  </div>
                </Link>
                <div className="flex w-full h-full  flex-col py-8 justify-start md:px-10">
                  <div className="font-sora w-fit pt-10  font-semibold text-[#101763] text-2xl md:text-3xl">
                    <h3 className="mb-4  line-clamp-2">E-commerce Solutions</h3>
                    <div className="h-[1px] w-16 bg-black"></div>
                  </div>
                  <div className="flex flex-col space-y-5 pt-10">
                    <p className="font-satoshi w-full paragraphText-Size text-black">
                      We offer comprehensive e-commerce solutions, including
                      online store development, payment gateway integration, and
                      inventory management systems.
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-5 w-full">
                <Image
                  src={image3}
                  alt="image-3"
                  // unoptimized={disableImageOptimization}
                  className="w-full h-[180px] rounded-lg  object-cover object-center"
                />
              </div>
            </div>

            <div className="h-[1px] block md:hidden lg:block col-span-4 md:col-span-3 w-full bg-[#C5C5C5] "></div>

            <div className="flex relative col-span-4 md:col-span-2 lg:col-span-1 flex-col md:border-r border-[#c5c5c5] w-full h-full justify-between">
              <div className="h-full relative flex">
                <div className="flex absolute top-0 left-0 bg-[#F2F4F9]  md:mx-8 items-center justify-between py-2.5 text-[#27172F] space-x-2 rounded-[50px] w-fit  z-20  px-4    font-sora text-center text-sm ">
                  <span className="">Projects </span>
                  <svg
                    className="w-3.5 object-contain"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                      fill="#27172F"
                    />
                  </svg>
                </div>
                <div className="flex w-full h-full  flex-col py-8 justify-start md:px-10">
                  <div className="font-sora w-fit pt-10  font-semibold text-[#101763] text-2xl md:text-3xl">
                    <h3 className="mb-4  line-clamp-2">
                      Website Maintenance and Support
                    </h3>
                    <div className="h-[1px] w-16 bg-black"></div>
                  </div>
                  <div className="flex flex-col space-y-5 pt-10">
                    <p className="font-satoshi w-full paragraphText-Size text-black">
                      Our services encompass continuous website maintenance and
                      support to guarantee that your website stays current,
                      secure, and operates at its best. We handle all technical
                      aspects, from regular backups to software updates so that
                      you can concentrate on your core business activities
                      without any worries.
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-5 w-full">
                <Image
                  src={image5}
                  alt="image-5"
                  // unoptimized={disableImageOptimization}
                  className="w-full h-[180px] rounded-lg  object-cover object-center"
                />
              </div>
            </div>

            <div className="h-[1px] col-span-4 lg:hidden lg:col-span-3 w-full bg-[#C5C5C5]"></div>
            <div className="flex relative col-span-4 md:col-span-2 lg:col-span-1  flex-col border-[#c5c5c5] w-full h-full justify-between md:border-r ">
              <div className="h-full relative flex">
                <Link href={"/projects"}>
                  <div className="flex absolute top-0 left-0 bg-[#F2F4F9]  md:mx-8 items-center justify-between py-2.5 text-[#27172F] space-x-2 rounded-[50px] w-fit  z-20  px-4    font-sora text-center text-sm ">
                    <span className="">Projects </span>
                    <svg
                      className="w-3.5 object-contain"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                        fill="#27172F"
                      />
                    </svg>
                  </div>
                </Link>
                <div className="flex w-full h-full  flex-col py-8 justify-start md:px-10">
                  <div className="font-sora w-fit pt-10  font-semibold text-[#101763] text-2xl md:text-3xl">
                    <h3 className="mb-4  line-clamp-2">SEO Optimisation</h3>
                    <div className="h-[1px] w-16 bg-black"></div>
                  </div>
                  <div className="flex flex-col space-y-5 pt-10">
                    <p className="font-satoshi w-full paragraphText-Size text-black">
                      We acknowledge the significance of search engine
                      optimization (SEO) in generating organic traffic for your
                      website. Our web design services include implementing SEO
                      best practices to improve your website's visibility and
                      ranking on search engines.
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-5 w-full">
                <Image
                  src={image6}
                  alt="image-6"
                  // unoptimized={disableImageOptimization}
                  className="w-full h-[180px] rounded-lg  object-cover object-center"
                />
              </div>
            </div>
            <div className="h-[1px] col-span-4 lg:col-span-3 w-full bg-[#C5C5C5]"></div>
          </div>
        </div>

        <div className="w-full wrapper-padding">
          <div className="w-full h-fit relative overflow-hidden  items-end justify-end flex ">
            <Image
              src={image7}
              // unoptimized={disableImageOptimization}
              alt="image-7"
              className="object-cover w-[50%] rounded-lg absolute top-0 left-0 h-full object-left"
            />
            <div className="absolute left-0 top-0 h-full w-[100%] rounded-lg  bg-gradient-to-r from-transparent via-transparent to-[#F2F4F9] from-[-200%] lg:from-30% to-50% z-20"></div>

            <div className="flex flex-col justify-center space-y-5 py-24 text-black  z-20 relative lg:w-[50%] wrapper-padding lg:px-20 h-fit">
              <h4
                style={{
                  background:
                    "linear-gradient(92.09deg, #FF0C15 0.33%, #27172F 26.13%)",

                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
                className="font-sora font-semibold text-[#101763] text-center lg:text-start text-2xl sm:text-3xl  !leading-[130%] "
              >
                Why is a Web Design Company important in Saudi Arabia
              </h4>
              <p className="font-satoshi w-full paragraphText-Size text-center lg:text-start">
                A web design company is crucial for businesses in Saudi Arabia
                as it helps create a strong online presence. With the increasing
                internet use, having a well-designed website is essential to
                attract and engage customers. A professional web design company
                understands the local market and can tailor the website to cater
                to the preferences and needs of Saudi Arabian consumers. They
                can also optimize the website for search engines, ensuring
                higher visibility and increased traffic. Ultimately, a web
                design company helps businesses in Saudi Arabia establish
                credibility, generate leads, and drive growth.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full   wrapper-padding  h-fit ">
          <div className="w-full h-fit relative overflow-hidden  flex ">
            <Image
              src={image8}
              alt="image-8"
              // unoptimized={disableImageOptimization}
              className="object-cover w-full rounded-lg absolute top-0 left-0 h-full scale-150 object-center"
            />
            <div className="absolute right-0 top-0 h-full w-[100%] rounded-lg via-transparent  bg-gradient-to-l from-transparent to-[#F2F4F9] from-[-200%] lg:from-30% to-50% z-20"></div>

            <div className="flex flex-col justify-center space-y-5 py-24 text-black  z-20 relative lg:w-[50%] wrapper-padding lg:px-20 h-fit">
              <h4
                style={{
                  background:
                    "linear-gradient(92.09deg, #FF0C15 0.33%, #27172F 26.13%)",

                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
                className="font-sora font-semibold text-[#101763] text-center lg:text-start text-2xl sm:text-3xl  !leading-[130%] "
              >
                Need A Web Design Company In Saudi Arabia?
              </h4>
              <p className="font-satoshi w-full paragraphText-Size text-center lg:text-start">
                At Cheval ME, we understand the need for a reliable and
                professional web design company in Saudi Arabia. With our
                expertise and experience, we are dedicated to providing
                top-notch web design services that cater to the unique
                requirements of businesses in Saudi Arabia. Our team of talented
                designers and developers collaborates closely with clients to
                craft visually captivating and user-friendly websites that
                embody their brand and effectively engage their desired
                audience. Trust Cheval ME to deliver exceptional web design
                solutions tailored to your specific needs in Saudi Arabia.
              </p>
            </div>
          </div>
        </div>
        <WhyChooseUs location="Saudi Arabia" />
      </div>
      <div className="relative w-screen h-fit  py-12 sm:py-14 md:py-16 space-y-12 sm:space-y-14 md:space-y-16 flex items-center flex-col bg-white overflow-x-hidden">
        <div className="w-full wrapper-padding">
          <div className="grid grid-cols-3 gap-5 w-full h-fit">
            <div className="flex space-y-5 sm:space-y-10 sm:items-start-- lg:pr-2 items-center sm:justify-start-- justify-center  flex-col col-span-3 md:col-span-1 h-fit">
              <h4
                style={{
                  background:
                    "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",

                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
                className="font-sora font-semibold text-2xl sm:text-3xl md:text-4xl  !leading-[130%] text-center md:text-start "
              >
                Our Process Of Web Development
              </h4>
              <div className="my-3 md:ml-1 w-full max-w-40 h-[1px] mx-auto bg-black"></div>
            </div>
            <WebDevProcess />
          </div>
        </div>
        <div className="w-full h-fit wrapper-padding">
          <div className="grid w-full gap-5 grid-cols-9">
            <div className="flex space-y-5 sm:space-y-10 sm:items-start pr-2 items-center sm:justify-start justify-center  flex-col col-span-9 lg:col-span-4 h-fit">
              <h4
                style={{
                  background:
                    "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",

                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
                className="font-sora font-semibold text-2xl sm:text-3xl md:text-4xl  !leading-[130%] text-center lg:text-left"
              >
                Benefits Of Hiring Our Web Design Services In Saudi Arabia
              </h4>
              <div className="my-3 lg:ml-1 w-full max-w-40 h-[1px] bg-black mx-auto"></div>
            </div>
            <p className="font-satoshi w-full paragraphText-Size col-span-9 lg:col-span-5 text-[#27172F] text-center lg:text-start">
              Our web design company in Saudi Arabia offers the best web design
              services. You can benefit from our expertise and experience in
              creating visually appealing and user-friendly websites by hiring
              us. Our expert web designers will collaborate closely with you to
              grasp your business objectives, crafting a website that impeccably
              showcases your brand identity.
              <br /> <br />
              We employ cutting-edge technologies and incorporate the latest
              design trends to guarantee your website distinguishes itself
              amidst the competition." With our services, you can expect
              increased online visibility, improved user engagement, and higher
              conversion rates. Trust our web design company in Saudi Arabia to
              deliver exceptional results for your business.
            </p>
          </div>
        </div>
        <div className="w-full wrapper-padding h-fit ">
          <div className="w-full h-fit relative overflow-hidden rounded-lg flex items-center justify-center sm:items-end sm:justify-end">
            <Image
              src={image9}
              alt="image-9"
              // unoptimized={disableImageOptimization}
              className="object-cover w-1/2 absolute top-0 rounded-lg left-0 h-full object-left"
            />
            <div className="absolute right-0 top-0 h-full w-[100%] rounded-lg bg-gradient-to-r from-transparent to-black to-50% z-20"></div>

            <div className="flex flex-col justify-center items-center space-y-8 py-24 text-white  z-20 relative sm:w-[45%]  pr-5-- sm:pr-10 md:pr-12 h-fit">
              <p
                style={{
                  background:
                    "linear-gradient(90deg, #FF0C15 0%, #FFFFFF 13.42%)",

                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
                className="font-sora font-semibold text-[#101763] text-xl sm:text-2xl  leading-normal text-center sm:text-left"
              >
                Ready To Grow Your Business?
              </p>
              <Link href={"/contact-us"}>
                <div className="flex items-center justify-between py-3 space-x-5 rounded-[50px] sm:w-fit w-full  px-6 border border-[#EE2525] bg-[#EE2525] text-white   font-sora text-center  text-sm ">
                  <span className="">Get in touch with us!</span>
                  <svg
                    className="w-3 object-contain rotate-45"
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
        <div className="w-full wrapper-padding">
          <div className="w-full grid grid-cols-3 gap-4 grid-flow-row h-fit">
            <div className="flex space-y-5 sm:space-y-10 sm:items-start pr-2 items-center sm:justify-start justify-center  flex-col col-span-3 lg:col-span-1 h-fit">
              <h4
                style={{
                  background:
                    "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",

                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
                className="font-sora font-semibold text-2xl sm:text-3xl md:text-4xl  leading-normal text-center mx-auto lg:mx-0 lg:text-left"
              >
                Industries We Serve
              </h4>
              <div className="my-3 lg:ml-1 w-full max-w-40 h-[1px] bg-black mx-auto"></div>
            </div>
            <WeServe />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
