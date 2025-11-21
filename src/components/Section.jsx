import React from "react";
import { motion } from "framer-motion";

export default function Section() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full py-20 px-6 flex justify-center"
      style={{
        background: `linear-gradient(
          to bottom,
          #030001 0%,
          #665461 70%,
          #757F5E 100%
        )`,
      }}
    >
      <div className="max-w-3xl text-center text-white">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Ink Against the Wind
        </h2>

        <div className="w-24 h-1 mx-auto mt-4 mb-8 bg-white/40 rounded-full"></div>

        {/* Quote Block */}
        <blockquote className="relative px-6 md:px-10">
          {/* Opening Quote */}
          <span className="absolute left-0 top-0 text-5xl md:text-6xl text-white/20 select-none">
            “
          </span>

          <p className="text-lg md:text-xl leading-relaxed text-gray-100 italic">
            History is often written by invaders and refined by their loyal
            historians. But fiction holds a sacred power — to challenge false
            truths and awaken the imagination. Step into my world of magical
            realism, where ink dares to write against the wind.
          </p>

          {/* Closing Quote */}
          <span className="absolute right-0 bottom-0 text-5xl md:text-6xl text-white/20 select-none">
            ”
          </span>

          {/* Author Name */}
          <p className="text-right mt-6 text-gray-200 text-lg font-light tracking-wide">
            — Safdar Zaidi
          </p>
        </blockquote>

      </div>
    </motion.section>
  );
}
