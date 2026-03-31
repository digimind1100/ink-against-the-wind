import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

export default function Book2() {
  const book = {
    heading: "Chini Jo Meethi na thi",
    description: `The Bitter and the Sweet
In the coastal mists of The Hague, a young couple finds their bond frayed by the shadow of the man’s deepening melancholy. Teetering on the precipice of ruin, the relationship falters as he casts about for a fleeting reprieve—a hollow happiness that vanishes as quickly as it appears. Yet, by a sudden caprice of fate, he encounters a stranger who holds the lantern to his forgotten history, guiding him back through the corridors of time.
Karaila and sugar: the sharp sting of the bitter melon and the crystalline grace of sweetness. These are the elements that season this bittersweet odyssey of love, kinship, and the fragile nature of trust.
With a startling shift in tide, the narrative retreats to the India of 1873. Here, the prose captures the harrowing plight of the peasantry, ground into the dust by the machinations of British colonial rule. Driven by desperation and the promise of a hallowed horizon, a small band of souls resolves to seek the legendary Land of Shri Ram, beginning an arduous pilgrimage toward the docks of Calcutta.
What follows is the crossing of the Kala Pani—the dreaded Black Water. Upon reaching the shores of Suriname, we become witnesses to their endurance and the birth of a new legacy.
The journey concludes where it began: with a man no longer adrift. Having unearthed the roots of his heritage, he stands at a solemn crossroads, finally possessed of the clarity required to forge a path toward a life of genuine grace.

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
          src="/novel/book2.png"
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