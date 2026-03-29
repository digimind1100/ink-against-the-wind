import React from "react";

const YOUTUBE_PLAYLIST_ID = "PLXXXXXXXXXXXX"; // 🔴 apni playlist ID yahan paste karo

const Audio = () => {
  return (
    <section className="bg-black text-gray-200 py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Audio Library
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Audio readings, narrations, and spoken pieces from the
            <span className="text-yellow-400"> Bint-e-Dahir </span>
            YouTube playlist.
          </p>
        </div>

        {/* Playlist Embed */}
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden border border-gray-800 shadow-lg">
            <iframe
              src={`https://www.youtube.com/embed/videoseries?list=${YOUTUBE_PLAYLIST_ID}`}
              title="YouTube Audio Playlist"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-12">
          <a
            href="https://youtube.com/@bint-e-dahir-yn9cd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-yellow-400 hover:text-yellow-300 transition"
          >
            Explore full audio collection on YouTube →
          </a>
        </div>

      </div>
    </section>
  );
};

export default Audio;
