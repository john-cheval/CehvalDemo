/** @format */

import React from "react";
import Image from "next/image";
import image1 from "../../../../public/dammam/1.png";
import image2 from "../../../../public/dammam/2.png";
import image3 from "../../../../public/dammam/3.png";
import image5 from "../../../../public/dammam/9.jpeg";
import Link from "next/link";
import WeServe from "../Common/WeServe";
import WebDevProcess from "../Common/WebDevProcess";
import WhyChooseUs from "../Common/WhyChooseUs";
import HowAreWe from "../Common/HowAreWe";
import { disableImageOptimization } from "@/util/constants";
function Section1() {
  return (
    <>
      <div className="relative w-screen h-fit  space-y-12 pt-24 sm:pt-28 md:pt-36  sm:space-y-14 md:space-y-16 flex items-center flex-col bg-white overflow-x-hidden">
        <div className="w-full h-fit  wrapper-padding">
          <div className="flex items-center lg:items-start xl:space-y-0 space-y-4 xl:items-end lg:flex-row flex-col justify-between w-full">
            <div className="flex flex-col space-y-4 w-fit lg:max-w-[760px]">
              <h1 className="capitalize font-sora font-bold  md:leading-tight sm:leading-tight leading-tight   text-[#101763] text-center lg:text-left text-3xl sm:text-4xl md:text-5xl">
                Web Development Company In{" "}
                <span className="underline decoration-2 underline-offset-8">
                  Dammam
                </span>
              </h1>
              <p className="font-satoshi  text-black paragraphText-Size text-center lg:text-left">
                Cheval ME is a leading web development company in Dammam. We
                offer innovative and professional web design solutions to help
                businesses thrive online.
              </p>
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
        <div className="w-full">
          <div className=" w-full relative">
            <Image
              src={image1}
              className="h-fit w-full object-contain object-center"
              alt="image-1"
              unoptimized={disableImageOptimization}
            />
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent via-transparent  items-end to-black to-95% hidden md:flex">
              <p className="font-satoshi max-w-[900px] px-14 py-14 text-white paragraphText-Size">
                As a Web Development Agency in Dammam, Cheval, our expertise
                plays a crucial role in the success of businesses. Our expertise
                lies in developing visually captivating and user-friendly
                websites that attract and captivate customers. Our designs are
                tailored to reflect the unique brand identity of each client,
                helping them stand out in the competitive online market. Trust
                Cheval ME for exceptional web design services.We understand the
                importance of user experience and design, and we work closely
                with you to create a website that is both functional and
                visually appealing.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-screen h-fit  py-12 sm:py-14 md:py-16 space-y-12 sm:space-y-14 md:space-y-16 flex items-center flex-col bg-gradient-to-b from-[#f3f4f9] to-white to-95% overflow-x-hidden">
        <div className="w-full h-fit  wrapper-padding">
          <div className="w-full grid grid-cols-4 lg:grid-cols-12 grid-flow-row gap-y-5 lg:gap-y-0 lg:gap-x-4">
            <div className="flex space-y-5  sm:items-start pr-2 items-center sm:justify-start justify-center  flex-col col-span-4  h-fit">
              <h2
                style={{
                  background:
                    "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",

                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
                className="font-sora font-semibold text-[#101763] text-2xl text-center lg:text-left md:text-3xl lg:text-4xl  !leading-[130%] "
              >
                Expert Web Development Solutions For All Sectors by Cheval
              </h2>
              <div className="my-3 lg:ml-1 w-full max-w-40 h-[1px] bg-black mx-auto"></div>
            </div>
            <div className="col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 ">
              <div className="flex relative rounded-lg  bg-white w-full h-full">
                <Link href={"/projects"}>
                  <div className="flex absolute top-0 left-0 bg-[#F2F4F9] mt-8 mx-8 items-center justify-between py-2.5 text-[#27172F] space-x-2 rounded-[50px] w-fit z-20  px-4    font-sora text-center text-sm ">
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
                <div className="flex w-full h-full  flex-col py-8 lg:justify-between px-10">
                  <div className="font-sora w-fit  mt-20 mb-8  font-semibold text-[#101763] text-2xl md:text-3xl ">
                    <h3 className="mb-3 md:mb-4">Responsive web design</h3>
                    <div className="h-[1px] w-16 bg-black"></div>
                  </div>
                  <div className="flex flex-col ">
                    <p className="font-satoshi w-full paragraphText-Size text-black">
                      The design services we offer ensure seamless functionality
                      and appearance across all devices, including desktops,
                      tablets, and mobile phones. As a result, the user
                      experience is enhanced and engagement is increased.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex relative rounded-lg  bg-white w-full h-full">
                <Link href={"/projects"}>
                  <div className="flex absolute top-0 left-0 bg-[#F2F4F9] my-8 mx-8 items-center justify-between py-2.5 text-[#27172F] space-x-2 rounded-[50px] w-fit  z-20  px-4    font-sora text-center text-sm ">
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
                <div className="flex w-full h-full  flex-col py-8 justify-between px-10">
                  <div className="font-sora w-fit  mt-20 mb-8  font-semibold text-[#101763] text-2xl md:text-3xl ">
                    <h3 className="mb-3 md:mb-4">Custom Web Development</h3>
                    <div className="h-[1px] w-16 bg-black"></div>
                  </div>
                  <div className="flex flex-col space-y-5--">
                    <p className="font-satoshi w-full paragraphText-Size text-black">
                      Our skilled developers can create custom websites tailored
                      to your business needs. We use the latest technologies and
                      frameworks to build robust and scalable websites that are
                      easy to manage and update.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex relative rounded-lg  bg-white w-full h-full">
                <Link href={"/projects"}>
                  <div className="flex absolute top-0 left-0 bg-[#F2F4F9] my-8 mx-8 items-center justify-between py-2.5 text-[#27172F] space-x-2 rounded-[50px] w-fit z-20  px-4    font-sora text-center text-sm ">
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
                <div className="flex w-full h-full  flex-col py-8 justify-between px-10">
                  <div className="font-sora w-fit  mt-20 mb-8  font-semibold text-[#101763] text-2xl md:text-3xl ">
                    <h3 className="mb-3 md:mb-4">E-commerce Solutions</h3>
                    <div className="h-[1px] w-16 bg-black"></div>
                  </div>
                  <div className="flex flex-col space-y-5">
                    <p className="font-satoshi w-full paragraphText-Size text-black">
                      We specialize in developing e-commerce websites that are
                      user-friendly, secure, and optimized for conversions. Our
                      e-commerce solutions include features such as product
                      catalogs, shopping carts, payment gateways, and inventory
                      management.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex relative rounded-lg  bg-white w-full h-full">
                <Link href={"/projects"}>
                  <div className="flex absolute top-0 left-0 bg-[#F2F4F9] my-8 mx-8 items-center justify-between py-2.5 text-[#27172F] space-x-2 rounded-[50px] w-fit z-20  px-4    font-sora text-center text-sm ">
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
                <div className="flex w-full h-full  flex-col py-8 justify-between px-10">
                  <div className="font-sora w-fit  mt-20 mb-8  font-semibold text-[#101763] text-2xl md:text-3xl ">
                    <h3 className="mb-3 md:mb-4">UI/UX Design</h3>
                    <div className="h-[1px] w-16 bg-black"></div>
                  </div>
                  <div className="flex flex-col space-y-5">
                    <p className="font-satoshi w-full paragraphText-Size text-black">
                      We develop visually captivating user interfaces that
                      enhance the user experience. Our UI/UX design services
                      include wireframing, prototyping, and conducting user
                      testing to ensure seamless navigation of your website and
                      visually appealing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex relative rounded-lg  bg-white w-full h-full">
                <Link href={"/projects"}>
                  <div className="flex absolute top-0 left-0 bg-[#F2F4F9] my-8 mx-8 items-center justify-between py-2.5 text-[#27172F] space-x-2 rounded-[50px] w-fit z-20  px-4    font-sora text-center text-sm ">
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
                <div className="flex w-full h-full  flex-col py-8 justify-between px-10">
                  <div className="font-sora w-fit  mt-20 mb-8  font-semibold text-[#101763] text-2xl md:text-3xl ">
                    <h3 className="mb-3 md:mb-4">SEO Optimisation</h3>
                    <div className="h-[1px] w-16 bg-black"></div>
                  </div>
                  <div className="flex flex-col space-y-5">
                    <p className="font-satoshi w-full paragraphText-Size text-black">
                      We understand the importance of search engine optimisation
                      (SEO) in driving organic traffic to your website. Our web
                      design services include on-page optimisation, keyword
                      research, and content optimisation to improve your
                      website's visibility in search engine results.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex relative rounded-lg  bg-white w-full h-full">
                <Link href={"/projects"}>
                  <div className="flex absolute top-0 left-0 bg-[#F2F4F9] my-8 mx-8 items-center justify-between py-2.5 text-[#27172F] space-x-2 rounded-[50px] w-fit  z-20  px-4    font-sora text-center text-sm ">
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
                <div className="flex w-full h-full  flex-col py-8 justify-between px-10">
                  <div className="font-sora w-fit  mt-20 mb-8  font-semibold text-[#101763] text-2xl md:text-3xl ">
                    <h3 className="mb-3 md:mb-4">
                      Website Maintenance and Support
                    </h3>
                    <div className="h-[1px] w-16 bg-black"></div>
                  </div>
                  <div className="flex flex-col space-y-5">
                    <p className="font-satoshi w-full paragraphText-Size text-black">
                      We offer ongoing website maintenance and support services
                      to ensure that your website is always up-to-date, secure,
                      and performing optimally. Our team can assist with any
                      technical issues, updates, or enhancements you may
                      require.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-span-1 hidden lg:block"></div> */}{" "}
          </div>
        </div>
        <div className="w-full h-fit  wrapper-padding">
          <div className="grid w-full gap-5 grid-cols-9">
            <h4
              style={{
                background:
                  "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",

                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
              className="font-sora font-semibold  text-[#101763] text-2xl md:text-3xl  !leading-[130%] text-center lg:text-left col-span-9 lg:col-span-4  "
            >
              Why is a Web Design Company important in Dammam?
            </h4>
            <p className="font-satoshi w-full paragraphText-Size text-center lg:text-left col-span-9 lg:col-span-5 text-[#27172F]">
              A web design company in Dammam is crucial for your business as it
              helps create a strong online presence. We have the expertise to
              design a visually appealing, user-friendly website that attracts
              potential customers. A professional web design company ensures
              your website is responsive, optimized for search engines, and
              compatible with different devices. They also provide ongoing
              support and maintenance to keep your website up-to-date. With
              their services, you can effectively showcase your products or
              services, increase brand visibility, and drive more traffic and
              conversions to your business.
            </p>
          </div>
        </div>
        <div className="w-full wrapper-padding  h-fit ">
          <div className="w-full h-fit relative overflow-hidden  flex ">
            <Image
              alt="image-2"
              src={image2}
              className="object-cover w-[50%] rounded-lg absolute top-0 right-0 h-full object-right"
              unoptimized={disableImageOptimization}
            />
            <div className="absolute right-0 top-0 h-full w-[100%] rounded-lg  bg-gradient-to-l from-transparent to-[#F2F4F9] to-50% z-20"></div>

            <div className="flex flex-col justify-center space-y-5 py-24 text-black  z-20 relative lg:w-[55%] wrapper-padding lg:px-20 h-fit">
              <h4
                style={{
                  background:
                    "linear-gradient(92.09deg, #FF0C15 0.33%, #27172F 26.13%)",

                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
                className="font-sora font-semibold text-[#101763] text-2xl sm:text-3xl text-center lg:text-start  !leading-[130%] "
              >
                Need A Web Design Company In Dammam?
              </h4>
              <p className="font-satoshi w-full paragraphText-Size text-center lg:text-start">
                At Cheval ME, we understand the need for a reliable web design
                company in Dammam. We are dedicated to delivering top-notch web
                design. We tailor our services to suit the distinct requirements
                of businesses in the region. Our skilled designers and
                developers work closely with clients to create visually
                appealing, user-friendly websites that communicate their brand
                message. With our expertise, businesses in Dammam can enhance
                their online presence and attract more customers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-screen h-fit  py-12 sm:py-14 md:py-16 space-y-12 sm:space-y-14 md:space-y-16 flex items-center flex-col bg-white overflow-x-hidden">
        {/* Why Choose us */}
        <WhyChooseUs location="Dammam" />
        {/* How are we */}
        <HowAreWe />
        <div className="w-full wrapper-padding">
          <div className="grid grid-cols-3 gap-5 w-full h-fit">
            <div className="flex space-y-5 sm:space-y-10 sm:items-start pr-2 items-center sm:justify-start justify-center  flex-col col-span-3 md:col-span-1 h-fit">
              <h4
                style={{
                  background:
                    "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",

                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
                className="font-sora font-semibold  text-2xl sm:text-3xl md:text-4xl   !leading-[130%] text-center mx-auto lg:mx-0 lg:text-left "
              >
                Our Process Of Web Development
              </h4>
              <div className="my-3 md:ml-1 w-full max-w-40 h-[1px] mx-auto bg-black"></div>
            </div>
            {/* Process */}
            <WebDevProcess />
          </div>
        </div>
        <div className="w-full wrapper-padding  h-fit  ">
          <div className="w-full h-fit relative overflow-hidden  flex ">
            <Image
              alt="image-3"
              src={image3}
              className="object-cover w-1/2 rounded-lg absolute top-0 right-0 h-full object-right"
              unoptimized={disableImageOptimization}
            />
            <div className="absolute right-0 top-0 h-full w-[100%] rounded-lg  bg-gradient-to-l from-transparent to-[#F2F4F9] to-50% z-20"></div>

            <div className="flex flex-col justify-center space-y-5 py-24 text-black  z-20 relative lg:w-[55%] wrapper-padding lg:px-20 h-fit">
              <h4
                // style={{
                //   background:
                //     "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",

                //   WebkitBackgroundClip: "text",
                //   WebkitTextFillColor: "transparent",
                //   color: "transparent",
                // }}
                className="font-sora font-semibold text-[#101763] text-center lg:text-left text-2xl md:text-3xl  !leading-[130%] "
              >
                Benefits Of Hiring Our Web Design Services In Dammam
              </h4>
              <p className="font-satoshi w-full paragraphText-Size text-center lg:text-left">
                Our web design company in Dammam offers the best web design
                services in the area, providing numerous benefits to businesses.
                With our expertise, we create visually appealing We create
                user-friendly websites that effectively portray your brand and
                allure potential customers. Our skilled designers and developers
                ensure your website is responsive, optimized for search engines,
                and compatible with all devices. By engaging our services, you
                can save valuable time and effort as we handle all aspects of
                web design, from concept to implementation. Additionally, our
                services are cost-effective, delivering high-quality results
                within your budget. Trust our web design company in Dammam to
                elevate your online presence and foster business growth.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full wrapper-padding  h-fit  ">
          <div className="w-full h-fit relative overflow-hidden rounded-lg flex items-end justify-end">
            <Image
              src={image5}
              alt="image-5"
              className="object-cover w-1/2 absolute top-0 rounded-lg left-0 h-full object-left"
              unoptimized={disableImageOptimization}
            />
            <div className="absolute right-0 top-0 h-full w-[100%] rounded-lg bg-gradient-to-r from-transparent to-black to-50% z-20"></div>
            {/* <div className="absolute -right-32 top-1/2 -translate-y-1/2 z-20 blur-[120px] rounded-full w-64 h-64 bg-[#FF0C15]"></div> */}

            <div className="flex flex-col justify-center space-y-8 py-24 text-white  z-20 relative lg:w-[55%] wrapper-padding  lg:pr-5 sm:pr-10 md:pr-12 h-fit">
              <p
                style={{
                  background:
                    "linear-gradient(90deg, #FF0C15 0%, #FFFFFF 13.42%)",

                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
                className="font-sora font-semibold text-[#101763] text-2xl  !leading-[130%] text-center lg:text-left "
              >
                Transform Your Web Design Into a Fully Functional Website With
                Our Top-Notch Web Development Services!
              </p>
              <Link href={"/contact-us"} className="mx-auto lg:mx-0">
                <div className="flex items-center justify-between py-3 space-x-5 rounded-[50px] sm:w-fit w-full  px-6 border border-[#EE2525] bg-[#EE2525] text-white   font-sora text-center  text-sm ">
                  <span className="">Contact Us</span>
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
                className="font-sora font-semibold text-2xl sm:text-3xl md:text-4xl  !leading-[130%] text-center mx-auto lg:mx-0 lg:text-left "
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
