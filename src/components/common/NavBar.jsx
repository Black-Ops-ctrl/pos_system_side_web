import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/png/img_logo_pos.png";

const Navbar = () => {
  const [activePage, setActivePage] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Portfolio", "Services", "Contact"];

  return (
    <nav className="block bg-secondary text-primary shadow-md sticky top-0 z-50 font-helvetica rounded-full py-2 px-4 sm:px-8 w-full mt-2 sm:mt-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <img
            src={logo}
            alt="POS Logo"
            className="w-8 sm:w-10 md:w-12 h-auto object-contain"
          />
          <span className="text-sm sm:text-base md:text-lg font-semibold text-white whitespace-nowrap">
            POS SYSTEM
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex space-x-3 md:space-x-6 text-sm md:text-base font-helvetica">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              onClick={() => setActivePage(item)}
              className={`relative group transition whitespace-nowrap ${
                activePage === item ? "text-primary font-medium" : "text-primary/80 hover:text-primary"
              }`}
            >
              <span>{item}</span>
              <span
                className={`absolute left-0 h-[2px] bg-primary transition-all ${
                  activePage === item ? "w-full" : "w-0 group-hover:w-full"
                } -bottom-1`}
              ></span>
            </a>
          ))}
        </div>

        {/* Hamburger Button - Mobile Only */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-white p-1"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden absolute left-0 right-0 top-full mt-2 bg-secondary rounded-2xl shadow-lg py-3 px-4 z-50">
          <div className="flex flex-col space-y-3">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                onClick={() => {
                  setActivePage(item);
                  setIsMenuOpen(false);
                }}
                className={`text-center py-2 rounded-lg transition ${
                  activePage === item 
                    ? "text-primary bg-primary/10 font-medium" 
                    : "text-primary/80 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;