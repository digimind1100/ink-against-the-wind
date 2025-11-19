// src/components/Section.jsx
import React from "react";

export default function Section() {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Ink Against the Wind</h2>
        <p className="text-lg md:text-xl">
          A journey of creativity and code. Tailwind CSS is fully working in this section!
        </p>
        <button className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg text-white font-semibold transition">
          Explore More
        </button>
      </div>
    </section>
  );
}
