/** @format */

const WorkBody = dynamic(() => import("@/components/Work/WorkNew/WorkBody"));
const WorkHeader = dynamic(
  () => import("@/components/Work/WorkNew/WorkHeader")
);
import FaqSchemaAccordion from "@/components/common/FaqSchemaAccordion";
import { fetchData } from "@/server/getHomePageData";
import { baseUrl } from "@/util/baseUrl";
import dynamic from "next/dynamic";
import React from "react";

async function WorkPage({ workHeaderData, data, faq_title, faq_list }) {
  const categories = await fetchData(
    `${baseUrl}/wp-json/custom/v1/category_list?show_in_filter=1`
  );

  return (
    <>
      <WorkHeader data={workHeaderData} />
      <WorkBody data={data} categories={categories} />
      {faq_list && faq_title && (
        <FaqSchemaAccordion
          faqs_heading_footer={faq_title}
          faqs_list_footer={faq_list}
        />
      )}
    </>
  );
}

export default WorkPage;
