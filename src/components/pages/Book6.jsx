import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

export default function Book6() {
  const book = {
    heading: "Zard Qaidi ( Yellow Prisoners )",
    description: `In the Mahabharata, when Ashwatthama, the son of Dronacharya, used the Narayan Astra (a mythical atomic weapon), Krishna cursed him with eternal life, turning him into a demonic being. Since then, Ashwatthama has remained alive—and so has his evil—which now looms over the people of the subcontinent in the form of the atomic bomb.
Safdar Zaidi traces this demonic source, leading the reader to uranium mines where poison settles into miners’ lungs as dust, and into sensitive minds as fear—constantly creating new forms of the “Narayan Astra.” The nuclear-armed subcontinent searches for a “Shanti Mantra” (peace invocation) to free itself from Ashwatthama’s ghost. One note of this mantra is expressed by Zaidi in “Bhag Bhari,” and another in “Zard Qaidī” (The Yellow Prisoner). Both novels are, in essence, a literary resistance against this collective ظلم (oppression).

The path to survival from this modern Ashwatthama does not lie merely in geographical escape, but in recognizing this ظلم and raising a voice against it—whether it is local state oppression or global environmental destruction. Just as Ashwatthama was condemned to live forever as punishment for his sin, the evil of the atomic bomb has seeped into our water, air, and soil. The poison from uranium mines and radioactive waste has become our new “Ashwatthama”—a creation of our own making that will haunt generations to come.
The blue planet has now turned into a man-made hell. Even imagined aliens would be astonished at why humanity has created such an Ashwatthama—one not born of an external enemy, but of its own عقل (intellect). Zaidi’s “Zard Qaidī” is, in fact, the manifestation of this modern Ashwatthama—formed from a triangle of nuclear fear, environmental devastation, and cosmic warning. Its remedy lies in the very “Shanti Mantra,” whose essence is the recovery of ecological and moral survival.
For Safdar Zaidi, the atomic bomb is not merely a weapon; it is a symbol of the سقوط (decline) of humanity’s collective conscience, moral collapse, and the environmental ruin of Earth. Through the laborers working in uranium mines, he attempts to descend into the depths of the Earth’s suffering and human greed—workers who, even while stepping into the embrace of death, dream of humanity’s safety.
The workers in “Zard Qaidī” bear witness to a system that transforms the Earth’s natural sustenance into poison—a system that writes destruction in the name of progress. Amid the darkness of uranium mines, the sweat of laborers, and the artificial glow of nuclear energy, Zaidi constructs a narrative that is at once a civilizational elegy and a sign of the potential renewal of human consciousness.
The appearance of aliens in the novel is not merely a fictional device; rather, it represents an external gaze upon Earth’s inhabitants—or symbolically, the collective conscience of humanity itself—astonished at the ظلم occurring on this planet, wondering how humans and their own home have become strangers to each other. The “progress” humanity prides itself on is, in reality, destruction—and a question for which humanity itself has no answer.

Ghulam Asghar Khan

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
          src="/novel/book6.png"
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