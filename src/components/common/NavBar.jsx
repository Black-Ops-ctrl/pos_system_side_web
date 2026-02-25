import React, { useState } from "react";
import logo from "../../assets/png/img_logo_pos.png";

const Navbar = () => {
  const [activePage, setActivePage] = useState("Home");

  return (
    <nav className="block bg-secondary text-primary shadow-md sticky top-0 z-50 font-helvetica rounded-full py-2 px-4 sm:px-8 w-full mt-2 sm:mt-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <img
            src={logo}
            alt="POS Logo"
            className="w-6 sm:w-10 md:w-12 h-auto object-contain"
          />
          <span className="text-xs sm:text-base md:text-lg font-semibold text-white whitespace-nowrap">
            POS SYSTEM
          </span>
        </div>

        {/* Nav Links - Mobile: sirf icons ya short text? */}
        <div className="flex space-x-2 sm:space-x-3 md:space-x-6 text-[10px] sm:text-sm md:text-base font-helvetica">
          {["Home", "About", "Portfolio", "Services", "Contact"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                onClick={() => setActivePage(item)}
                className={`relative group transition whitespace-nowrap ${
                  activePage === item ? "text-primary font-medium" : "text-primary/80"
                }`}
              >
                <span>{item}</span>
                <span
                  className={`absolute left-0 h-[2px] bg-primary transition-all ${
                    activePage === item
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  } -bottom-1`}
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