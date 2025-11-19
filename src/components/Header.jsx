import React from "react";
import Navbar from "./Navbar";
import "./Header.css";

const Header = () => {
  return (
    <header className="relative h-screen flex flex-col text-white bg-cover bg-center bg-no-repeat header-banner">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center flex-grow px-4 animate-fadeIn">
     
       
       
      </div>
    </header>
  );
};

export default Header;
