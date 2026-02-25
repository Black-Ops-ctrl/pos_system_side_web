import React, { useState } from "react";
import logo from "../../assets/png/img_logo_pos.png";

const Navbar = () => {
  const [activePage, setActivePage] = useState("Home");

  return (
    <nav className="block bg-secondary text-primary shadow-md sticky top-0 z-50 font-helvetica rounded-full py-2 px-8 w-full mt-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          <img
            src={logo}
            alt="POS Logo"
            className="w-8 sm:w-10 md:w-12 lg:w-16 h-auto object-contain"
          />
          <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white whitespace-nowrap">
            POS SYSTEM
          </span>
        </div>

        {/* Nav Links */}
        <div className="flex space-x-1 sm:space-x-3 md:space-x-6 lg:space-x-8 text-xs sm:text-sm md:text-base lg:text-lg font-lightbold font-helvetica">
          {["Home", "About us", "Portfolio", "Services", "Contact us"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                onClick={() => setActivePage(item)}
                className={`relative group transition whitespace-nowrap ${
                  activePage === item ? "text-primary" : "text-primary"
                }`}
              >
                <span>{item}</span>
                <span
                  className={`absolute left-0 h-[2px] bg-primary transition-all ${
                    activePage === item
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  } -bottom-1 `}
                ></span>
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;