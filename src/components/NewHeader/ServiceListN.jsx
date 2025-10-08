"use client";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
// import { usePathname } from "next/navigation";

export const ServiceList = ({
  title,
  data,
  url,
  closeMegaMenu,
  attribute_title,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px", // Load when 200px from viewport
  });

  return (
    <div ref={ref} className="space-y-2 ">
      <p className="font-sora font-base font-semibold leading-[190%]-- heading-gradient bigMenulinkTitle">
        {inView && (
          <Link
            prefetch={true}
            onClick={closeMegaMenu}
            href={url}
            title={attribute_title}
          >
            {title}
          </Link>
        )}
      </p>
      <ul className="space-y-3 linksGap">
        {data?.map((item, index) => (
          <li
            className="font-satoshi text-[#101763] text-sm font-normal leading-[182%]-- hover:text-[#d81100] transition-all bigMenuLinks duration-300"
            key={index}
          >
            {inView && (
              <Link
                prefetch={true}
                onClick={closeMegaMenu}
                href={item?.url}
                aria-label={item?.title}
                title={item?.attr_title}
              >
                {item?.title}
              </Link>
            )}

            {item?.subTitle && (
              <span className="text-xs block">{item?.subTitle}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
