import React from "react";
import Header from "./Header";
import Section from "./Section";
import "./Theme.css";

const Home = () => {
  return (
    <div className="home-page">
      <Header />

      <div className="theme-wrapper">
        <Section title="About the Author">
          This is a demo section to test the gradient theme below the header.
        </Section>

        <Section title="Featured Novels">
          Discover the stories that reflect the author's creative journey.
        </Section>
      </div>
    </div>
  );
};

export default Home;