/** @format */

import Section11 from "@/components/Home/Section11";
import Section9 from "@/components/Home/Section9";
import LocationFaq from "@/components/Location/Common/Faq";
import GoogleReviews from "@/components/Location/Common/GoogleReviews";
import LocationBottomBanner from "@/components/Location/Common/LocationBottomBanner";
import LocationContact from "@/components/Location/Common/LocationContact";
import LocationServices from "@/components/Location/Common/Services";
import Section1 from "@/components/Location/Riyadh/Section1";
import { faqRiyadh } from "@/data/Location/FaqData";
import { servicesRiyadh } from "@/data/Location/servicesData";
import { fetchData } from "@/server/getHomePageData";
import { baseUrl } from "@/util/baseUrl";
import React from "react";

async function RiyadhPage() {
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
      <LocationServices service={servicesRiyadh} />
      <Section9 data={blogsHomePage} title={"Insights and Ideas"} />
      <LocationFaq data={faqRiyadh} />
      <LocationBottomBanner
        title="Transforming your online presence with innovative web design. Are
              you tired of having a dull and outdated website?"
        description="Embrace a remarkable transformation for your online presence by
              leveraging our cutting-edge web design services. Our skilled
              professionals will craft a visually captivating and user-friendly
              website that enthralls your audience and boosts traffic to your
              business.Distinguish yourself from the competition and leave a
              memorable impact with our innovative designs. Elevate your online
              presence now!"
      />
    </>
  );
}

export default RiyadhPage;
