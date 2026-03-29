import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer"

const EVENTS = [
  {
    id: 1,
    title: "International Literary Conference",
    location: "Karachi, Pakistan",
    date: "March 2024",
    description:
      "Keynote speech on contemporary literature and cultural identity.",
    image: "/events/event-1.jpg",
    video: "/events/event-1.mp4",
  },
  {
    id: 2,
    title: "Global Writers Summit",
    location: "Dubai, UAE",
    date: "November 2023",
    description:
      "Panel discussion with international authors on cross-cultural narratives.",
    image: "/events/event-2.jpg",
  },
  {
    id: 3,
    title: "University Lecture Series",
    location: "Lahore, Pakistan",
    date: "September 2023",
    description:
      "Guest lecture for literature students on writing discipline and research.",
    video: "/events/event-3.mp4",
  },
  {
    id: 4,
    title: "Asian Literature Forum",
    location: "Islamabad, Pakistan",
    date: "August 2023",
    description:
      "Spoke on the future of South Asian fiction and storytelling traditions.",
    image: "/events/event-4.jpg",
  },
  {
    id: 5,
    title: "Book Launch & Reading",
    location: "Karachi, Pakistan",
    date: "July 2023",
    description:
      "Public reading session followed by an interactive discussion with readers.",
    image: "/events/event-5.jpg",
    video: "/events/event-5.mp4",
  },
  {
    id: 6,
    title: "Literature & Society Conference",
    location: "Delhi, India",
    date: "May 2023",
    description:
      "Academic conference focusing on literature as social memory.",
    image: "/events/event-6.jpg",
  },
  {
    id: 7,
    title: "Creative Writing Workshop",
    location: "Online",
    date: "April 2023",
    description:
      "Conducted an online workshop for emerging writers.",
    video: "/events/event-7.mp4",
  },
  {
    id: 8,
    title: "International Book Fair",
    location: "Frankfurt, Germany",
    date: "October 2022",
    description:
      "Participated in author meetups and publisher discussions.",
    image: "/events/event-8.jpg",
  },
  {
    id: 9,
    title: "Literary Podcast Interview",
    location: "Online",
    date: "September 2022",
    description:
      "Conversation about writing process, rejection, and persistence.",
    video: "/events/event-9.mp4",
  },
  {
    id: 10,
    title: "National Writers Convention",
    location: "Peshawar, Pakistan",
    date: "August 2022",
    description:
      "Spoke on preserving regional voices in modern literature.",
    image: "/events/event-10.jpg",
  },
  {
    id: 11,
    title: "Women in Literature Panel",
    location: "London, UK",
    date: "June 2022",
    description:
      "Panel discussion highlighting women authors in contemporary fiction.",
    image: "/events/event-11.jpg",
  },
  {
    id: 12,
    title: "Storytelling & History Symposium",
    location: "Istanbul, Turkey",
    date: "May 2022",
    description:
      "Discussed how fiction preserves historical memory.",
    image: "/events/event-12.jpg",
  },
  {
    id: 13,
    title: "Cultural Exchange Program",
    location: "Tehran, Iran",
    date: "March 2022",
    description:
      "Invited speaker for cross-border cultural dialogue.",
    image: "/events/event-13.jpg",
  },
  {
    id: 14,
    title: "Literary Award Ceremony",
    location: "Karachi, Pakistan",
    date: "January 2022",
    description:
      "Honored for contributions to contemporary literature.",
    image: "/events/event-14.jpg",
    video: "/events/event-14.mp4",
  },
  {
    id: 15,
    title: "Independent Publishers Meetup",
    location: "Online",
    date: "December 2021",
    description:
      "Discussion on independent publishing and creative freedom.",
    video: "/events/event-15.mp4",
  },
];

export default function Events() {
  return (
    <main className="bg-black text-gray-200 pt-28 pb-20">
         <Navbar />
      <div className="max-w-7xl mx-auto px-4">

        {/* Hero */}
        <section className="text-center mb-20">
          <h1 className="text-3xl md:text-5xl font-serif mb-4">
            Conferences & Events
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400">
            A curated record of literary conferences, academic invitations,
            workshops, and public engagements.
          </p>
        </section>

        {/* Events Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {EVENTS.map((event) => (
            <article
              key={event.id}
              className="bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition"
            >
              {/* Image */}
              {event.image && (
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 object-cover"
                />
              )}

              {/* Video (only if no image OR used later below) */}
              {event.video && !event.image && (
                <video
                  src={event.video}
                  controls
                  className="w-full h-56 object-cover bg-black"
                />
              )}

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-serif mb-2">
                  {event.title}
                </h2>

                <div className="text-sm text-gray-500 mb-3">
                  {event.location} · {event.date}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {event.description}
                </p>

                {/* Optional Video Below Image */}
                {event.video && event.image && (
                  <div className="mt-4">
                    <video
                      src={event.video}
                      controls
                      className="w-full rounded-lg border border-gray-800"
                    />
                  </div>
                )}
              </div>
            </article>
          ))}
        </section>

        {/* Invitation */}
        <section className="mt-28 text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-4">
            Invitations & Speaking Engagements
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            For conferences, lectures, literary festivals, or panel discussions,
            invitations are always welcome.
          </p>
        </section>
  <Footer/>
      </div>

    </main>
  );
}
