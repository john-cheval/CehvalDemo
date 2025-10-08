"use client";
import { baseUrl } from "@/util/baseUrl";
import MobileReCaptcha from "@/util/MobileReCaptcha";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const MobileAdsForm = ({ id = "captcha1", isVisible = true }) => {
  const routers = useRouter();
  const recaptchaRef = useRef(null);
  const [token, setToken] = useState("");
  const [submitEnabled, setSubmitEnabled] = useState(false);

  const [formData, setFormData] = useState({
    textName: "",
    textPhone: "",
    emailAddress: "",
    textareaMsg: "",
  });

  useEffect(() => {
    if (token.length) {
      setSubmitEnabled(true);
    }
  }, [token]);

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

  const handleToken = (token) => {
    setToken(token);
  };

  const handleSubmit = async (e) => {
    console.log("enabled");
    e.preventDefault();

    const newformData = new FormData();
    newformData.append("text-name", formData.textName);
    newformData.append("text-phone", formData.textPhone);
    newformData.append("email-address", formData.emailAddress);
    newformData.append("textarea-msg", formData.textareaMsg);
    newformData.append("_wpcf7_unit_tag", "c243420");

    try {
      const response = await axios({
        method: "POST",
        url: `${baseUrl}/wp-json/contact-form-7/v1/contact-forms/5386/feedback`,
        data: newformData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (!response) {
        throw new Error("Network response was not ok");
      }

      if (!token) {
        console.error("Please verify the reCAPTCHA");
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
        textareaMsg: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="adsbgContat px-5 lg:px-8 xl:px-12 py-5 lg:py-8 xl:py-12 text-[#101763] rounded-[15px] lg:rounded-[30px]">
      <h2 className="font-sora text-2xl font-semibold text-left capitalize ">
        Book a free tech consult
      </h2>

      <form className="mt-5 space-y-3 lg:space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="textName" className="labelads">
            What's your name? <span className="text-[#d81100]">*</span>
          </label>

          <input
            type="text"
            id="textName"
            name="textName"
            value={formData.textName}
            onChange={handleChange}
            autoComplete="off"
            required
            maxLength={50}
            className="inputads placeholder-font-satoshi"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="textPhone" className="labelads">
            Your phone number <span className="text-[#d81100]">*</span>
          </label>

          <input
            type="number"
            id="textPhone"
            name="textPhone"
            value={formData.textPhone}
            onChange={handleChange}
            maxLength={15}
            autoComplete="off"
            required
            className="inputads placeholder-font-satoshi font-normal leading-[154%] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            placeholder="Your Phone Number"
          />
        </div>

        <div>
          <label htmlFor="emailAddress" className="labelads">
            Your email address<span className="text-[#d81100]">*</span>
          </label>

          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            maxLength={50}
            autoComplete="off"
            required
            className="inputads placeholder-font-satoshi"
            placeholder="E-mail address"
          />
        </div>

        <div>
          <label htmlFor="textareaMsg" className="labelads">
            Message
          </label>

          <textarea
            id="textareaMsg"
            name="textareaMsg"
            value={formData.textareaMsg}
            onChange={handleChange}
            autoComplete="off"
            maxLength={2000}
            className="inputads placeholder-font-satoshi resize-none"
            placeholder="Type here"
          ></textarea>
        </div>

        <div
          id={`${id}-container`}
          className="flex flex-col justify-center items-center gap-[15px] mt-[23px]"
        >
          {isVisible && (
            <MobileReCaptcha
              id={id}
              siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              callback={handleToken}
              ref={recaptchaRef}
            />
          )}
          {/* <ReCaptchaAds
            id={id === "captcha2" ? "captcha2" : "captcha1"}
            siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            callback={handleToken}
            ref={recaptchaRef}
            // isVisible={isVisible}
          /> */}
          <button
            type="submit"
            disabled={!submitEnabled}
            className="w-[229px] h-[59px] flex items-center justify-center bg-[#d81100] font-satoshi text-base font-medium leading-[154%] space-x-9 text-white rounded-lg mx-auto group hover:bg-[#101763] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send Request
            <Image
              src={"/Contact/arrow-white.png"}
              alt="arrow_right"
              width={30}
              height={30}
              sizes="100vw"
              className="w-[33px] h-[33px] ml-2 group-hover:translate-x-3 transition-all"
            />
          </button>
        </div>
      </form>
    </section>
  );
};

export default MobileAdsForm;
