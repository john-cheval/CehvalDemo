import ThankYouPage from "@/page-views/ThankYouPage";
import { fetchData } from "@/server/getHomePageData";
import { baseUrl } from "@/util/baseUrl";
import generateMetadataData from "@/util/generateMetaTitle";
import React from "react";

export async function generateMetadata() {
  return await generateMetadataData(624, `thank-you`, false);
}

const ThankYou = async () => {
  const data = await fetchData(
    ` ${baseUrl}/wp-json/custom/v1/full_details?ID=624`
  );
  return <ThankYouPage thankYouData={data} />;
};

export default ThankYou;
