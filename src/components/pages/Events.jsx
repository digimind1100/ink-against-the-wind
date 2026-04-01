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
      youtube: "https://youtu.be/C5XyXG8lLYU",
    },
    {
      id: 2,
      title: "Another Video",
      type: "youtube",
      youtube: "https://youtu.be/TuAl-_VrIVc?is=f_Bkd6TliZTcrxRu",
    },
 {
      id: 3,
      title: "Another Video",
      type: "youtube",
      youtube: "https://youtu.be/dQY5ZPfYdoI?is=v7w_FTba7MIp1DAi",
    },
{
      id: 4,
      title: "Another Video",
      type: "youtube",
      youtube: "https://youtu.be/hvoIt0y7vVs?is=uqFN45dDPbygW29s",
    },
{
      id: 5,
      title: "Another Video",
      type: "youtube",
      youtube: "https://youtu.be/YM8Jm0FQaT4?is=KCYvg2KdoNLZBX3_",
    },
    {
      id: 6,
      title: "Another Video",
      type: "youtube",
      youtube: "https://youtu.be/RYZ4Sb4A02Y?is=DR4cDzSDzdoDBNvL",
    },

{
  id: 7,
  title: "Facebook Event",
  type: "facebook",
  thumbnail: "/images/facebook-thumb.jpg", // you add manually
  url: "https://www.facebook.com/share/v/14aLWBTrkMU/?mibextid=wwXIfr",
},

{
  id: 8,
  title: "Facebook Event",
  type: "facebook",
  thumbnail: "/images/facebook-thumb.jpg", // you add manually
  url: "https://www.facebook.com/share/v/18F2q4n9jg/?mibextid=wwXIfr",
},

{
  id: 9,
  title: "Facebook Event",
  type: "facebook",
  thumbnail: "/images/facebook-thumb.jpg", // you add manually
  url: "https://www.facebook.com/share/p/1Ai2Bhtr2n/?mibextid=wwXIfr",
},
{
  id: 10,
  title: "Facebook Event",
  type: "facebook",
  thumbnail: "/images/facebook-thumb.jpg", // you add manually
  url: "https://youtu.be/hvoIt0y7vVs?is=uqFN45dDPbygW29s",
},

  ]);

  const [activeVideo, setActiveVideo] = useState(null);

  // ✅ Helper Function
  function getYouTubeData(link) {
    const idMatch = link.match(/(?:youtu\.be\/|v=|embed\/)([^?&]+)/);
    const id = idMatch ? idMatch[1] : null;

    if (!id) return null;

    return {
      embed: `https://www.youtube.com/embed/${id}`,
      thumbnail: `https://img.youtube.com/vi/${id}/0.jpg`,
    };
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* 🔥 Header */}
      <div className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold">Events & Gallery</h1>
        <p className="text-gray-400 mt-4">
          Watch stories come alive through visuals.
        </p>
      </div>

      {/* 🎬 Gallery Grid */}
      <div className="px-6 md:px-16 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => {
            let finalVideo = video;

            if (video.type === "youtube") {
              const yt = getYouTubeData(video.youtube);
              if (yt) {
                finalVideo = {
                  ...video,
                  url: yt.embed,
                  thumbnail: yt.thumbnail,
                };
              }
            }

            return (
              <div
                key={video.id}
                onClick={() => {
  if (video.type === "facebook") {
    window.open(video.url, "_blank");
  } else {
    setActiveVideo(finalVideo);
  }
}}
                className="group relative cursor-pointer overflow-hidden rounded-2xl"
              >
                <img
                  src={finalVideo.thumbnail}
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
            );
          })}
        </div>
      </div>

      {/* 🎥 Modal */}
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
            <iframe
              src={activeVideo.url}
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