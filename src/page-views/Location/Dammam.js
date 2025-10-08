/** @format */
import FaqSchemaAccordion from "@/components/common/FaqSchemaAccordion";
import Section11 from "@/components/Home/Section11";
import Section9 from "@/components/Home/Section9";
import LocationFaq from "@/components/Location/Common/Faq";
import LocationBottomBanner from "@/components/Location/Common/LocationBottomBanner";
import LocationContact from "@/components/Location/Common/LocationContact";
import LocationServices from "@/components/Location/Common/Services";
import Section1 from "@/components/Location/Dammam/Section1";
import { faqDammam } from "@/data/Location/FaqData";
import { servicesDammam } from "@/data/Location/servicesData";
import { fetchData } from "@/server/getHomePageData";
import { baseUrl } from "@/util/baseUrl";
import React from "react";

async function DammamPage({ faq_title, faq_list }) {
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
      <LocationServices service={servicesDammam} />
      <Section9 data={blogsHomePage} title={"Insights and Ideas"} />
      <LocationFaq data={faqDammam} />
      <LocationBottomBanner
        title="Transform your online presence with our web design"
        description="Revamp your online presence and make a lasting impression with our
              exceptional web design services. Our skilled designers will create
              a visually stunning, user-friendly website that perfectly
              represents your brand. With a focus on functionality and
              aesthetics, we ensure that your website distinguishes itself from
              the competition and captures attention. Transform your online
              presence today and attract customers with our top-notch web design
              solutions."
      />
      {faq_list && faq_title && (
        <FaqSchemaAccordion
          faqs_heading_footer={faq_title}
          faqs_list_footer={faq_list}
        />
      )}
    </>
  );
}

export default DammamPage;
