import { motion } from "framer-motion";

export default function AboutAuthor() {
  return (
    <section
      className="w-full py-20 px-6 md:px-16 lg:px-32 text-white"
      style={{
        background: `linear-gradient(
          to bottom,
          #757F5E 0%,
          #665461 45%,
          #030001 100%
        )`,
      }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Author Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
         <img
  src="/author.png"
  alt="Author"
  className="w-full max-w-sm h-auto object-cover block m-0 p-0"
  style={{
    border: "none",
    outline: "none",
    boxShadow: "none",
    background: "transparent",
    maskImage: "radial-gradient(circle, black 60%, transparent 100%)",
    WebkitMaskImage: "radial-gradient(circle, black 60%, transparent 100%)",
  }}
/>


        </motion.div>

        {/* Author Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            About the Author
          </h2>

          <p className="text-lg text-gray-200 leading-relaxed italic mb-6">
            “Words are not merely ink on paper — they are breaths of memory,
            whispers of resistance, and the quiet rebellion of the human spirit.”
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            Safdar Zaidi is a storyteller who blends magical realism with the raw
            truths of history. With a voice that moves between myth and memory,
            he weaves narratives that challenge dominant versions of history and
            illuminate forgotten worlds.
          </p>

          <p className="text-gray-300 leading-relaxed">
            His work invites readers to walk the thin line between the real and the
            imagined — where time bends, dreams speak, and ink dares to write
            against the wind.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
