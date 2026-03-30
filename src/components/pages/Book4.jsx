import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

export default function Book4() {
  const book = {
    heading: "Bint-e-Dahir: Story Of The Crown Princess Of Sindh",
    description: `Safdar Zaidi is a novelist who takes up controversial historical and contemporary events which he casts imaginatively and creatively into in-depth studies of multilayered social, historical and political relations.
His latest novel, Bint-e-Dahir (Daughter of Dahir) belongs to a very special sub-category of the historical novel genre: the historical romance. The main protagonist is Rajkumari Surya, daughter of King Dahir, the last Hindu ruler of Sindh. Dahir was defeated by the invading Arab Army led by the young Arab general Muhammad bin Qasim in 712. His head was severed and sent to the Caliph Al-Walid in Damascus.
Dahir had no male issue; therefore, Rajkumari had been groomed as the crown princess. Her father had not only given her the best education in Vedantic philosophy and statecraft, but also trained her in martial arts and military science.
The Arab praxis pertaining to rulers who did not surrender but fought them and were defeated was to put them to death. Women captured in war were distributed among the troops, with the top generals getting the best pick while those belonging to the defeated royal family were dispatched to the khalifa along with looted wealth in gold, precious stones and other riches.
Dahir’s severed head had been sent to Caliph Al-Walid. Rajkumari was to be sent to Damascus but as chance would have it, she meets the much younger bin Qasim. Notwithstanding her precarious and vulnerable status as a captive war booty, she remains defiant. Hajjaj bin Yousaf who had arbitrarily made bin Qasim supersede seasoned generals to lead the campaign against Dahir in Sindh, finds Rajkumari irresistible.
In the discussions which takes between them, she impresses him profoundly by expounding the deep ethical and moral principles upon which Indian society is based. Bin Qasim is unable to counter her intellectual prowess as he realises that the Arab approach to life is simplistic and rudimentary.
Inevitably, bin Qasim is drawn towards Rajkumari, which she senses forthwith. Notwithstanding the unequal equation defining their relationship she acquires a dominant position in relation to him – a situation she relishes.
( Ishtiaq Ahmed )

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