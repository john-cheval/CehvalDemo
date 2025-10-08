import MobileAppDevelopmentClientContent from "@/page-views/Ads/MobileAppDevelopment";
import { fetchData } from "@/server/getHomePageData";
import { baseUrl } from "@/util/baseUrl";
import React from "react";

const MobileAppDevelopment = async () => {
  const [googleReviews, team, clients] = await Promise.all([
    fetchData(`${baseUrl}/wp-json/custom/v1/google_reviews`),
    fetchData(`${baseUrl}/wp-json/custom/v1/full_details?ID=100`),
    fetchData(`${baseUrl}/wp-json/custom/v1/all_clients`),
  ]);
  return (
    <>
      <MobileAppDevelopmentClientContent
        googleReviews={googleReviews?.testimonials}
        memeber={team?.meet_our_team_list}
        clientList={clients}
      />
    </>
  );
};

export default MobileAppDevelopment;
