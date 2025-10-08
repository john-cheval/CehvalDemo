import React from "react";
import MaintenancePageSectionOne from "./Section1";
import HomeSectionTwo from "@/components/Home/New/Section2";
import MaintenancePageSectionTwo from "./Section2";
import MaintenancePageSectionThree from "./Section3";
import MaintenancePageSectionFour from "./Section4";
import MaintenancePageSectionFive from "./Section5";
import MaintenancePageSectionSix from "./Section6";
import MaintenancePageSectionSeven from "./Section7";
import MaintenancePageSectionEight from "./Section8";
import MaintenancePageSectionNine from "./Section9";
import ContactForm from "@/components/Contact/NewContact/ContactForm";

const MaintenancePage = ({
  bannerImage,
  content,
  clientsData,
  services,
  mobileBannerImage,
}) => {
  const firstSection = content?.section_for_landing_marketing?.filter(
    (section) => section?.section_type === "lefthandheadingwithdescription"
  );
  const SectionTwo = content?.section_for_landing_marketing?.filter(
    (section) => section?.section_type === "listwithimages"
  );
  const SectionThree = content?.section_for_landing_marketing?.filter(
    (section) => section?.section_type === "portfolio_highlights_layout"
  );
  const SectionFour = content?.section_for_landing_marketing?.filter(
    (section) => section?.section_type === "our_process"
  );
  const SectionFive = content?.section_for_landing_marketing?.filter(
    (section) => section?.section_type === "alternativeheadingwithdescription"
  );
  const SectionSix = content?.section_for_landing_marketing?.filter(
    (section) => section?.section_type === "listwithoutimages"
  );
  const SectionSeven = content?.section_for_landing_marketing?.filter(
    (section) => section?.section_type === "why_choose"
  );
  const SectionEight = content?.section_for_landing_marketing?.filter(
    (section) => section?.section_type === "ourservices"
  );
  const SectionNine = content?.section_for_landing_marketing?.filter(
    (section) =>
      section?.section_type === "lefthandheadingwithdescriptionhappyclients"
  );
  const ContactSection = content?.section_for_landing_marketing?.filter(
    (section) => section?.section_type === "contactus"
  );

  return (
    <div className="bg-white">
      <MaintenancePageSectionOne
        topImage={bannerImage}
        topMobileBanner={mobileBannerImage}
        section={firstSection?.[0]}
      />
      <HomeSectionTwo clientsData={clientsData} serviceInner={true} />
      <MaintenancePageSectionTwo section={SectionTwo[0]} />
      <MaintenancePageSectionThree section={SectionThree[0]} />
      <MaintenancePageSectionFour services={SectionFour[0]} />
      <MaintenancePageSectionFive content={SectionFive[0]} />
      <MaintenancePageSectionSix content={SectionSix[0]} />
      <MaintenancePageSectionSeven content={SectionSeven[0]} />
      <MaintenancePageSectionEight content={SectionEight[0]} />
      <MaintenancePageSectionNine content={SectionNine[0]} />
      <ContactForm
        title={ContactSection?.[0]?.title}
        desc={ContactSection?.[0]?.description}
        services={services}
      />
    </div>
  );
};

export default MaintenancePage;
