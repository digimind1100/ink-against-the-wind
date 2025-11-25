// src/pages/Home.jsx
import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import SectionPhilosophy from "../components/SectionPhilosophy";
import SectionBooks from "../components/SectionBooks";
import LiveBroadcasts from "../components/LiveBroadcasts";
import AboutAuthor from "../components/AboutAuthor";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Section />
      <SectionPhilosophy />
      <SectionBooks />
      <LiveBroadcasts />
      <AboutAuthor />
      <Footer />
    </div>
  );
}
