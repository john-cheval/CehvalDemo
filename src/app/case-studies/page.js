import CaseStudies from "@/page-views/CaseStudy";
import { baseUrl } from "@/util/baseUrl";
import React from "react";

export async function generateMetadata(parent) {
  const data = await fetch(
    `${baseUrl}/wp-json/custom/v1/projects?type=case_study`
  ).then((res) => res.json());

  return {
    title:
      data?.meta_title ||
      "Best Web Developers in Dubai | Software Developers in Dubai",
    description:
      data?.meta_description ||
      "Partner with top Web Developers in Dubai at Cheval . We Specialize in Mobile App and Software Development, delivering cutting-edge tailored digital solutions.",
    alternates: {
      canonical: `https://chevalme.com/case-studies/`,
    },
  };
}

export default async function CaseStudy() {
  return <CaseStudies />;
}
