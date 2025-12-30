import { motion } from "framer-motion";

export default function SectionBooks() {
  const books = [
    {
      title: "The Silent Lens",
      cover: "/book1.png",
    },
    {
      title: "Whispers of Dust",
      cover: "/book2.png",
    },
    {
      title: "Echoes of the Forgotten Sky",
      cover: "/book3.png",
    },
  ];

  return (
    <section
      className="
        w-full py-24 px-6 md:px-16
        bg-gradient-to-b from-[#0f0d11]/95 via-[#4f4152]/80 to-[#75805d]/60
        text-white
      "
    >
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-semibold tracking-wide mb-12"
        >
          My Novels
        </motion.h2>

        {/* Books Grid */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
            gap-10 md:gap-14
          "
        >
          {books.map((book, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              {/* Book Cover */}
              <motion.div
                whileHover={{ scale: 1.06 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="
                  w-64 h-96 rounded-xl overflow-hidden shadow-xl 
                  border border-white/10 bg-black/20
                "
              >
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-medium mt-4">{book.title}</h3>

              {/* Button */}
              <button
                className="
                  mt-3 px-6 py-2 rounded-full border border-white/40 
                  text-sm hover:bg-white/20 transition
                "
              >
                Read More
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
