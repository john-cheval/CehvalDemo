/** @format */
import BlogsInnerSection1 from "@/components/BlogsInner/BlogsInnerSection1";
import BlogsInnerSection2 from "@/components/BlogsInner/BlogsInnerSection2";
import FaqSchemaAccordion from "@/components/common/FaqSchemaAccordion";
import { fetchData } from "@/server/getHomePageData";
import { baseUrl } from "@/util/baseUrl";
import React from "react";

async function BlogsInnerPage({ id, faq_title, faq_list }) {
  const [data, data2] = await Promise.all([
    fetchData(`${baseUrl}/wp-json/custom/v1/full_details?slug=${id}`),
    fetchData(`${baseUrl}/wp-json/wp/v2/posts?_embed`),
  ]);
  return (
    <>
      <BlogsInnerSection1 data={data} />
      <BlogsInnerSection2 data={data2} blogID={id} />
      {faq_list && faq_title && (
        <FaqSchemaAccordion
          faqs_heading_footer={faq_title}
          faqs_list_footer={faq_list}
        />
      )}
    </>
  );
}

export default BlogsInnerPage;
