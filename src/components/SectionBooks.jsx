import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import BookDetails from "./pages/BookDetails";
import { useRef } from "react";

export default function SectionBooks() {
  const [selectedBook, setSelectedBook] = useState(null);
   const sectionRef = useRef(null);

  useEffect(() => {
    sectionRef.current?.scrollIntoView({
  behavior: "smooth",
  block: "start",
});
  }, [selectedBook]);

  const handleBack = () => {
    setSelectedBook(null);

    setTimeout(() => {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };


  const books = [
    { title: "DE SUiKER DiE NiET ZOET WAS", cover: "/book1.png" },
    { title: "CHINI JO MITHI NA THI", cover: "/book2.png" },
    { title: "BHAG BHARI", cover: "/book3.png" },
    { title: "BINT-E-DAHIR", cover: "/book4.png" },
    { title: "GAWADAR KE KEKREY", cover: "/book5.png" },
    { title: "ZARD QAIDI", cover: "/book6.png" },
  ];

  // 🔥 FULL SCREEN REPLACEMENT
  if (selectedBook) {
    return (
      <div className="w-full min-h-screen bg-black">
        <BookDetails
          book={selectedBook}
          onBack={() => setSelectedBook(null)}
        />
      </div>
    );
  }

  // 🔥 NORMAL GRID VIEW
  return (
    <div className="w-full">
      <section ref={sectionRef} className="w-full py-24 px-6 md:px-16 bg-gradient-to-b from-[#0f0d11]/95 via-[#4f4152]/80 to-[#75805d]/60 text-white pt-24 min-h-screen">

        <div className="max-w-6xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl mb-12"
          >
            My Novels
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {books.map((book, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
              >
                <img
                  src={book.cover}
                  className="w-64 h-96 object-cover rounded-xl"
                />

                <h3 className="mt-4 text-xl">{book.title}</h3>

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
      </section>
    </div>
  );
}
