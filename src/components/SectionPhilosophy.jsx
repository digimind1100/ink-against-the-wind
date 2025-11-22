import { motion } from "framer-motion";

export default function SectionPhilosophy() {
  return (
    <section
        className="
        w-full py-20 px-6 md:px-16 
        bg-gradient-to-b 
        from-[#757F5E]/100 via-[#4f4152]/80 to-[#0f0d11]/95
        text-white
      "
    >
      <div className="max-w-5xl mx-auto text-center space-y-8">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-semibold tracking-wide"
        >
          Why I Write
        </motion.h2>

        {/* Main Philosophy Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="
            text-lg md:text-xl leading-relaxed 
            text-gray-200 max-w-3xl mx-auto
          "
        >
          I write to explore the unseen — the quiet corners of the human spirit 
          where truth hides behind myths, memory, and imagination. In a world 
          shaped by borrowed narratives and inherited beliefs, fiction allows me 
          to break the walls that history builds around us.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="
            text-lg md:text-xl leading-relaxed 
            text-gray-200 max-w-3xl mx-auto
          "
        >
          Magical realism is not an escape — it is a *return* to possibilities 
          we once believed in. Through my stories, I search for the moments where 
          reality bends, where time becomes soft, and where the heart remembers 
          what the mind has forgotten.
        </motion.p>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
          className="pt-6"
        >
          <p className="text-xl italic tracking-wide text-gray-300">
           
          </p>
        </motion.div>

      </div>
    </section>
  );
}
