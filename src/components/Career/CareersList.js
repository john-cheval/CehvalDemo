import Link from "next/link";

function CareerItem({ item }) {
  if (!item.ID) return;
  return (
    <div className="hover:bg-gray-50 transition border-t border-black">
      <Link
        // onClick={() => router.push(`/careers/${item.post_name}`)}
        href={`/careers/${item.post_name}` || item?.link || "#"}
        className="flex items-center justify-between py-4 sm:py-5 md:py-6 cursor-pointer"
      >
        <span className="text-base sm:text-lg md:text-xl lg:text-3xl text-black font-normal leading-snug">
          {item?.post_title || item?.title || "Untitled"}
        </span>

        {/* Arrow Icon */}
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-[50px] lg:h-[50px]"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M14 25h22M26 17l8 8-8 8"
            stroke="#1C1B1F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}

export default CareerItem;
