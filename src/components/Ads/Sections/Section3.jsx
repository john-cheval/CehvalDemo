import { CircleCheck } from "lucide-react";
import React from "react";

const AdsSection3 = () => {
  const listItems = [
    {
      id: 1,
      list: "Committed Delivery in mutually agreed time with penalty clause",
    },
    {
      id: 2,
      list: "One Year Full maintenance ",
    },
    {
      id: 3,
      list: "100% Spam-Free Guaranteed Website",
    },
    {
      id: 4,
      list: "Transparent Pricing ",
    },
    {
      id: 5,
      list: "Secure payment through escrow",
    },
  ];
  return (
    <section className="border border-[#ececec] rounded-[15px] lg:rounded-[30px] p-8 md:p-10 lg:p-14">
      <h3 className="ads-heading">Why you should choose Cheval:</h3>

      <ul className="space-y-5  pt-5">
        {listItems?.map((items, index) => {
          return (
            <li
              className={`text-black font-sora text-sm md:text-base lg:text-xl leading-[170%] flex gap-x-3 ${index === 0 ? "underline" : "no-underline"}`}
              key={index}
            >
              <span className="min-w-[20px] pt-1">
                <CircleCheck color="#d81100" size="20px" />
              </span>
              <span className="">{items?.list}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default AdsSection3;
