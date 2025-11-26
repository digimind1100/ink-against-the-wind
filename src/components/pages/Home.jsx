// src/components/pages/Home.jsx
import React from "react";

import Header from "../Header";
import Section from "../Section";
import SectionPhilosophy from "../SectionPhilosophy";
import SectionBooks from "../SectionBooks";
import LiveBroadcasts from "../LiveBroadcasts";
import AboutAuthor from "../AboutAuthor";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Section />
      <SectionPhilosophy />
      <SectionBooks />
      <LiveBroadcasts />
      <AboutAuthor />
      <Footer />
    </>
  );
}
