/** @format */
import FaqSchemaAccordion from "@/components/common/FaqSchemaAccordion";
import Section11 from "@/components/Home/Section11";
import Section9 from "@/components/Home/Section9";
import Section1 from "@/components/Location/AbuDhabi/Section1";
import LocationFaq from "@/components/Location/Common/Faq";
import LocationContact from "@/components/Location/Common/LocationContact";
import LocationServices from "@/components/Location/Common/Services";
import { faqAbuDhabi } from "@/data/Location/FaqData";
import { servicesAbuDhabi } from "@/data/Location/servicesData";
import { fetchData } from "@/server/getHomePageData";
import { baseUrl } from "@/util/baseUrl";

import React from "react";

async function AbuDhabiPage({ faq_title, faq_list }) {
  const [blogsHomePage, googleReviews] = await Promise.all([
    fetchData(`${baseUrl}/wp-json/wp/v2/posts?_embed`),
    fetchData(` ${baseUrl}/wp-json/custom/v1/google_reviews`),
  ]);

  return (
    <>
      <Section1 />
      <LocationContact />
      <Section11
        data={googleReviews}
        title={"Our Success Stories"}
        isLocation={true}
      />

      <LocationServices service={servicesAbuDhabi} />
      <Section9 data={blogsHomePage} title={"Insights and Ideas"} />
      <LocationFaq data={faqAbuDhabi} />
      {faq_list && faq_title && (
        <FaqSchemaAccordion
          faqs_heading_footer={faq_title}
          faqs_list_footer={faq_list}
        />
      )}
    </>
  );
}

export default AbuDhabiPage;
