import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent sticky top-0 text-white z-50">
      {/* Main Navbar */}
      <div className="flex justify-between items-center px-6 py-3 relative">
        {/* Logo on Left */}
        <div className="text-2xl font-bold tracking-wide">Ink Against The Wind</div>

        {/* Main Menu Centered */}
        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 text-lg font-medium">
          {["Home", "Novels", "Events", "Travel", "Translated Work", "Gallery"].map(
            (item, index) => (
              <li
                key={index}
                className="relative cursor-pointer group transition"
              >
                <span className="group-hover:text-gray-300">{item}</span>
                {/* Underline Animation */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            )
          )}
        </ul>

        {/* Hamburger Menu (Right) */}
        <div className="md:hidden flex items-center ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mini Navbar */}
      <div className="hidden md:flex justify-center space-x-6 text-sm font-medium pb-2 sticky top-0">
        {["Blogs", "About", "Contact"].map((item, index) => (
          <span
            key={index}
            className="relative cursor-pointer group transition"
          >
            <span className="group-hover:text-gray-300">{item}</span>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </span>
        ))}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-black/70 backdrop-blur-md text-white">
          {[
            "Home",
            "Novels",
            "Events",
            "Travel",
            "Translated Work",
            "Gallery",
            "Blogs",
            "About",
            "Contact",
          ].map((item, index) => (
            <a key={index} href="#" className="hover:text-gray-300">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
