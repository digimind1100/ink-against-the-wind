// src/pages/Novel.jsx
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer"



export default function NovelPage() {
  return (
    <div className="min-h-screen bg-gray-500">
      {/* Navbar same as Home */}
      <Navbar />

      {/* Main Novel Page Heading */}
      <div className="text-center pt-24 py-12 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Novels by Safdar Zaidi
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
          Explore the captivating literary world through my novels.
        </p>
      </div>

      {/* 10 Novel Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 pb-12">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden"
          >
            {/* Left Novel Image */}
            <img
              src={`/novel/book${(index % 6) + 1}.png`}
              alt={`Book ${index + 1}`}
              className="w-full md:w-1/3 object-cover"
            />

            {/* Right Text */}
            <div className="p-6 flex flex-col justify-between">
              <h2 className="text-2xl font-semibold mb-2">Book Title {index + 1}</h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                accumsan, metus ultrices eleifend gravida, nulla nunc varius
                lectus.
              </p>
              <button className="self-start px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
    
  );
}
