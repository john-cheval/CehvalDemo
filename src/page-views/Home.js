import HomeBlogsSection from "@/components/Home/New/Blogs";
import HomeSectionTwo from "@/components/Home/New/Section2";
import HomeSectionThree from "@/components/Home/New/Section3";
import HomeSectionFour from "@/components/Home/New/Section4";
import HomeSectionFive from "@/components/Home/New/Section5";
import HomeSectionSix from "@/components/Home/New/Section6";
import HomeSectionSeven from "@/components/Home/New/Section7";
import Section1 from "@/components/Home/Section1";
import Section11 from "@/components/Home/Section11";
import Section5 from "@/components/Home/Section5";
import Section8 from "@/components/Home/Section8";
import React from "react";

const HomePage = ({
  homeContent,
  clients,
  worksHomePage,
  gallery,
  blogsHomePage,
  googleReviews,
}) => {
  const split = gallery?.show_off_gallery?.length / 2 || 0;
  return (
    <>
      {/* <div className="bg-transparent sm:bg-white w-full pt-[85px] lg:pt-[100px] xl:pt-[115px] wrapper-padding ">
        <h1 className="text-xs sm:text-base- text-main font-medium  text-center md:text-left pb-1 border-b border-dashed w-fit border-b-main">
          {" "}
          Web Design and Development Agency{" "}
          <span className="text-sec">Dubai, UAE</span>
        </h1>
      </div> */}

      <Section1
        title={homeContent?.web_title}
        subTitle={homeContent?.web_sub_title}
        linkText={homeContent?.web_link_text}
        link={homeContent?.web_link}
        fullVideo={homeContent?.web_video}
        shortVideo={homeContent?.web_video_short}
      />
      <div className="bg-[#F6F6F4] relative z-50" id="section-2home">
        <HomeSectionTwo clientsData={clients} />
        <HomeSectionThree
          title={homeContent.service_heading}
          description={homeContent.service_description}
          countdown={homeContent.service_countdown}
        />
        <Section5 data={worksHomePage} isNew={false} />
      </div>

      {homeContent?.ai_sections &&
        homeContent?.ai_sections.some((section) =>
          [
            "AI_solutions",
            "Our_approach",
            "Our_AI_stack",
            "Our_Core_Service",
          ].includes(section?.section_type)
        ) && (
          <div className="bg-white relative z-[60] py-14 space-y-10 lg:space-y-12 xl:space-y-16 ">
            {homeContent?.ai_sections?.map((section, index) => {
              switch (section?.section_type) {
                case "AI_solutions":
                  return <HomeSectionFour key={index} sectionData={section} />;

                case "Our_approach":
                  return <HomeSectionFive key={index} sectionData={section} />;

                case "Our_AI_stack":
                  return <HomeSectionSix key={index} sectionData={section} />;

                case "Our_Core_Services":
                  return <HomeSectionSeven key={index} sectionData={section} />;

                default:
                  return null;
              }
            })}
          </div>
        )}

      <div className="bg-white relative  z-50">
        {/* <Section5 data={worksHomePage} isNew={true} /> */}
        <Section8 data={gallery} split={split} isNew={true} />
        <Section11 data={googleReviews} />
        <HomeBlogsSection
          data={blogsHomePage}
          title={homeContent?.blog_heading}
          isNew={true}
        />
        <section className="space-y-4 wrapper-padding py-10 sm:py-16 bg-main text-white">
          <p className="text-base leading-[30px] text-center md:text-left font-medium">
            We have partnered with businesses across Dubai’s most prominent
            areas, delivering professional website design and development
            solutions in Business Bay, Al Barsha, Bur Dubai, DMCC Dubai, Silicon
            Oasis, Deira Dubai, Al Karama, Jumeirah Beach Road, Jumeirah
            Village, Dubai Marina, Dubai Internet City, Al Rigga, Burjuman,
            World Trade Center, Jumeirah Lake Towers (JLT), Jabal Ali, Ajman,
            Dubai Healthcare City, Downtown Dubai, South Dubai, Sephora, Al
            Hilali, Mirdif, Palm Jumeirah, Al Quoz, Damac Hills, Studio City,
            Sports City, Al Khwaneej, Al Safa, Umm Suqeim, Jumeirah 1, Jumeirah
            2, Jumeirah 3, Al Barsha South, Jumeirah Village Triangle (JVT),
            Jumeirah Village Circle (JVC), Emirates Towers, International City,
            Jumeirah Golf Estates, Motor City, Dubai Media City, Nadd Al Shiba,
            Dubai Investment Park (DIP), and Zabeel.
          </p>
          <p className="text-base leading-[30px] text-center md:text-left font-medium">
            Our website design and development services cater to a wide range of
            industries, including ecommerce, online jewelry stores, dental
            clinics, healthcare centers, hospitals, skin clinics,
            multi-specialty hospitals, sports clubs, hotels and restaurants,
            night bars and clubs, real estate companies, event and wedding
            planners, car rental companies, interior designers and architects,
            legal firms, salons and spas, educational institutions, schools, and
            tours and travel agencies.
          </p>
        </section>
      </div>
    </>
  );
};

export default HomePage;
