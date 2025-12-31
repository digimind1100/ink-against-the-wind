import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#030001] via-[#493E57] to-[#665461] text-gray-200 py-14 overflow-hidden">
      
      {/* Floating glowing elements */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-[#7b6b8d] rounded-full blur-3xl -top-40 -left-20"></div>
        <div className="absolute w-72 h-72 bg-[#4f5640] rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center space-y-10">
        
        {/* Author Signature */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-light tracking-wide italic text-[#E9DFD0]"
        >
          Safdar Zaidi
        </motion.h2>

        {/* Literary Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed italic"
        >
          “Where stories rise against silence, and imagination becomes rebellion.”
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex justify-center gap-8 mt-6"
        >
          <a
            href="#"
            className="flex items-center gap-2 transition-all"
          >
            <FaInstagram className="text-xl text-[#E4405F]" /> Instagram
          </a>

          <a
            href="#"
            className="flex items-center gap-2 transition-all"
          >
            <FaFacebook className="text-xl text-[#1877F2]" /> Facebook
          </a>

          <a
            href="#"
            className="flex items-center gap-2 transition-all"
          >
            <FaYoutube className="text-xl text-[#FF0000]" /> YouTube
          </a>

          {/* ✅ TikTok Added */}
          <a
            href="#"
            className="flex items-center gap-2 transition-all"
          >
            <FaTiktok className="text-xl text-[#69C9D0]" /> TikTok
          </a>
        </motion.div>

        {/* Divider */}
        <motion.hr
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1 }}
          className="border-gray-600/40 mt-10"
        />

        {/* 🔹 NEW ELEGANT DARK GREY LINE HERE */}
        <motion.hr
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-gray-700/50 mt-6 w-2/3 mx-auto"
        />

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm text-gray-400 mt-4"
        >
          © {new Date().getFullYear()} Safdar Zaidi — All Rights Reserved
        </motion.p>
      </div>
    </footer>
  );
}
