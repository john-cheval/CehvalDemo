import Image from "next/image";
import React from "react";

const MaintenancePageSectionSeven = ({ content }) => {
  const { title, description, sub_sections } = content;
  const dots = Array.from({ length: 3 }, (_, i) => i);
  return (
    <section className="wrapper-padding relative  pt-8  lg:pt-12 xl:pt-16 ">
      <div className=" rounded-[15px] bg-[#F3F8FB] py-8 md:py-10 lg:py-12  xl:py-14 px-5 md:px-9 lg:px-10 xl:px-14">
        <div className="grid grid-cols-12 gap-x-5">
          <div className="col-span-12 lg:col-span-4">
            <h5 className="heading-2   text-main text-center lg:text-left">
              {title}
            </h5>
          </div>
          <div
            className="col-span-12 lg:col-span-8 main-description text-center lg:text-left text-main mt-2 lg:mt-0"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        <div className="grid grid-cols-12 gap-3 mt-8">
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 space-y-3 ">
            {sub_sections?.slice(0, 2)?.map((item, index) => {
              return item?.description ? (
                <div
                  key={index}
                  className="bg-white rounded-[8px] overflow-hidden  px-5 lg:px-8 py-6 lg:py-10"
                >
                  <div
                    className="heading-secondary text-main !font-normal !leading-normal"
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  />
                  <div className="flex gap-x-2 mt-20">
                    {dots &&
                      dots?.map((_, index) => (
                        <span
                          key={index}
                          className=" w-2 h-2 rounded-full bg-sec"
                        ></span>
                      ))}
                  </div>
                </div>
              ) : (
                <div
                  key={index + 1}
                  className=" flex rounded-[8px] overflow-hidden "
                >
                  <Image
                    src={item?.image?.url}
                    alt="image-1"
                    width={300}
                    height={250}
                    className="w-full h-full- h-full object-cover "
                  />
                </div>
              );
            })}
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-white rounded-[8px] overflow-hidden px-8 py-10 flex flex-col h-full ">
            <Image
              src={sub_sections[2]?.image?.url}
              alt="image2"
              width={300}
              height={500}
              className="w-full h-auto "
            />

            <div
              className="heading-secondary text-main !font-normal mt-auto !leading-normal"
              dangerouslySetInnerHTML={{ __html: sub_sections[2]?.description }}
            />
          </div>
          <div className="col-span-12 lg:col-span-6 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sub_sections?.slice(3, 5)?.map((item, index) => (
                <div
                  key={index * 3}
                  className="bg-white rounded-[8px] overflow-hidden px-8 py-10 flex flex-col h-full"
                >
                  <div
                    className="heading-secondary text-main !font-normal !leading-normal"
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  />
                  {item?.image && (
                    <Image
                      src={item?.image?.url}
                      alt="image2"
                      width={300}
                      height={500}
                      className="w-full h-auto mt-20 "
                    />
                  )}
                </div>
              ))}
            </div>

            <div className=" grid grid-cols-12 gap-3 bg-white rounded-[8px] overflow-hidden px-8 py-10">
              <div
                className="heading-secondary col-span-12 sm:col-span-5 text-main !font-normal !leading-normal"
                dangerouslySetInnerHTML={{
                  __html: sub_sections[5]?.description,
                }}
              />
              <Image
                src={sub_sections[5]?.image?.url}
                alt="image2"
                width={300}
                height={500}
                className="w-full h-auto col-span-12 sm:col-span-7 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenancePageSectionSeven;
