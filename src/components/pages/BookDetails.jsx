import { motion } from "framer-motion";

export default function BookDetails({ book, onBack }) {
  if (!book) return null;

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0f0d11] via-[#4f4152] to-[#75805d] text-white px-6 md:px-16 py-16">
      
      <div className="max-w-5xl mx-auto">

        {/* 🔙 Back */}
        <button
          onClick={onBack}
          className="mb-8 text-sm border border-white/40 px-4 py-2 rounded-full hover:bg-white/20 transition"
        >
          ← Back
        </button>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-center"
          >
            <img
              src={book.cover}
              alt={book.title}
              className="w-72 md:w-96 rounded-xl shadow-2xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              {book.title}
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed whitespace-pre-line">
              {book.description}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}