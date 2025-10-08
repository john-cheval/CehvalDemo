/** @format */

import React from "react";
import { fetchData } from "@/server/getHomePageData";
import CaseStudiesSection1 from "@/components/CaseStudies/CaseStudiesSection1";
import Section10 from "@/components/Home/Section10";
import { baseUrl } from "@/util/baseUrl";

async function CaseStudies() {
  const [data, clients] = await Promise.all([
    fetchData(`${baseUrl}/wp-json/custom/v1/projects?type=case_study`),
    fetchData(` ${baseUrl}/wp-json/custom/v1/all_clients`),
  ]);

  return (
    <>
      <CaseStudiesSection1 data={data} />
      <Section10 data={clients} />
    </>
  );
}

export default CaseStudies;
