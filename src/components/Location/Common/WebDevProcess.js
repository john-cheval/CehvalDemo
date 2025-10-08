import React from "react";

const WebDevProcess = () => {
  return (
    <>
      <div className="col-span-3 md:col-span-1 grid grid-cols-1 grid-flow-row mt-20">
        <div className="w-full relative h-fit col-span-1 rounded-lg bg-[#F2F4F9] flex flex-col text-[#27172F] space-y-4 px-10 pt-14 md:pt-20 pb-10">
          <p
            style={{
              background: "linear-gradient(180deg, #27172F 0%, #FF0C15 100%)",

              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
            className="text-[#EE2525] absolute text-[90px] sm:text-[120px] md:text-[150px] font-sora font-semibold -top-11 sm:-top-16 leading-none left-10"
          >
            1
          </p>
          <p className="font-sora font-semibold text-2xl md:text-3xl ">
            Research
          </p>
          <p className="font-satoshi w-full paragraphText-Size ">
            We thoroughly analyze the client's business, target audience, and
            competitors to understand their needs and goals.
          </p>
        </div>

        <div className="w-full md:hidden relative h-fit col-span-1 rounded-lg bg-[#F2F4F9] flex flex-col text-[#27172F] space-y-4 px-10 pt-14 md:pt-20 pb-10 mt-20">
          <p
            style={{
              background: "linear-gradient(180deg, #27172F 0%, #FF0C15 100%)",

              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
            className="text-[#EE2525] absolute text-[90px] sm:text-[120px] md:text-[150px] font-sora font-semibold -top-11 sm:-top-16 leading-none left-10"
          >
            2
          </p>
          <p className="font-sora font-semibold  text-2xl md:text-3xl ">
            Planning
          </p>
          <p className="font-satoshi w-full paragraphText-Size ">
            Based on the research, we create a detailed plan outlining the
            website's structure, design elements, and functionality.
          </p>
        </div>
        <div className="w-full  relative h-fit col-span-1 rounded-lg bg-[#F2F4F9] flex flex-col text-[#27172F] space-y-4 px-10  pt-14 md:pt-20 pb-10 mt-20 md:mt-0">
          <p
            style={{
              background: "linear-gradient(180deg, #27172F 0%, #FF0C15 100%)",

              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
            className="text-[#EE2525] absolute text-[90px] sm:text-[120px] md:text-[150px] font-sora font-semibold -top-11 sm:-top-16 leading-none left-10"
          >
            3
          </p>
          <p className="font-sora font-semibold  text-2xl md:text-3xl ">
            Design and Development
          </p>
          <p className="font-satoshi w-full paragraphText-Size ">
            Our team of skilled designers and developers bring the plan to life,
            creating a visually appealing and user-friendly website.
          </p>
        </div>
      </div>
      <div className="col-span-3 md:col-span-1  grid grid-cols-1 grid-flow-row mt-20 md:mt-40">
        <div className="w-full hidden md:flex relative h-fit col-span-1 rounded-lg bg-[#F2F4F9]  flex-col text-[#27172F] space-y-4 px-10 pt-20 pb-10">
          <p
            style={{
              background: "linear-gradient(180deg, #27172F 0%, #FF0C15 100%)",

              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
            className="text-[#EE2525] absolute text-[150px] font-sora font-semibold -top-16 leading-none left-10"
          >
            2
          </p>
          <p className="font-sora font-semibold  text-3xl ">Planning</p>
          <p className="font-satoshi w-full paragraphText-Size ">
            Based on the research, we create a detailed plan outlining the
            website's structure, design elements, and functionality.
          </p>
        </div>
        <div className="w-full relative h-fit col-span-1 rounded-lg bg-[#F2F4F9] -mt-5 md:mt-24 flex flex-col text-[#27172F] space-y-4 px-10 pt-14 md:pt-20 pb-10">
          <p
            style={{
              background: "linear-gradient(180deg, #27172F 0%, #FF0C15 100%)",

              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
            className="text-[#EE2525] absolute text-[90px] sm:text-[120px] md:text-[150px] font-sora font-semibold -top-11 sm:-top-16 leading-none left-10"
          >
            4
          </p>
          <p className="font-sora font-semibold  text-2xl md:text-3xl ">
            Testing and Launch
          </p>
          <p className="font-satoshi w-full paragraphText-Size ">
            We rigorously test the website for functionality, compatibility, and
            responsiveness across different devices before launching it to
            ensure a seamless user experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default WebDevProcess;
