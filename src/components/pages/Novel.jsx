// pages/novel.js
import React from "react";
import Navbar from "../components/Navbar";

export default function NovelPage() {
  const novels = [
    {
      title: "Novel Title 1",
      desc: "This is a short description about the novel. It talks about the theme, the storyline and the emotional depth within the book.",
      image: "/novels/novel1.jpg",
    },
    {
      title: "Novel Title 2",
      desc: "A thrilling story filled with suspense and unexpected twists. A completely magical journey for readers.",
      image: "/novels/novel2.jpg",
    },
    {
      title: "Novel Title 3",
      desc: "A heart-touching emotional novel about life, loss, and rediscovery.",
      image: "/novels/novel3.jpg",
    },
    {
      title: "Novel Title 4",
      desc: "An inspiring novel written with deep meaning and powerful storytelling.",
      image: "/novels/novel4.jpg",
    },
    {
      title: "Novel Title 5",
      desc: "A historical fiction masterpiece blending truth and imagination beautifully.",
      image: "/novels/novel5.jpg",
    },
    {
      title: "Novel Title 6",
      desc: "A romantic journey with layered emotions and unforgettable characters.",
      image: "/novels/novel6.jpg",
    },
    {
      title: "Novel Title 7",
      desc: "A crime-thriller that grips the reader from the first page.",
      image: "/novels/novel7.jpg",
    },
    {
      title: "Novel Title 8",
      desc: "A motivational take on human struggle, courage, and triumph.",
      image: "/novels/novel8.jpg",
    },
    {
      title: "Novel Title 9",
      desc: "A fantasy world filled with rich lore and compelling characters.",
      image: "/novels/novel9.jpg",
    },
    {
      title: "Novel Title 10",
      desc: "A dramatic tale of relationships and destiny woven together.",
      image: "/novels/novel10.jpg",
    },
  ];

  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* FIRST BLOCK */}
      <section className="px-6 md:px-16 py-16 text-center bg-gradient-to-b from-black to-[#111]">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Novels Collection</h1>
        <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
          Explore the Literary World of the Author
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Discover a wide range of novels written with passion, depth, and storytelling brilliance. 
          Each novel carries a world of imagination crafted to take you beyond ordinary boundaries.
        </p>
      </section>

      {/* SECOND BLOCK — NOVELS LIST */}
      <section className="px-6 md:px-16 py-10 space-y-16">
        {novels.map((novel, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-10 items-center bg-[#101010] p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            {/* Left Image */}
            <img
              src={novel.image}
              alt={novel.title}
              className="w-full h-80 object-cover rounded-xl shadow"
            />

            {/* Right Text */}
            <div>
              <h3 className="text-3xl font-bold mb-3">{novel.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                {novel.desc}
              </p>
              <button className="px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-300 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
