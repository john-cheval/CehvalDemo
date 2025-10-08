/** @format */

import AboutHeader from "@/components/About/NewAbout/AboutHeader";
import AboutBanner from "@/components/About/NewAbout/AboutBanner";

import React from "react";
import FaqSchemaAccordion from "@/components/common/FaqSchemaAccordion";
import OurTeamNew from "@/components/About/NewAbout/OurTeamNew";
import { fetchData } from "@/server/getHomePageData";
import VerticalStackCards from "@/components/About/NewAbout/VerticalStackCards";
import AboutCTA from "@/components/About/NewAbout/AboutCTA";
import AboutClients from "@/components/About/NewAbout/AboutClients";
import { baseUrl } from "@/util/baseUrl";

async function AboutPage({ aboutData, faq_title, faq_list }) {
  const clients = await fetchData(`${baseUrl}/wp-json/custom/v1/all_clients`);

  return (
    <>
      {aboutData && (
        <div className="bg-about-member-gradient">
          <AboutHeader
            content={aboutData?.short_description}
            heading={aboutData?.sub_heading}
          />
          <AboutBanner
            bannerData={aboutData?.count_down_list}
            bannerVideo={aboutData?.about_short_video}
            bannerPopupVideo={aboutData?.about_video}
          />
          <VerticalStackCards cardData={aboutData} />

          <OurTeamNew
            title={aboutData?.meet_our_team_heading}
            team={aboutData?.meet_our_team_list}
            data={aboutData}
          />
          <AboutCTA
            ctaHeading={aboutData?.culture_heading}
            description={aboutData?.culture_description}
            VideoUrl={aboutData?.culture_image}
          />
        </div>
      )}

      {clients && <AboutClients clientData={clients} />}

      {faq_list && faq_title && (
        <FaqSchemaAccordion
          faqs_heading_footer={faq_title}
          faqs_list_footer={faq_list}
        />
      )}
    </>
  );
}

export default AboutPage;
