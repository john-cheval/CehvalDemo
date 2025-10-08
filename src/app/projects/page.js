import React from "react";
import WorkPage from "../../page-views/Work";
import generateMetadataData from "@/util/generateMetaTitle";
import { fetchData } from "@/server/getHomePageData";
import generatePageScripts from "@/util/getScriptData";
import { baseUrl } from "@/util/baseUrl";

export async function generateMetadata() {
  return await generateMetadataData(96, `projects`, false);
}
export default async function Work() {
  const pageData = await generatePageScripts(96, false);
  const {
    meta_schema,
    faqs_heading_footer,
    faqs_list_footer,
    faqs_list_footer_schema,
  } = pageData;

  const [workHeaderData, data] = await Promise.all([
    fetchData(`${baseUrl}/wp-json/custom/v1/full_details?ID=96`),
    fetchData(`${baseUrl}/wp-json/custom/v1/projects`),
  ]);

  return (
    <>
      {meta_schema && (
        <div
          // type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: meta_schema }}
        />
      )}
      {faqs_list_footer_schema && (
        <div dangerouslySetInnerHTML={{ __html: faqs_list_footer_schema }} />
      )}
      <WorkPage
        workHeaderData={workHeaderData}
        data={data}
        faq_title={faqs_heading_footer}
        faq_list={faqs_list_footer}
      />
    </>
  );
}
