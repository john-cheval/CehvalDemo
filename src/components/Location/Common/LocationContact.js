/** @format */
"use client";
import React, { useRef, useState } from "react";
import arrowForward from "../../../../public/Contact/arrow-white.png";
import axios from "axios";
import FormData from "form-data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { baseUrl } from "@/util/baseUrl";
import ReCaptcha from "@/util/ReCaptcha";
function LocationContact({ title, desc }) {
  const recaptchaRef = useRef(null);
  const routers = useRouter();
  const formRef = useRef(null);
  const [token, setToken] = useState("");
  const [submitEnabled, setSubmitEnabled] = useState(false);

  const [formData, setFormData] = useState({
    textName: "",
    textPhone: "",
    emailAddress: "",
    textCompany: "",
    textareaMsg: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "textPhone" && value.length <= 15 && /^[0-9]*$/.test(value)) {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else if (name !== "textPhone") {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newformData = new FormData();
    newformData.append("text-name", formData.textName);
    newformData.append("text-phone", formData.textPhone);
    newformData.append("email-address", formData.emailAddress);
    newformData.append("text-company", formData.textCompany);
    newformData.append("textarea-msg", formData.textareaMsg);
    newformData.append("_wpcf7_unit_tag", "2fcfb42");

    try {
      const response = await axios({
        method: "POST",
        url: `${baseUrl}/wp-json/contact-form-7/v1/contact-forms/5/feedback`,
        data: newformData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      if (!token) {
        toast.error("Please verify the reCAPTCHA", {
          autoClose: 1500,
        });
        return;
      }
      routers.push("/thank-you");
      setToken("");
      setSubmitEnabled(false);
      if (recaptchaRef.current) {
        recaptchaRef.current.resetCaptcha();
      }
      setFormData({
        textName: "",
        textPhone: "",
        emailAddress: "",
        textCompany: "",
        textareaMsg: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleToken = (token) => {
    setToken(token);
  };
  return (
    <div
      id="#contact"
      ref={formRef}
      className="relative w-screen h-fit  py-12 sm:py-14 md:py-16 space-y-12 sm:space-y-14 md:space-y-16 flex items-center flex-col bg-[#F8F8F8] overflow-x-hidden"
    >
      <div className="w-full wrapper-padding space-y-12 sm:space-y-14 md:space-y-16 flex flex-col">
        <div className="flex flex-col space-y-4">
          <p className="font-sora font-semibold text-[#101763] w-full text-center lg:text-start lg:max-w-[980px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
            {title}
          </p>
          <p className="font-satoshi w-full paragraphText-Size lg:max-w-[720px] text-center lg:text-start">
            {desc}
          </p>
        </div>
        <form
          id="contactForm"
          onSubmit={handleSubmit}
          className="flex w-full items-center h-fit space-x-0 md:space-y-0 space-y-10 md:space-x-10 lg:space-x-14 xl:space-x-20  justify-center flex-col md:flex-row"
        >
          <div className="w-full md:w-1/2 h-fit space-y-10 flex flex-col">
            <div className="flex flex-col space-y-3">
              <p className="font-satoshi font-medium text-xl">
                What’s your name? <span className="text-[#D81100]">*</span>
              </p>
              <input
                className="focus:ring-0 focus:outline-none border-b px-0.5 border-[#C4C4C4]  font-satoshi font-medium text-sm py-5 bg-transparent w-full active:ring-0 active:ring-offset-0 focus:ring-offset-0 block placeholder:text-main text-main"
                type="text"
                id="textName"
                name="textName"
                placeholder="Your full name"
                value={formData.textName}
                onChange={handleChange}
                maxLength={50}
                required
              />
            </div>
            <div className="flex flex-col space-y-3">
              <p className="font-satoshi font-medium text-xl">
                Your email address <span className="text-[#D81100]">*</span>
              </p>
              <input
                className="border-b px-0.5 focus:outline-none border-[#C4C4C4]  font-satoshi font-medium text-sm py-5 bg-transparent w-full focus:ring-0 focus:ring-offset-0 block placeholder:text-main text-main"
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                maxLength={50}
                required
                placeholder="E-mail address"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <p className="font-satoshi font-medium text-xl">
                Your phone number <span className="text-[#D81100]">*</span>
              </p>
              <input
                className="border-b px-0.5 focus:outline-none border-[#C4C4C4] placeholder:text-main text-main font-satoshi font-medium text-sm py-5 bg-transparent w-full focus:ring-0 focus:ring-offset-0 block"
                type="number"
                id="textPhone"
                name="textPhone"
                value={formData.textPhone}
                onChange={handleChange}
                maxLength={15}
                required
                placeholder="Phone number"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <p className="font-satoshi font-medium text-xl">Website url</p>
              <input
                className="border-b px-0.5 focus:outline-none border-[#C4C4C4] placeholder:text-main text-main font-satoshi font-medium text-sm py-5 bg-transparent w-full focus:ring-0 focus:ring-offset-0 block"
                type="text"
                id="textCompany"
                name="textCompany"
                value={formData.textCompany}
                onChange={handleChange}
                required
                placeholder="www.domine.com"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 h-fit space-y-10 flex flex-col">
            <div className="flex flex-col space-y-3">
              <p className="font-satoshi font-medium text-xl">
                Describe your project <span className="text-[#D81100]">*</span>
              </p>
              <textarea
                placeholder="Write here..."
                id="textareaMsg"
                name="textareaMsg"
                value={formData.textareaMsg}
                maxLength={2000}
                onChange={handleChange}
                required
                className="border p-3 h-80 focus:outline-none border-[#C4C4C4] placeholder:text-main text-main font-satoshi font-medium text-sm py-5 bg-transparent w-full focus:ring-0 focus:ring-offset-0"
              ></textarea>
            </div>
            <div className=" hidden inline-flex-- items-center">
              <label
                className="relative flex items-center pr-3 rounded-full cursor-pointer"
                htmlFor="check"
              >
                <input
                  type="checkbox"
                  className=" peer relative h-6 w-6 cursor-pointer rounded-none  appearance-none  border border-[#C4C4C4] transition-all  checked:border-[#101763] checked:bg-[#101763] checked:before:bg-[#101763] "
                  id="check"
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-[35%] -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className="font-satoshi max-w-[344px] text-sm cursor-pointer select-none placeholder:text-main text-main"
                htmlFor="check"
              >
                I agree to move processing the information submitted in order to
                respond to your request.
              </label>
            </div>

            <div className="flex flex-col justify-center items-center md:items-start gap-[15px] mt-[23px]">
              <ReCaptcha
                siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                callback={handleToken}
                ref={recaptchaRef}
              />
              <button
                type="submit"
                className="w-[229px]  h-[59px] flex items-center justify-center bg-[#d81100] font-satoshi text-base font-medium leading-[154%] space-x-9 text-white rounded-lg mx-auto-- group hover:bg-[#101763] transition-all duration-500 "
              >
                Send a Request
                <Image
                  src={arrowForward}
                  alt="arrow_right"
                  className="w-[33px] h-[33px] ml-2 group-hover:translate-x-3 transition-all"
                />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LocationContact;
