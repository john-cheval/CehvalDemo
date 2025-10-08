import { CircleCheck, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const ThankYouPage = ({ thankYouData }) => {
  return (
    <>
      {thankYouData && (
        <section className="flex items-center justify-center h-screen wrapper-padding">
          <div className="bg-white  rounded-lg shadow-md flex flex-col justify-center items-center py-5 px-6 gap-y-5 sm:gap-y-7">
            <CircleCheck strokeWidth={2} stroke="#101763" size={50} />

            <h1 className=" text-2xl sm:text-4xl font-bold text-center mt-6-- text-[#101763] leading-[140%] font-sora">
              {thankYouData?.post_title}
            </h1>

            <div
              className="font-sora text-base text-center"
              dangerouslySetInnerHTML={{ __html: thankYouData?.post_content }}
            />

            <Link
              href="/"
              className="text-white font-sora text-base rounded-full px-6 py-2 font-semibold bg-[#101763] hover:bg-[#d81100] transition-all duration-300"
            >
              Back to Home Page
            </Link>

            <div className="flex sm:flex-row flex-col gap-y-5 sm:gap-x-4 items-center">
              <p className="font-sora text-xl sm:text-3xl text-dark">
                Let's Connect
              </p>

              <div className="flex gap-x-2">
                <Link
                  target="_blank"
                  href={"https://www.facebook.com/chevalmiddleeast"}
                >
                  <Facebook strokeWidth={2} stroke="#d81100" />
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.instagram.com/chevalmiddleeast/"}
                >
                  <Instagram strokeWidth={2} stroke="#d81100" />
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/company/chevalmiddleeast/"}
                >
                  <Linkedin strokeWidth={2} stroke="#d81100" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ThankYouPage;
