import { motion } from "framer-motion";
import { useState } from "react";
import BookDetails from "./pages/BookDetails";

export default function SectionBooks() {
  const [selectedBook, setSelectedBook] = useState(null);

  const books = [
    { title: "DE SUiKER DiE NiET ZOET WAS", cover: "/book1.png" },
    { title: "CHINI JO MITHI NA THI", cover: "/book2.png" },
    { title: "BHAG BHARI", cover: "/book3.png" },
    { title: "BINT-E-DAHIR", cover: "/book4.png" },
    { title: "GAWADAR KE KEKREY", cover: "/book5.png" },
    { title: "ZARD QAIDI", cover: "/book6.png" },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-16 bg-gradient-to-b from-[#0f0d11]/95 via-[#4f4152]/80 to-[#75805d]/60 text-white">

      {selectedBook ? (
        <BookDetails
          book={selectedBook}
          onBack={() => setSelectedBook(null)}
        />
      ) : (
        <div className="max-w-6xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-semibold tracking-wide mb-12"
          >
            My Novels
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-14">
            {books.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  className="w-64 h-96 rounded-xl overflow-hidden shadow-xl border border-white/10 bg-black/20"
                >
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <h3 className="text-2xl font-medium mt-4">{book.title}</h3>

                <button
                  onClick={() => setSelectedBook(book)}
                  className="mt-3 px-6 py-2 border border-white/40 rounded-full hover:bg-white/20 transition"
                >
                  Read More
                </button>
              </motion.div>
            ))}
          </div>

        </div>
      )}

    </section>
  );
}