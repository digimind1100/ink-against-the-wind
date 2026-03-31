import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

export default function Book3() {
  const book = {
    heading: "'Bhaag Bhari': — A Study of Nuclear Disaster",
    description: `Safdar Zaidi undertakes the mission to foreground the potential disaster hanging like the Sword of Damocles over the heads of 1.6 billion people. In a 416-page the author very vividly and graphically presents the horrors a nuclear war between India and Pakistan can cause. He warns it will not be confined and cannot be confined only to the two countries. In an already destabilised world where climate change with all its concomitant features of green house effect and increasing temperatures and the weather cycles badly disturbed the impact of a nuclear war can prove disastrous to the entire world.
It is in the light of such a global background that the author sets the story of Bhaag Bhari (a woman blessed by good fortune!), an Untouchable woman who is additionally a bonded labourer belonging to a village in the interior of Pakistan’s southern province of Sindh.
Typically, at a tender age she is raped by Jaffar Shah, younger brother of the Wadera Haider Shah (landlord), becomes pregnant, implores the Wadera for justice and succour but is subjected to extreme humiliation amid abuses and blows. The Wadera marries her off to an old man from her caste who dies soon after. Bhaag Bhari gives birth to a son, Sawan.
Sawan is the key protagonist in the novel. Bhaag Bhari does all she can to protect her son from harm, but the boy falls in a trap of a cleric who converts him to Islam, gives him the name Khalid. Khalid is sent to a madrassa in Karachi.
From there onwards Sawan aka Khalid is indoctrinated to hate the enemies of Islam and that sort of mindset inevitably takes him on to terrorism. The terrorism is directed at the non-Muslim minorities in Pakistan as well as the Shias, whose beliefs are found colliding with extreme Sunni dogma. A mentor for Khalid is Muaviya.
Both ardently believe that the world is unjust and unfair and as true believers in Islam it is their bounden duty to change it in accordance with the will of Allah. Khalid is sent to India where he continues with terrorist missions.
( Abbas Zaidi )

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
          src="/novel/book3.png"
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