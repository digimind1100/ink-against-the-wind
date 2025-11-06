import React from "react";
import Navbar from "./Navbar";
import "./Header.css";

const Header = () => {
  return (
    <header className="relative h-[100vh] flex flex-col text-white bg-cover bg-center bg-no-repeat header-banner">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Navbar */}
      <div className="relative z-20 sticky top-0">
        <Navbar />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center flex-grow px-4 mt-12 animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          {/* Welcome to the Literary World of [Author Name] */}
        </h1>
        {/* <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-6 drop-shadow-md">
          Explore timeless novels, creative translations, and captivating journeys that define the art of storytelling.
        </p> */}
        {/* <button className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow hover:bg-gray-200 transition">
          Explore Novels
        </button> */}
      </div>
    </header>
  );
};

export default Header;
