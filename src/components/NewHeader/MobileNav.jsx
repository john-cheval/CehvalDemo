"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const MobileNav = ({ navLinks }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleSubmenu = (submenu) => {
    setOpenSubmenu(openSubmenu === submenu ? null : submenu);
  };
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Work", path: "/projects" },
    { name: "Services", path: "/service" },
    { name: "Contact", path: "/contact-us" },
  ];
  return (
    <div
      id="mblMenuItems"
      className="flex flex-col font-sora font-semibold text-3xl uppercase text-[#101763] items-center justify-center w-screen h-fit space-y-6"
    >
      {navLinks?.map(({ name, path }) => (
        <div key={path} className="w-full text-center">
          {name === "Services" ? (
            <div
              onClick={() => toggleDropdown(name)}
              className="flex justify-center items-center cursor-pointer hover:text-[#D81100] transition-colors duration-300"
            >
              <p className={`${openDropdown === name ? "text-[#D81100]" : ""}`}>
                {name}
              </p>
              <ChevronDown
                size={20}
                className={`ml-2 transition-transform ${
                  openDropdown === name ? "rotate-180" : ""
                }`}
              />
            </div>
          ) : (
            <Link href={path}>
              <p
                className={`hover:text-[#D81100] transition-colors duration-300 ${
                  openDropdown === name ? "text-[#D81100]" : ""
                }`}
              >
                {name}
              </p>
            </Link>
          )}

          {/* Services Dropdown */}
          {openDropdown === "Services" && name === "Services" && (
            <div className="flex flex-col text-lg space-y-3 mt-4">
              <Link href="/service">
                <p className="text-[#101763] hover:text-[#D81100]">Overview</p>
              </Link>

              {/* Submenu for Services */}
              {[
                { name: "Mobile App", path: "/service/mobile-app" },
                { name: "Web App", path: "/service/web-app" },
                { name: "UI/UX", path: "/service/ui-ux" },
              ]?.map((item) => (
                <div key={item.name}>
                  <div
                    onClick={() => toggleSubmenu(item.name)}
                    className="flex items-center justify-center cursor-pointer hover:text-[#D81100] transition-colors duration-300"
                  >
                    <p className="text-[#101763]">{item.name}</p>
                    <ChevronDown
                      size={16}
                      className={`ml-2 transition-transform ${
                        openSubmenu === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* Submenu Links */}
                  {openSubmenu === item.name && (
                    <div className="text-sm text-[#101763] mt-2">
                      <Link href={item.path}>
                        <p className="hover:text-[#D81100]">
                          Go to {item.name}
                        </p>
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MobileNav;
