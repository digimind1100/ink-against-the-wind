import { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Play, X } from "lucide-react";

export default function Events() {
  const [videos] = useState([
    {
      id: 1,
      title: "Writing Session",
      type: "youtube",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
      url: "https://youtu.be/C5XyXG8lLYU?is=7h21CnAQfszt-JwQ",
    },
    {
      id: 2,
      title: "Short Film Clip",
      type: "file",
      thumbnail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      url: "/videos/sample.mp4",
    },
    {
      id: 3,
      title: "Vimeo Content",
      type: "vimeo",
      thumbnail: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      url: "https://player.vimeo.com/video/76979871",
    },
  ]);

  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* 🔥 Header */}
      <div className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold">Gallery</h1>
        <p className="text-gray-400 mt-4">
          Watch stories come alive through visuals.
        </p>
      </div>

      {/* 🎬 Grid */}
      <div className="px-6 md:px-16 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition"></div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full">
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

      {/* 🎥 PLAYER MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={30} />
          </button>

          <div className="w-[90%] md:w-[70%] lg:w-[60%] aspect-video">
            {activeVideo.type === "file" ? (
              <video
                src={activeVideo.url}
                controls
                autoPlay
                className="w-full h-full rounded-xl"
              />
            ) : (
              <iframe
                src={activeVideo.url}
                title="Video Player"
                className="w-full h-full rounded-xl"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}