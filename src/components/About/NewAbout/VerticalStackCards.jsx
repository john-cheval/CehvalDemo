import { disableImageOptimization } from "@/util/constants";
import Image from "next/image";
// import OurTeam from "./OurTeam";
// import OurTeamNew from "./OurTeamNew";

const VerticalStackCards = ({ cardData }) => {
  return (
    <div className="relative min-h-screen wrapper-padding">
      <div className="wrapper-padding pt-14  w-full h-[465px] sticky top-0 bg-[#141414] border-top overflow-hidden verticalCards">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-x-5 gap-y-4 lg:gap-y-0">
          <h3 className="font-sora text-3xl sm:text-4xl lg:text-6xl font-normal leading-[133%] tracking-[-2.4px] w-full text-white lg:text-start text-center heading2">
            {cardData?.cando_attitude_heading}
          </h3>
          <p
            dangerouslySetInnerHTML={{
              __html: cardData?.cando_attitude_description,
            }}
            className="space-y-3 lg:space-y-8 font-satoshi text-sm md:text-base font-normal leading-[154%] text-white text-center lg:text-start para"
          />
        </div>
      </div>

      <div
        className="-mt-16 w-full h-[465px] sticky- top-5- border-top   overflow-hidden verticalCards"
        style={{ zIndex: 2, position: "sticky", top: "20px" }}
      >
        <Image
          src={cardData?.cando_attitude_image}
          fill={true}
          className="object-center h-full object-cover overflow-hidden"
          alt="imageAbout"
          unoptimized={disableImageOptimization}
        />
      </div>

      <div
        className="wrapper-padding -mt-16 w-full h-[465px] sm:h-[400px] sticky top-0 pt-14 bg-[#fff]  border-top overflow-hiddenverticalCards"
        style={{ zIndex: 3, position: "sticky", top: "40px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-x-5 gap-y-4 lg:gap-y-0">
          <h3
            className="font-sora text-[#101763] text-3xl sm:text-4xl lg:text-6xl font-normal lg:text-start leading-[154%] tracking-[-2.4px] w-full text-center heading2"
            style={{
              lineHeight: "1.2",
            }}
          >
            {cardData?.our_team_heading}
          </h3>
          <p
            className="font-satoshi text-sm md:text-base font-normal leading-[154%] text-[#000] space-y-3 md:space-y-8 text-center lg:text-start md:ml-0 ml-7 para"
            dangerouslySetInnerHTML={{ __html: cardData?.our_team_description }}
          />
        </div>
      </div>

      {/* <OurTeam
        title={cardData?.meet_our_team_heading}
        team={cardData?.meet_our_team_list}
        data={cardData}
      /> */}
      {/* <OurTeamNew
        title={cardData?.meet_our_team_heading}
        team={cardData?.meet_our_team_list}
        data={cardData}
      /> */}
    </div>
  );
};

export default VerticalStackCards;
