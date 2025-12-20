import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer"

const TRAVELS = [
  {
    id: 1,
    place: "Hunza Valley",
    country: "Pakistan",
    year: "2024",
    description:
      "A journey through silence and mountains. Hunza offered more than landscapes — it offered stillness, reflection, and distance from noise.",
    image: "/travel/travel-1.jpg",
  },
  {
    id: 2,
    place: "Istanbul",
    country: "Turkey",
    year: "2023",
    description:
      "Walking between centuries, where history breathes through streets, mosques, and conversations over tea.",
    image: "/travel/travel-2.jpg",
  },
  {
    id: 3,
    place: "Frankfurt",
    country: "Germany",
    year: "2022",
    description:
      "A city of books, publishers, and quiet cafés — where ideas travel faster than people.",
    image: "/travel/travel-3.jpg",
  },
  {
    id: 4,
    place: "Tehran",
    country: "Iran",
    year: "2022",
    description:
      "A deeply cultural experience filled with warmth, poetry, and conversations that transcended borders.",
    image: "/travel/travel-4.jpg",
  },
  {
    id: 5,
    place: "Dubai",
    country: "UAE",
    year: "2021",
    description:
      "A crossroads of modernity and tradition, experienced through literary gatherings and global dialogues.",
    image: "/travel/travel-5.jpg",
  },
  {
    id: 6,
    place: "Lahore",
    country: "Pakistan",
    year: "2020",
    description:
      "Returning again and again — Lahore remains a city of stories, memory, and unresolved questions.",
    image: "/travel/travel-6.jpg",
  },
];

export default function Travel() {
  return (
    <main className="relative min-h-screen text-gray-100">
          <Navbar />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
        style={{
          backgroundImage: "url('/travel/travel-bg.png')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 pt-28 pb-24 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Hero */}
          <section className="text-center mb-20">
            <h1 className="text-3xl md:text-5xl font-serif mb-4">
              Journeys & Places
            </h1>
            <p className="max-w-2xl mx-auto text-gray-300">
              Travel, for me, is not movement — it is observation.  
              These journeys shaped thoughts, stories, and silence between words.
            </p>
          </section>

          {/* Travel Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {TRAVELS.map((trip) => (
              <article
                key={trip.id}
                className="bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition"
              >
                <img
                  src={trip.image}
                  alt={trip.place}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">
                  <h2 className="text-xl font-serif mb-1">
                    {trip.place}
                  </h2>

                  <div className="text-sm text-gray-400 mb-3">
                    {trip.country} · {trip.year}
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {trip.description}
                  </p>
                </div>
              </article>
            ))}
          </section>

          {/* Closing Reflection */}
          <section className="mt-28 max-w-3xl mx-auto text-center italic text-gray-300">
            <p>
              Every place leaves something behind — sometimes a story,
              sometimes a silence, sometimes a question that demands writing.
            </p>
          </section>

        </div>
      </div>
      <Footer/>
    </main>
  );
}
