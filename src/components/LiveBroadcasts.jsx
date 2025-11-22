import React from "react";
import { motion } from "framer-motion";

const LiveBroadcasts = () => {
    return (
        <div className="w-full bg-gradient-to-b from-[#757F5E] via-[#665461] to-[#030001] py-20 px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto text-center"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    🎙️ Author Live Broadcasts
                </h2>

                <p className="text-lg md:text-xl text-gray-300 mb-10">
                    Watch live sessions, discussions, storytelling, and behind-the-scenes
                    insights from the world of <span className="italic">Safdar Zaidi</span>.
                </p>

                {/* Video Embed */}
                <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-2xl">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/-uQ1ApM9rw4"
                        title="Author Live Broadcast"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                </div>

                <p className="text-gray-300 mt-6 text-sm md:text-base">
                    *More live videos will be added soon.*
                </p>
            </motion.div>
        </div>
    );
};

export default LiveBroadcasts;
