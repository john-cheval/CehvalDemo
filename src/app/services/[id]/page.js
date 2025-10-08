import React from "react";
import ServicesInnerPage from "./ServicesInnerPage";
import generatePageScripts from "@/util/getScriptData";
import { notFound } from "next/navigation";
import { baseUrl } from "@/util/baseUrl";

async function fetchData(id) {
  const res = await fetch(
    `${baseUrl}/wp-json/custom/v1/full_details?slug=${id}&meta_type=page`
  );
  if (!res.ok) return undefined;
  return res.json();
}
const ServicesInner = async ({ params }) => {
  const paramsId = await params;
  const data = await fetchData((await params).id);
  const pageData = await generatePageScripts((await params).id, true);
  const {
    meta_schema,
    faqs_heading_footer,
    faqs_list_footer,
    faqs_list_footer_schema,
  } = pageData;

  if (!data) {
    notFound();
  }

  return (
    <>
      {meta_schema && <div dangerouslySetInnerHTML={{ __html: meta_schema }} />}
      {faqs_list_footer_schema && (
        <div dangerouslySetInnerHTML={{ __html: faqs_list_footer_schema }} />
      )}
      <ServicesInnerPage
        pageData={data?.post_name}
        faq_title={faqs_heading_footer}
        faq_list={faqs_list_footer}
      />
    </>
  );
};

export default ServicesInner;
