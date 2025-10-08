const SerivcesComp = dynamic(
  () => import("@/components/ServicesInners/ServicesComp")
);
import dynamic from "next/dynamic";
import React from "react";

const ServicesInnerPage = ({ pageData }) => {
  return <SerivcesComp page={pageData} />;
};

export default ServicesInnerPage;
