import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses =
    "px-4 py-2 text-lg transition hover:text-gray-300";

  const activeClasses =
    "text-yellow-400 border-b-2 border-yellow-400";

  const mainMenu = [
    { name: "Home", path: "/" },
    { name: "Novels", path: "/novel" },
    { name: "Events", path: "/events" },
    { name: "Travel", path: "/travel" },
    { name: "Translated Work", path: "/translated-work" },
    { name: "Gallery", path: "/gallery" },
  ];

  const miniMenu = [
    { name: "Blog", path: "/blog" },   // ✅ fixed
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 bg-transparent text-gray-300">
      {/* Main Navbar */}
      <div className="flex justify-between items-center px-6 py-3 relative">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide z-50">
          Logo
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 text-lg font-medium z-50 whitespace-nowrap">
          {mainMenu.map((item, index) => (
            <li
              key={index}
              className="relative cursor-pointer group transition"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? `${linkClasses} ${activeClasses}`
                    : linkClasses
                }
              >
                {item.name}
              </NavLink>

              {/* Underline Animation */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center ml-auto z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
      <div className="hidden md:flex justify-center space-x-6 text-sm font-medium pb-2 z-50">
        {miniMenu.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? `${linkClasses} ${activeClasses}`
                : linkClasses
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-black/60 backdrop-blur-md text-white z-50">
          {[...mainMenu, ...miniMenu].map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-gray-300"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
