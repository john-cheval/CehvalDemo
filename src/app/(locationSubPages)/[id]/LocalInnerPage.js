"use client";
import dynamic from "next/dynamic";
import React from "react";

const DummyComp = dynamic(
  () => import("@/components/locationSubPage/dummyComp"),
  {
    ssr: false,
  }
);

const LocalInnerPage = ({ pageData, faq_title, faq_list }) => {
  return (
    <>
      <DummyComp page={pageData} faq_list={faq_list} faq_title={faq_title} />
    </>
  );
};

export default LocalInnerPage;
