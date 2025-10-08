/** @format */

import React from "react";
import Image from "next/image";

import image1 from "../../../../public/dubai/1.png";
import image2 from "../../../../public/dubai/2.jpeg";
import image3 from "../../../../public/dubai/3.jpeg";
import image4 from "../../../../public/dubai/4.jpeg";
import image5 from "../../../../public/dubai/5.jpeg";
import image6 from "../../../../public/dubai/6.jpeg";
import image7 from "../../../../public/dubai/7.png";
import image8 from "../../../../public/dubai/8.jpeg";
import image9 from "../../../../public/dubai/9.png";
import image10 from "../../../../public/dubai/10.jpeg";
import image11 from "../../../../public/dubai/11.jpeg";
import Link from "next/link";
import WeServe from "../Common/WeServe";
import { disableImageOptimization } from "@/util/constants";
function Section1() {
  return (
    <>
      <div className="relative w-screen h-fit  space-y-12 pt-24 sm:pt-28 md:pt-36 pb-20 sm:space-y-14 md:space-y-16 flex items-center flex-col bg-[#F6F6F4] overflow-x-hidden">
        <div className="w-full   h-fit  wrapper-padding">
          <div className="flex items-center lg:items-start xl:space-y-0 space-y-4 xl:items-end lg:flex-row flex-col justify-between w-full">
            <h1 className="capitalize font-sora font-semibold lg:max-w-[590px] md:leading-tight sm:leading-tight leading-tight text-center lg:text-left   text-[#101763] text-3xl sm:text-4xl  md:text-5xl">
              Web Development Company In{" "}
              <span className="underline decoration-2 underline-offset-8">
                Dubai
              </span>
            </h1>
            <Link href={"/contact-us"}>
              <div className="flex items-center justify-between py-3 space-x-5 rounded-[50px] sm:w-fit w-full  px-8 border border-[#101763] text-[#101763] bg-transparent  font-sora text-center font-semibold text-base ">
                <span className="">Start Your Journey Today </span>
                <svg
                  className="w-4 object-contain"
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
        <div className=" grid grid-cols-10 gap-2 grid-flow-row">
          <div className="col-span-12 sm:col-span-6 relative">
            <Image
              src={image1}
              className="h-full w-full object-cover object-center"
              alt="image-1"
              unoptimized={disableImageOptimization}
            />
            <Link href={"/projects"}>
              <div className="flex absolute bottom-0 right-0 my-14 mx-20 items-center justify-between py-2.5 text-white space-x-2 rounded-[50px] sm:w-fit w-full--  px-4 border border-white  bg-transparent  font-sora text-center text-sm ">
                <span className="">Projects </span>
                <svg
                  className="w-3.5 object-contain"
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
          <div className="hidden sm:block sm:col-span-4 relative ">
            <Image
              src={image2}
              className="h-full w-full object-cover object-center"
              alt="image-2"
              unoptimized={disableImageOptimization}
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
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 grid-flow-row gap-y-5 lg:gap-y-0 lg:gap-x-4">
            <div className="flex space-y-5  sm:items-start lg:pr-2 items-center sm:justify-start justify-center  flex-col col-span-4 h-fit">
              <h2
                style={{}}
                className="font-sora font-semibold text-[#101763] text-3xl text-center lg:text-start md:text-4xl  !leading-[130%] "
              >
                <span
                  style={{
                    background:
                      "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  Expert
                </span>{" "}
                Web Development in Dubai For All Sectors by Cheval
              </h2>
              <div className="my-3- mx-auto lg:ml-1 w-full max-w-40 h-[1px] bg-black"></div>
            </div>

            <div className="col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col  w-full h-full">
                <Image
                  src={image5}
                  className="w-full h-60 object-cover object-center"
                  alt="image-5"
                  unoptimized={disableImageOptimization}
                />
                <div className="flex w-full bg-white flex-col py-8 space-y-4 px-10 h-full">
                  <h3 className="font-sora font-semibold text-[#101763] text-xl sm:text-2xl md:text-3xl ">
                    Wordpress Website Development 
                  </h3>
                  <p className="font-satoshi w-full paragraphText-Size text-[#101763]">
                    The Cheval website development team specializes in providing
                    creative, high-quality, and comprehensive WordPress website
                    development services at an affordable price. With a track
                    record of successfully delivering over 500+ fully custom
                    websites to businesses worldwide, we have gained expertise
                    in various categories. Our portfolio includes the design,
                    development, and delivery of e-commerce websites,
                    service-based websites, showcase websites, and more.
                  </p>
                </div>
              </div>
              <div className="flex flex-col  w-full h-full">
                <Image
                  src={image3}
                  className="w-full h-60 object-cover object-center"
                  alt="image-3"
                  unoptimized={disableImageOptimization}
                />
                <div className="flex w-full bg-white flex-col py-8 space-y-4 px-10 h-full">
                  <h3 className="font-sora font-semibold text-[#101763] text-xl sm:text-2xl md:text-3xl ">
                    Sharepoint Design Development
                  </h3>
                  <p className="font-satoshi w-full paragraphText-Size text-[#101763]">
                    Streamline & unify diverse processes with ease, scalability,
                    and agility using cloud computing-backed SharePoint
                    solutions from Cheval. The team offers enhanced
                    connectivity, greater collaboration, and unprecedented
                    engagement. With our custom SharePoint Solutions, navigating
                    the web of modern work has never been easier.
                  </p>
                </div>
              </div>
              <div className="flex flex-col  w-full h-full">
                <Image
                  src={image4}
                  className="w-full h-60 object-cover object-center"
                  alt="image-4"
                  unoptimized={disableImageOptimization}
                />
                <div className="flex w-full bg-white flex-col py-8 space-y-4 px-10 h-full">
                  <h3 className="font-sora font-semibold text-[#101763] text-xl sm:text-2xl md:text-3xl ">
                    Shopify Website Design
                  </h3>
                  <p className="font-satoshi w-full paragraphText-Size text-[#101763]">
                    Shopify is the leading and rapidly expanding
                    website-building platform for Direct-to-Customer market
                    Brands. Our team has successfully delivered over 100 Shopify
                    websites to date, whether through theme-based development or
                    custom design and development. With our end-to-end
                    capabilities and a touch of creativity, we provide the
                    perfect starting point for your e-commerce project.
                  </p>
                </div>
              </div>
              <div className="flex flex-col  w-full h-full">
                <Image
                  src={image10}
                  className="w-full h-60 object-cover object-center"
                  alt="image-10"
                  unoptimized={disableImageOptimization}
                />
                <div className="flex w-full bg-white flex-col py-8 space-y-4 px-10 h-full">
                  <h3 className="font-sora font-semibold text-[#101763] text-xl sm:text-2xl md:text-3xl ">
                    Mern Stack Development
                  </h3>
                  <p className="font-satoshi w-full paragraphText-Size text-[#101763]">
                    Leverage our Mern Stack (ReactJS) development services to
                    create performance-driven, fully customized, & scalable web
                    applications. Cheval team of experts consists of highly
                    skilled ReactJS developers, UI-UX designers, full-stack
                    developers, software testers, and data storage experts. With
                    their combined expertise, we offer comprehensive Mern Stack
                    development solutions to meet the specific requirements of
                    our clients Mern Stack Development.
                  </p>
                </div>
              </div>
              <div className="flex flex-col  w-full h-full">
                <Image
                  src={image11}
                  className="w-full h-60 object-cover object-center"
                  alt="image-11"
                  unoptimized={disableImageOptimization}
                />
                <div className="flex w-full bg-white flex-col py-8 space-y-4 px-10 h-full">
                  <h3 className="font-sora font-semibold text-[#101763] text-xl sm:text-2xl md:text-3xl ">
                    PHP Development 
                  </h3>
                  <p className="font-satoshi w-full paragraphText-Size text-[#101763]">
                    Transform your business with our custom PHP web development
                    services. Cheval, a leading web design agency in Dubai,
                    offers expert solutions for web app development. Our top PHP
                    developers specialize in handling complex development
                    processes and building robust PHP websites. Trust us to
                    deliver high-quality PHP-based web applications tailored to
                    your specific needs. Take your company to the next level and
                    drive large-scale growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full py-10 lg:h-screen lg:py-0 relative flex items-center justify-center">
          <Image
            src={image6}
            className="object-cover w-[60%] absolute top-0 left-0 h-full object-left hidden lg:block"
            alt="image-6"
            unoptimized={disableImageOptimization}
          />
          <div className="absolute right-0 top-0 h-full w-full lg:w-[70%] bg-gradient-to-r from-transparent to-black to-0% lg:to-40% z-20"></div>
          <div className="absolute -right-32 top-1/2 -translate-y-1/2 z-20 blur-[120px] rounded-full w-64 h-64 bg-[#FF0C15]"></div>

          <div className="flex flex-col justify-center items-center lg:items-start space-y-5 text-white lg:absolute z-20 left-1/2 lg:w-[50%]  pr-5 sm:pr-10 md:pr-12 h-full wrapper-padding">
            <h4 className="font-sora font-semibold text-3xl md:text-4xl lg:text-5xl w-full lg:w-[80%]  leading-tight- !leading-[130%] text-center lg:text-left">
              <span
                style={{
                  background:
                    "linear-gradient(93.39deg, #FF0C15 0.34%, #FFFFFF 50.42%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                {" "}
                Why
              </span>{" "}
              Cheval as your Web Development Partner?
            </h4>
            <p className="font-satoshi w-full paragraphText-Size text-center lg:text-left">
              When you choose Cheval ME as your web development partner in
              Dubai, you can expect nothing but excellence. Our skilled
              professionals combine cutting-edge technology with innovative
              design to create impactful websites and deliver seamless user
              experiences.We understand that every business is unique, and we
              believe your website should reflect that uniqueness. That's why we
              take the time to understand your goals, target audience, and brand
              personality, ensuring that every aspect of your website is
              tailored to your specific requirements. Get ultra-edge websites
              for your business solutions with us.
            </p>
          </div>
        </div>
        <div className="w-full wrapper-padding flex flex-col gap-y-10 ">
          <h4 className="font-sora font-semibold text-[#101763] text-3xl text-center lg:text-left lg:text-4xl w-full lg:max-w-4xl !!leading-[130%] ">
            <span
              style={{
                background:
                  "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              What
            </span>{" "}
            Makes Us The Best Web Development Company?
          </h4>
          <div className="flex flex-col gap-8 ">
            <div className="grid-cols-10 w-full grid grid-flow-row space-y-4 md:space-y-0">
              <Image
                src={image7}
                className="h-[358px] col-span-10 md:col-span-6 object-cover object-center"
                alt="image-7"
                unoptimized={disableImageOptimization}
              />
              <div className="flex flex-col col-span-10 md:col-span-4 justify-center text-[#27172F] h-full space-y-2 md:pl-7">
                <p className="font-sora font-semibold text-2xl  sm:text-3xl ">
                  Proven and Impactful Results
                </p>
                <p className="font-satoshi w-full paragraphText-Size ">
                  As a leading web development agency in Dubai, we fully
                  recognize and prioritize this objective, ensuring that all our
                  activities are geared towards generating qualified inquiries
                  and ROI.
                </p>
              </div>
            </div>
            <div className="grid-cols-10 w-full grid grid-flow-row space-y-4 md:space-y-0">
              <Image
                src={image8}
                className="h-[358px] col-span-10 md:col-span-6 object-cover object-center"
                alt="image-8"
                unoptimized={disableImageOptimization}
              />
              <div className="flex flex-col col-span-10 md:col-span-4 justify-center text-[#27172F] h-full space-y-2 md:pl-7">
                <p className="font-sora font-semibold  text-2xl  sm:text-3xl ">
                  Years of Experience in web development
                </p>
                <p className="font-satoshi w-full paragraphText-Size ">
                  With significant years of experience in web development, we
                  have honed our skills to deliver outstanding digital
                  solutions. Our expert team stays up to date with the latest
                  industry trends, ensuring cutting-edge websites that engage
                  users and drive results. From responsive designs to seamless
                  user experiences, we have a proven track record of creating
                  impactful online platforms.
                </p>
              </div>
            </div>
            <div className="grid-cols-10 w-full grid grid-flow-row space-y-4 md:space-y-0">
              <Image
                src={image9}
                className="h-[358px] col-span-10 md:col-span-6 object-cover object-center"
                alt="image-9"
                unoptimized={disableImageOptimization}
              />
              <div className="flex flex-col col-span-10 md:col-span-4 justify-center text-[#27172F] h-full space-y-2 md:pl-7">
                <p className="font-sora font-semibold  text-2xl  sm:text-3xl ">
                  Served 500+ Businesses Online
                </p>
                <p className="font-satoshi w-full paragraphText-Size ">
                  Our mission is to empower a million businesses to thrive in
                  the online world. With our proven track record of enabling the
                  success stories of over 500+ businesses across Dubai, we're
                  just getting started. We provide the best results to our
                  clients by aligning with the client’s web design and
                  development projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-screen h-fit  py-12 sm:py-14 md:py-16 space-y-12 sm:space-y-14 md:space-y-16 flex items-center flex-col bg-white overflow-x-hidden">
        <div className="w-full wrapper-padding">
          <div className="grid grid-cols-1 md:grid-cols-2-- lg:grid-cols-3 gap-5 w-full h-fit">
            <div className="col-span-1 lg:pr-10">
              <h4
                style={{}}
                className="font-sora font-semibold text-[#101763] text-3xl md:text-4xl xl:text-5xl  text-center lg:text-start !leading-[130%]  "
              >
                <span
                  style={{
                    background:
                      "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  Our
                </span>{" "}
                Process Of Web Development
              </h4>
            </div>
            <div className="col-span-1 grid grid-cols-1 grid-flow-row mt-20 gap-20 lg:gap-0">
              <div className="w-full relative h-fit col-span-1 bg-[#F2F4F9] flex flex-col text-[#27172F] space-y-4 px-10 pt-14 sm:pt-16 lg:pt-20 pb-10">
                <p className="text-[#EE2525] absolute text-[90px] sm:text-[150px] font-sora font-semibold -top-10 sm:-top-16 leading-none left-10">
                  1
                </p>
                <p className="font-sora font-semibold text-2xl md:text-3xl ">
                  Consultation & Requirements Phase 
                </p>
                <p className="font-satoshi w-full paragraphText-Size ">
                  In this phase, you tell us what you need for your business and
                  our web development agency in Dubai team we'll evaluate your
                  expectations. We'll provide you with several alternatives so
                  you can choose the most suitable and cost-effective solution. 
                </p>
              </div>

              <div className="w-full lg:hidden relative h-fit col-span-1 bg-[#F2F4F9] flex flex-col text-[#27172F] space-y-4 px-10 pt-14 sm:pt-16 lg:pt-20 pb-10">
                <p className="text-[#EE2525] absolute text-[90px] sm:text-[150px] font-sora font-semibold -top-10 sm:-top-16 leading-none left-10">
                  2
                </p>
                <p className="font-sora font-semibold  text-xl sm:text-2xl md:text-3xl ">
                  Planning Phase
                </p>
                <p className="font-satoshi w-full paragraphText-Size ">
                  After stage 1, we collaborate to finalize the plan,
                  milestones, deadlines, and cost for your web development
                  requirements, taking into account the estimated number of
                  hours required to complete the project. 
                </p>
              </div>
              <div className="w-full relative h-fit col-span-1  bg-[#F2F4F9] flex-- flex-col text-[#27172F] space-y-4 px-10 pt-14 sm:pt-16 lg:pt-20 pb-10 hidden lg:flex">
                <p className="text-[#EE2525] absolute text-[90px] sm:text-[150px] font-sora font-semibold -top-10 sm:-top-16-top-16 leading-none left-10">
                  3
                </p>
                <p className="font-sora font-semibold  text-xl sm:text-2xl md:text-3xl ">
                  Design, Development & Product Testing 
                </p>
                <p className="font-satoshi w-full paragraphText-Size ">
                  Our streamlined web development model ensures you receive the
                  first results quickly. We keep you informed at every step,
                  deploying logical blocks of the functionality on production
                  only after receiving your approval. 
                </p>
              </div>
            </div>
            <div className="col-span-1  grid grid-cols-1 grid-flow-row mt-16 lg:mt-52 gap-20 lg:gap-0 ">
              <div className="w-full hidden relative h-fit col-span-1 bg-[#F2F4F9] lg:flex flex-col text-[#27172F] space-y-4 px-10 pt-14 sm:pt-16 lg:pt-20 pb-10">
                <p className="text-[#EE2525] absolute text-[90px] md:text-[150px] font-sora font-semibold -top-10 sm:-top-16 leading-none left-10">
                  2
                </p>
                <p className="font-sora font-semibold  text-xl sm:text-2xl md:text-3xl ">
                  Planning Phase
                </p>
                <p className="font-satoshi w-full paragraphText-Size ">
                  After stage 1, we collaborate to finalize the plan,
                  milestones, deadlines, and cost for your web development
                  requirements, taking into account the estimated number of
                  hours required to complete the project. 
                </p>
              </div>
              <div className="w-full relative h-fit col-span-1  bg-[#F2F4F9] flex flex-col text-[#27172F] space-y-4 px-10 pt-14 sm:pt-16 lg:pt-20 pb-10  lg:hidden">
                <p className="text-[#EE2525] absolute text-[90px] sm:text-[150px] font-sora font-semibold -top-10 sm:-top-16-top-16 leading-none left-10">
                  3
                </p>
                <p className="font-sora font-semibold  text-xl sm:text-2xl md:text-3xl ">
                  Design, Development & Product Testing 
                </p>
                <p className="font-satoshi w-full paragraphText-Size ">
                  Our streamlined web development model ensures you receive the
                  first results quickly. We keep you informed at every step,
                  deploying logical blocks of the functionality on production
                  only after receiving your approval. 
                </p>
              </div>
              <div className="w-full relative h-fit col-span-1 lg:mt-24 bg-[#F2F4F9] flex flex-col text-[#27172F] space-y-4 px-10  pt-14 sm:pt-16 lg:pt-20 pb-10">
                <p className="text-[#EE2525] absolute text-[90px] sm:text-[150px] font-sora font-semibold -top-11 sm:-top-16 leading-none left-10">
                  4
                </p>
                <p className="font-sora font-semibold text-xl sm:text-2xl md:text-3xl ">
                  Deployment Phase
                </p>
                <p className="font-satoshi w-full paragraphText-Size ">
                  Our web development services are designed to ensure that your
                  project functions as expected and generates revenue for your
                  business. We remain available for any questions or suggestions
                  after completing the project. Develop super-fast and highly
                  scalable websites with us. 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full wrapper-padding">
          <div className="grid-cols-10 w-full grid gap-2 grid-flow-row ">
            <Image
              src={image10}
              className="h-[358px] col-span-10 md:col-span-6 object-cover object-center"
              alt="image-10"
              unoptimized={disableImageOptimization}
            />
            <div className="flex flex-col col-span-10 md:col-span-4 justify-center text-white bg-black h-full space-y-5 wrapper-padding md:px-20 py-10 md:py-0">
              <p
                style={{}}
                className="font-sora font-semibold text-[22px] text-center md:text-left  leading-normal "
              >
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #FF0C15 0%, #FFFFFF 50.42%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  Build
                </span>{" "}
                the ultimate user experience through your websites with us.
                Let’s talk about it today!
              </p>
              <div className="flex items-center justify-between py-3 text-black space-x-3.5 rounded-[50px] w-fit mx-auto md:mx-0  px-5 border border-white  bg-white  font-sora text-center text-sm ">
                <span className="">Contact Us</span>
                <svg
                  className="w-3 rotate-45 object-contain"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                    fill="#000"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full wrapper-padding">
          <div className="w-full grid grid-cols-3 gap-4 grid-flow-row h-fit">
            <h4
              style={{}}
              className="font-sora col-span-3 lg:col-span-1 font-semibold lg:pr-5 text-[#101763] text-3xl md:text-4xl lg:text-5xl !leading-[130%] text-left "
            >
              Industries <br className="hidden lg:block" /> We Serve
            </h4>
            <WeServe />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
