import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const booksData = [
  {
    id: "book1",
    title: "DE SUiKER DiE NiET ZOET WAS",
    cover: "/book1.png",
    description:
      "This is a placeholder description for the book. It explores deep emotions, human psychology, and untold stories that leave a lasting impression on the reader.",
  },
  {
    id: "book2",
    title: "CHINI JO MITHI NA THI",
    cover: "/book2.png",
    description:
      "A compelling narrative about life’s harsh realities. This dummy text can later be replaced with your original book summary.",
  },
  {
    id: "book3",
    title: "BHAG BHARI",
    cover: "/book3.png",
    description:
      "A story of strength and destiny. Replace this text with your real description when ready.",
  },
  {
    id: "book4",
    title: "BINT-E-DAHIR",
    cover: "/book4.png",
    description:
      "A historical and emotional journey. This is placeholder content for now.",
  },
  {
    id: "book5",
    title: "GAWADAR KE KEKREY",
    cover: "/book5.png",
    description:
      "A coastal narrative filled with culture and depth. You can update this description anytime.",
  },
  {
    id: "book6",
    title: "ZARD QAIDI",
    cover: "/book6.png",
    description:
      "A psychological and emotional story. Replace with your actual content later.",
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
      
      <div className="max-w-5xl mx-auto">

        {/* 🔙 Back */}
        <Link
          to="/"
          className="inline-block mb-8 text-sm border border-white/40 px-4 py-2 rounded-full hover:bg-white/20 transition"
        >
          ← Back
        </Link>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* 📕 Image */}
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

          {/* 📖 Content */}
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
          </motion.div>

        </div>
      </div>
    </section>
  );
}