import { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Play } from "lucide-react";

export default function Gallery() {
  // 🔹 You can add more videos here anytime
  const [videos] = useState([
    {
      id: 1,
      title: "Writing Session",
      thumbnail: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "Behind the Story",
      thumbnail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 3,
      title: "Poetry Reading",
      thumbnail: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ]);

  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* 🔥 Hero Section */}
      <div className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
          Video Gallery
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          A visual journey through stories, writing moments, and creative
          expression.
        </p>
      </div>

      {/* 🎬 Gallery Grid */}
      <div className="px-6 md:px-16 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              onClick={() => setActiveVideo(video.url)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition"></div>

              {/* Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full group-hover:scale-110 transition">
                  <Play size={30} />
                </div>
              </div>

              {/* Title */}
              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-semibold">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🎥 Modal Player */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="w-[90%] md:w-[70%] lg:w-[60%] aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={activeVideo}
              title="Video Player"
              className="w-full h-full rounded-xl"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}