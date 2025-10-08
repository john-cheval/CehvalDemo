/** @format */

const Section10 = dynamic(() => import("@/components/Home/Section10"));
const WorkInnerSection1 = dynamic(
  () => import("@/components/WorkInner/WorkInnerSection1")
);
const WorkInnerSection2 = dynamic(
  () => import("@/components/WorkInner/WorkInnerSection2")
);
import FaqSchemaAccordion from "@/components/common/FaqSchemaAccordion";
import { fetchData } from "@/server/getHomePageData";
import { baseUrl } from "@/util/baseUrl";
import dynamic from "next/dynamic";

async function WorkInnerPage({ innerID, data2, data, faq_title, faq_list }) {
  const clients = await fetchData(`${baseUrl}/wp-json/custom/v1/all_clients`);
  return (
    <>
      <WorkInnerSection1 data={data} />
      <WorkInnerSection2 data={data2} ID={innerID?.id} link="/projects" />
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

export default WorkInnerPage;
