import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

export default function Book1() {
  const book = {
    heading: "De Sugar that wasn’t sweet",
    description: `In this hauntingly beautiful narrative, the author weaves a tapestry that is as much about the geography of the heart as it is about the migration of a people. What begins as a modern, domestic tragedy in The Hague—a quiet, suffocating battle with depression—blossoms into a sweeping historical epic.
The transition to 1873 India is handled with remarkable sensitivity, stripping away the romanticism of the past to reveal the raw, systemic cruelty of British rule. By tracing the protagonist's lineage across the Kala Pani to the soil of Suriname, the story suggests that our current shadows are often cast by the suns of our ancestors. It is a profound meditation on how understanding where we came from is the only way to decide where we are going.
`
  };

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
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          {book.heading}
        </h2>

        {/* Image */}
        <img
          src="/novel/book1.png"
          className="w-72 mb-6 rounded-xl"
        />

        {/* Description */}
        <p className="text-lg leading-relaxed whitespace-pre-line">
          {book.description}
        </p>

      </div>

      <Footer />
    </div>
  );
}