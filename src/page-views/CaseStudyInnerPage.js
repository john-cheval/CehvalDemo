/** @format */

import FaqSchemaAccordion from "@/components/common/FaqSchemaAccordion";
import { fetchData } from "@/server/getHomePageData";
import WorkInnerSection2 from "@/components/WorkInner/WorkInnerSection2";
import dynamic from "next/dynamic";
import Section10 from "@/components/Home/Section10";
import { baseUrl } from "@/util/baseUrl";

const CaseStudiesInnerSection1 = dynamic(
  () => import("@/components/CaseStudiesInner/CaseStudiesInnerSection1")
);

async function CaseStudiesInnerPage({ caseId, faq_title, faq_list }) {
  const [data, data2, clients] = await Promise.all([
    fetchData(`${baseUrl}/wp-json/custom/v1/full_details?slug=${caseId}`),
    fetchData(`${baseUrl}/wp-json/custom/v1/projects?type=case_study`),
    fetchData(`${baseUrl}/wp-json/custom/v1/all_clients`),
  ]);
  return (
    <>
      <CaseStudiesInnerSection1 data={data} />
      <WorkInnerSection2 data={data2} ID={caseId} link={"/case-studies"} />
      <Section10 data={clients} />
      {faq_list && faq_title && (
        <FaqSchemaAccordion
          faqs_heading_footer={faq_title}
          faqs_list_footer={faq_list}
        />
      )}
    </>
  );
}

export default CaseStudiesInnerPage;
