import React from "react";

const PrivacyPolicyContent = ({ content, title }) => {
  return (
    <div className="wrapper-padding pt-36 pb-9">
      <div>
        <div className="space-y-2 mb-3 sm:mb-5 lg:mb-9">
          <h1 className="text-[#101763] font-sora text-2xl sm:text-3xl lg:text-[40px] font-semibold leading-[140%]">
            {title}
          </h1>
          {title && (
            <div className="md:h-[6px] h-[4px] w-[60px] md:w-[76px] bg-[#d81100]" />
          )}
        </div>
        <p
          dangerouslySetInnerHTML={{ __html: content }}
          className="text-[#101773] font-sora text-base font-normal leading-[187%]"
        />
      </div>
    </div>
  );
};

export default PrivacyPolicyContent;
