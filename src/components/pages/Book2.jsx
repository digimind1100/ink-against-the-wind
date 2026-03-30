import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

export default function Book2() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 px-6 md:px-16 max-w-4xl mx-auto">

        {/* Back */}
        <Link
          to="/novel"
          className="inline-block mb-6 border px-4 py-2 rounded hover:bg-white/20"
        >
          ← Back
        </Link>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          DE SUiKER DiE NiET ZOET WAS
        </h1>

        {/* Image */}
        <img
          src="/novel/book2.png"
          className="w-72 mb-6 rounded-xl"
        />

        {/* Description */}
        <p className="text-lg leading-relaxed whitespace-pre-line">
          De Sugar that wasn’t sweet  
          A Journey Through the Black Water of the Soul...

          (yahan apna full content daalna)
        </p>

      </div>

      <Footer />
    </div>
  );
}