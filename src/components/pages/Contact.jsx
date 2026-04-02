import { useRef } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i3k81r7",
        "template_63bfmnk",
        form.current,
        "SPLS20z5yNAZJjKUp"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.log(error);
        }
      );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* 🔥 Header */}
      <div className="text-center px-6">
        <h1 className="text-5xl font-bold">Contact Me</h1>
        <p className="text-gray-400 mt-4">
          Let’s connect. Share your thoughts, feedback, or inquiries.
        </p>
      </div>

      {/* 📩 Form */}
      <div className="flex justify-center px-6 pb-20">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-6"
        >
          {/* Name */}
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-black border border-white/20 focus:outline-none"
          />

          {/* Email */}
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-black border border-white/20 focus:outline-none"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded-lg bg-black border border-white/20 focus:outline-none"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}