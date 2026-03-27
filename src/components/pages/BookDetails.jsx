import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

// 🔥 Temporary data (you can move this later to separate file)
const booksData = [
  {
    id: "book1",
    title: "DE SUiKER DiE NiET ZOET WAS",
    cover: "/book1.png",
    description:
      "A powerful story exploring emotions, identity, and hidden truths. This novel takes the reader on a deep emotional journey.",
  },
  {
    id: "book2",
    title: "CHINI JO MITHI NA THI",
    cover: "/book2.png",
    description:
      "A deep narrative about life struggles and bitter realities. A thought-provoking story that stays with you.",
  },
  {
    id: "book3",
    title: "BHAG BHARI",
    cover: "/book3.png",
    description:
      "A story of resilience, courage, and destiny. A journey through challenges and strength.",
  },
  {
    id: "book4",
    title: "BINT-E-DAHIR",
    cover: "/book4.png",
    description:
      "A historical narrative blended with emotional storytelling and cultural depth.",
  },
  {
    id: "book5",
    title: "GAWADAR KE KEKREY",
    cover: "/book5.png",
    description:
      "A unique coastal narrative inspired by culture, environment, and untold stories.",
  },
  {
    id: "book6",
    title: "ZARD QAIDI",
    cover: "/book6.png",
    description:
      "A gripping tale of confinement, psychology, and emotional survival.",
  },
];

export default function BookDetails() {
  const { id } = useParams();

  const book = booksData.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        Book not found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0f0d11] via-[#4f4152] to-[#75805d] text-white px-6 md:px-16 py-16">
      
      <div className="max-w-6xl mx-auto">

        {/* 🔙 Back Button */}
        <Link
          to="/"
          className="inline-block mb-8 text-sm border border-white/40 px-4 py-2 rounded-full hover:bg-white/20 transition"
        >
          ← Back
        </Link>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* 📕 Book Image */}
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

          {/* 📖 Book Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              {book.title}
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              {book.description}
            </p>

            {/* 🔘 Action Buttons */}
            <div className="flex gap-4 mt-8 flex-wrap">
              <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition">
                Buy Now
              </button>

              <button className="px-6 py-3 border border-white/40 rounded-full hover:bg-white/20 transition">
                Read Sample
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}