import React from "react";
const AdsAlterComp = dynamic(() => import("@/components/AdsPage/AdsAlterComp"));
const AdsPageAlter = ({ pageData, faq_title, faq_list }) => {
  return (
    <>
      <AdsAlterComp page={pageData} faq_list={faq_list} faq_title={faq_title} />
    </>
  );
};

export default AdsPageAlter;
