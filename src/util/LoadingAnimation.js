/** @format */
"use client";
import React from "react";
import logo from "../../public/logo.svg";
import { ThreeDots } from "react-loader-spinner";
import Image from "next/image";
function LoadingAnimation() {
  return (
    <div className="flex items-center flex-col space-y-1 h-[100dvh] w-screen justify-center">
      <Image src={logo} className="w-40 object-contain" alt="logo" />
      <div>
        <ThreeDots
          visible={true}
          height="40"
          width="40"
          color="#888888"
          radius="4"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
}

export default LoadingAnimation;
