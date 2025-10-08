"use client";
import React from "react";

const ShareButton = ({ itemData }) => {
  const handleShareClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: itemData?.post_title || "Job Opportunity",
          text: `Check out this job at Cheval!`,
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing the job:", error);
      }
    } else {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => {
          toast.info("Link copied to clipboard");
        })
        .catch((err) => {
          console.error("failed to copy link:", err);
        });
    }
  };
  return (
    <button
      className="flex items-center gap-2 text-sm text-[#101763] font-satoshi rounded-md px-[13px] py-[10px] bg-[#F5F5F5]"
      onClick={handleShareClick}
    >
      <img src="/career/share.svg" />
      Share this job
    </button>
  );
};

export default ShareButton;
