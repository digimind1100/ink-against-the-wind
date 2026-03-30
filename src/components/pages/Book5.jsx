import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

export default function Book5() {
  const book = {
    heading: "Gwadar Ke Surkh Kekre (The Red Crabs of Gwadar )",
    description: `Censorship has been the bane of writers ever since people have used various forms of media where they can share their writings with public. Its most prevalent form is when those in power prevent material reaching public that they think is inappropriate, mostly because they feel it will make them look bad and turn public against them. This often involves making writers or publishers remove parts of their books or banning the sale and distribution of books outright. However, it can be much worse than that and writers have faced physical harassment, arrests, torture and even death and disappearance when they have been on the wrong side of authoritarian or brutal tyrannical regimes. 
Faced with such threats writers have employed various techniques in their writings.
Oscar Wilde tells us, ‘If you want to tell people the truth, make them laugh, otherwise they will kill you.’ And therefore, the use of humour is one such technique, often it takes the form of satire and is disguised in such a way that the real target is ambiguous.
The term Aesopian language was first used by the nineteenth-century Russian writer Mikhail Saltykov-Shchedrin to describe the writing technique he began using late in his career, which he compared to that of Aesop's Fables. His purpose was to satirize the social ills of the time while evading the harsh censorship of the late Tsarist Russia, of which he was a particular target.
One of the techniques used in Aesopian language is to use animal characters who behave like humans and while what is being presented is behaviour of real humans, both victims and their tormentors, because they are being represented by animals the writer can escape censorship or worse.
Safdar Zaidi’s novel, ‘Gwadar Kay Surkh Karary (The Red Crabs of Gwadar)’ is one such story employing the Aesopian language and presenting the atrocities using crabs who are the victims of oppression from a newly arrived variety of sharks and suffer disappearances, torture and death even if they sing songs of freedom.
The writer told me that putting this story on paper was a very emotional experience for him since he has written about events that have not been in the past but are ongoing and all the atrocities and barbarities mentioned in the story are happening every day in the land of the pure.
I am told that the story is going to be made into a animation film, but I don’t think it will be allowed screening in Pakistan.
( Aamir Butt )

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