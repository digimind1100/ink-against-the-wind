import Navbar from "../Navbar";
import Footer from "../Footer";

export default function TranslatedWork() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0d11] via-[#3e3442] to-[#5c6350] text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-28 pb-16 px-6 md:px-16 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light mb-6">
          Literary Profile
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          A prolific multilingual novelist and academic researcher with a career spanning over a decade. 
          My work focuses on the intersection of historical trauma, labor migrations, and socio-cultural identity. 
          With a debut published in Europe and South America, and a suite of novels published across South Asia, 
          my narratives have been translated into seven languages, reflecting a deeply global perspective.
        </p>
      </section>

      {/* PUBLISHED NOVELS */}
      <section className="px-6 md:px-16 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-10 text-center">
          Published Novels
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Gwadar ke surkh Kekere",
              detail: "Fiction House, Lahore (2025)",
              desc: "A symbolic novel exploring modern geopolitical and social themes.",
            },
            {
              title: "Bhaag bhari",
              detail: "Aks Publishers, Lahore (2018)",
              desc: "Widely acclaimed; currently being translated into English.",
            },
            {
              title: "Bint-E-Dahir",
              detail: "Aks Publishers, Lahore (2022)",
              desc: "Translated across five regional languages and English.",
            },
            {
              title: "Zard Qaidi",
              detail: "Matter Links Publishers, Lucknow (2025)",
              desc: "",
            },
            {
              title: "De suiker die niet zoet was",
              detail: "U2Pi, The Hague (2013) / Ralicon, Suriname (2014)",
              desc: "Debut novel on colonial sugar industry; included in Suriname school literature.",
            },
          ].map((book, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:scale-[1.02] transition"
            >
              <h3 className="text-xl font-semibold mb-1">{book.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{book.detail}</p>
              <p className="text-gray-300 text-sm">{book.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ACADEMIC SECTION */}
      <section className="px-6 md:px-16 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-8 text-center">
          Academic Contributions
        </h2>

        <div className="bg-white/10 p-6 rounded-xl border border-white/10">
          <p className="text-lg italic mb-3">
            “Slavery and Indentured Labour from the Perspective of Art Studies”
          </p>
          <p className="text-gray-300 text-sm">
            Social and Cultural Dimensions of Indian Indentured Labour and its Diaspora
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Routledge, Taylor & Francis Group (London & New York)
          </p>
          <p className="text-gray-400 text-sm">
            ISBN: 978-1-138-28078-6
          </p>
        </div>
      </section>

      {/* TRANSLATIONS TABLE */}
      <section className="px-6 md:px-16 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-8 text-center">
          Translations & Global Reach
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border border-white/10">
            <thead className="bg-white/10">
              <tr>
                <th className="p-3">Work</th>
                <th className="p-3">Translated Languages</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/10">
                <td className="p-3">De suiker die niet zoet was</td>
                <td className="p-3">Urdu, Hindi</td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="p-3">Bhaag bhari</td>
                <td className="p-3">Pashto, Persian, English (In Progress)</td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="p-3">Bint-E-Dahir</td>
                <td className="p-3">
                  Pashto, Punjabi, Gurmukhi, Sindhi, Persian, English
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CORE THEMES */}
      <section className="px-6 md:px-16 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-10 text-center">
          Core Thematic Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Indentured Labor Diaspora",
              desc: "Focus on the 'Sugar Route' between India, Suriname, and Europe.",
            },
            {
              title: "Multilingual Narrative",
              desc: "Maintaining cultural nuance across Urdu, Dutch, and English.",
            },
            {
              title: "Symbolic Realism",
              desc: "Using symbolism to address complex socio-political issues.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 p-6 rounded-xl border border-white/10 hover:scale-105 transition"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNICAL DETAILS */}
      <section className="px-6 md:px-16 py-16 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-6">
          Technical Details
        </h2>

        <p className="text-gray-300 mb-2">
          <span className="font-semibold">Languages:</span> Dutch, English, Urdu
        </p>

        <p className="text-gray-300 mb-2">
          <span className="font-semibold">Affiliations:</span> Fiction House Publishers, Lahore
        </p>

        <p className="text-gray-400 text-sm mt-4">
          Published across The Hague, London, Lahore, and Lucknow.
        </p>
      </section>

      <Footer />
    </div>
  );
}