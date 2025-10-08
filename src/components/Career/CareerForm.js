"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { baseUrl } from "@/util/baseUrl";
import arrowForward from "../../../public/Contact/arrow-white.png";
import { ToastContainer, toast } from "react-toastify";
import ReCaptcha from "@/util/ReCaptcha";

export const CareerForm = ({ title, isCareerInner = "" }) => {
  const [fileName, setFileName] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef(null);
  const [token, setToken] = useState("");
  const [submitEnabled, setSubmitEnabled] = useState(false);

  useEffect(() => {
    if (token.length) {
      setSubmitEnabled(true);
    }
  }, [token]);

  const MAX_FILE_SIZE_MB = 10;

  const handleFileValidation = (selectedFile) => {
    if (!selectedFile) return false;
    const sizeInMB = selectedFile.size / (1024 * 1024);
    if (sizeInMB > MAX_FILE_SIZE_MB) {
      toast.error(`File size must be less than ${MAX_FILE_SIZE_MB} MB`);
      return false;
    }
    return true;
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0] || null;
    if (handleFileValidation(selectedFile)) {
      setFile(selectedFile);
      setFileName(selectedFile?.name || null);
    } else {
      setFile(null);
      setFileName(null);
      e.target.value = "";
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0] || null;
    if (handleFileValidation(droppedFile)) {
      setFile(droppedFile);
      setFileName(droppedFile?.name || null);
    } else {
      setFile(null);
      setFileName(null);
    }
  };

  const [formData, setFormData] = useState({
    textName: "",
    textPhone: "",
    emailAddress: "",
    textPosition: "",
    textareaMsg: "",
    selectedService: "",
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
    setLoading(true);

    // store reference to the form
    // const form = e.currentTarget;

    try {
      const newformData = new FormData();

      if (file) {
        newformData.append("file-cv", file);
      }
      newformData.append("text-name", formData.textName);
      newformData.append("text-phone", formData.textPhone);
      newformData.append("email-address", formData.emailAddress);
      newformData.append(
        "text-position",
        isCareerInner ? isCareerInner : formData.textPosition
      );
      newformData.append("textarea-msg", formData.textareaMsg);
      newformData.append("_wpcf7_unit_tag", "69a98fb");
      const response = await axios({
        method: "POST",
        url: `${baseUrl}/wp-json/contact-form-7/v1/contact-forms/5461/feedback`,
        data: newformData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.status === "mail_sent") {
        toast.success(response.data.message || "Form Submit Successfully.", {
          autoClose: 1500,
        });

        setFormData({
          textName: "",
          textPhone: "",
          emailAddress: "",
          textCompany: "",
          textareaMsg: "",
          selectedService: "",
        });
        setToken("");
        setFile(null);
        setFileName(null);
      } else if (response.data.status === "validation_failed") {
        // show validation error
        toast.error(
          response.data.message || "One or more fields have an error.",
          {
            autoClose: 2000,
          }
        );
      } else {
        toast.error(response.data.message || "Something went wrong.", {
          autoClose: 2000,
        });
      }
      setToken("");
      setSubmitEnabled(false);
      if (recaptchaRef.current) {
        recaptchaRef.current.resetCaptcha();
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleToken = (token) => {
    setToken(token);
  };

  return (
    <section className="bg-white pb-10 md:pb-24 ">
      <h2 className="font-sora font-semibold text-2xl md:text-3xl lg:text-[32px] xl:text-[40px] sm:tracking-[-1.76px] leading-[121%] text-center  text-[#101763]  mb-[20px] md:mb-[45px]">
        {title}
      </h2>

      <form
        id="contactForm"
        onSubmit={handleSubmit}
        className="space-y-5 lg:space-y-8 max-w-6xl mx-auto px-6"
      >
        {/* Name + Phone */}
        <div className="flex sm:items-center flex-col sm:flex-row sm:space-x-5 space-y-5 sm:space-y-0 w-full">
          <div className="relative w-full sm:max-w-[50%]">
            <input
              type="text"
              id="text-name"
              name="textName"
              required
              onChange={handleChange}
              value={formData.textName}
              maxLength={50}
              className="w-full border border-[#d9d9d9] h-[73px] rounded-lg block pl-7 py-6 bg-white placeholder:text-[#101763] outline-none text-[#101763]"
              placeholder="Enter Name"
            />
            <label
              htmlFor="text-name"
              className="text-[#d81100] text-xs absolute top-[-8px] left-3 bg-white px-3 z-10"
            >
              Name
            </label>
          </div>
          <div className="relative w-full sm:max-w-[50%]">
            <input
              type="number"
              id="text-phone"
              name="textPhone"
              value={formData.textPhone}
              onChange={handleChange}
              required
              pattern="[0-9]{10,15}"
              maxLength={15}
              autoComplete="off"
              className="w-full border border-[#d9d9d9] rounded-lg block pl-7 py-6 bg-white placeholder:text-[#101763] outline-none text-[#101763]"
              placeholder="Enter Phone"
            />
            <label
              htmlFor="text-phone"
              className="text-[#d81100] text-xs absolute top-[-8px] left-3 bg-white px-3 z-10"
            >
              Phone
            </label>
          </div>
        </div>

        {/* Email + Position */}
        <div className="flex sm:items-center flex-col sm:flex-row sm:space-x-5 space-y-5 sm:space-y-0">
          <div className="relative w-full sm:max-w-[50%]">
            <input
              type="email"
              id="email-address"
              name="emailAddress"
              required
              value={formData.emailAddress}
              onChange={handleChange}
              autoComplete="off"
              maxLength={50}
              className="w-full border border-[#d9d9d9] rounded-lg block pl-7 py-6 bg-white placeholder:text-[#101763] outline-none text-[#101763]"
              placeholder="Enter Email"
            />
            <label
              htmlFor="email-address"
              className="text-[#d81100] text-xs absolute top-[-8px] left-3 bg-white px-3 z-10"
            >
              Email
            </label>
          </div>

          {isCareerInner ? (
            <div className="relative w-full sm:max-w-[50%]">
              <input
                type="text"
                id="text-position"
                name="textPosition"
                required
                maxLength={50}
                className="w-full border border-[#d9d9d9] h-[73px] rounded-lg block pl-7 py-6 bg-white placeholder:text-[#101763] outline-none text-[#101763]"
                placeholder={isCareerInner}
                defaultValue={isCareerInner}
                readOnly
                disabled
              />
              <label
                htmlFor="text-position"
                className="text-[#d81100] text-xs absolute top-[-8px] left-3 bg-white px-3 z-10"
              >
                Position
              </label>
            </div>
          ) : (
            <div className="relative w-full sm:max-w-[50%]">
              <input
                type="text"
                id="text-position"
                name="textPosition"
                required
                maxLength={50}
                className="w-full border border-[#d9d9d9] h-[73px] rounded-lg block pl-7 py-6 bg-white placeholder:text-[#101763] outline-none text-[#101763]"
                placeholder="Position applied for"
                value={formData?.textPosition}
                onChange={handleChange}
              />
              <label
                htmlFor="text-position"
                className="text-[#d81100] text-xs absolute top-[-8px] left-3 bg-white px-3 z-10"
              >
                Position
              </label>
            </div>
          )}
        </div>

        {/* Resume Upload */}
        <div className="flex justify-center">
          <label
            htmlFor="resumeUpload"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className="flex items-center gap-2 cursor-pointer text-[#101763] font-satoshi text-lg hover:text-[#d81100] transition-colors"
          >
            {fileName ? fileName : "Upload your resume"}
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_7778_7844"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="37"
                height="37"
              >
                <rect width="36.7041" height="36.7041" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_7778_7844)">
                <path
                  d="M9.94261 30.5866C7.62311 30.5866 5.64135 29.7837 3.99731 28.1779C2.35327 26.5721 1.53125 24.6094 1.53125 22.2899C1.53125 20.3018 2.13024 18.5303 3.32822 16.9755C4.5262 15.4207 6.09377 14.4266 8.03093 13.9933C8.66816 11.6483 9.94261 9.74936 11.8543 8.29649C13.766 6.84362 15.9325 6.11719 18.354 6.11719C21.3362 6.11719 23.866 7.15586 25.9433 9.23321C28.0207 11.3106 29.0593 13.8403 29.0593 16.8225C30.8181 17.0265 32.2773 17.7848 33.4371 19.0974C34.5968 20.4101 35.1767 21.9458 35.1767 23.7046C35.1767 25.6162 34.5076 27.2412 33.1694 28.5793C31.8313 29.9175 30.2063 30.5866 28.2947 30.5866H19.8833C19.0422 30.5866 18.3221 30.2871 17.7231 29.6881C17.1241 29.0891 16.8246 28.369 16.8246 27.5279V19.6518L14.3777 22.0223L12.2366 19.8812L18.354 13.7639L24.4713 19.8812L22.3302 22.0223L19.8833 19.6518V27.5279H28.2947C29.3652 27.5279 30.2701 27.1583 31.0092 26.4191C31.7484 25.68 32.118 24.7751 32.118 23.7046C32.118 22.634 31.7484 21.7292 31.0092 20.99C30.2701 20.2508 29.3652 19.8812 28.2947 19.8812H26.0007V16.8225C26.0007 14.707 25.2551 12.9036 23.764 11.4125C22.2729 9.92141 20.4695 9.17586 18.354 9.17586C16.2384 9.17586 14.435 9.92141 12.9439 11.4125C11.4528 12.9036 10.7073 14.707 10.7073 16.8225H9.94261C8.46425 16.8225 7.20254 17.3451 6.1575 18.3901C5.11245 19.4352 4.58993 20.6969 4.58993 22.1752C4.58993 23.6536 5.11245 24.9153 6.1575 25.9603C7.20254 27.0054 8.46425 27.5279 9.94261 27.5279H13.766V30.5866H9.94261Z"
                  fill="#D81100"
                />
              </g>
            </svg>
          </label>
          <input
            id="resumeUpload"
            name="file-cv"
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* Message */}
        <div className="relative w-full">
          <textarea
            id="textarea-msg"
            name="textareaMsg"
            value={formData?.textareaMsg}
            onChange={handleChange}
            maxLength={2000}
            className="w-full h-[116px] border border-[#d9d9d9] rounded-lg block pl-7 py-6 bg-white placeholder:text-[#101763] outline-none text-[#101763] resize-none"
            placeholder="Enter Message"
          />
          <label
            htmlFor="textarea-msg"
            className="text-[#d81100] text-xs absolute top-[-8px] left-3 bg-white px-3 z-10"
          >
            Message
          </label>
        </div>

        <div className="flex justify-center">
          <ReCaptcha
            siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            callback={handleToken}
            ref={recaptchaRef}
            id={"captcha1"}
          />
        </div>

        {/* Submit */}
        <div className="flex flex-col justify-center items-center gap-[15px] mt-[23px]">
          <button
            type="submit"
            disabled={loading || !token}
            className="w-[142px] h-[59px] flex items-center justify-center bg-[#d81100] text-white rounded-lg mx-auto group hover:bg-[#101763] transition-all duration-500 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Apply"}
            <Image
              src={arrowForward}
              alt="arrow_right"
              className="w-[33px] h-[33px] ml-2 group-hover:translate-x-3 transition-all"
            />
          </button>
        </div>
      </form>
      <ToastContainer />
    </section>
  );
};
