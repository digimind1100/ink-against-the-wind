// src/App.jsx
import React from "react";
import Header from "./components/Header"
import Section from "./components/Section";
import SectionPhilosophy from "./components/SectionPhilosophy";
import SectionBooks from "./components/SectionBooks";


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header/>
      <Section />
      <SectionPhilosophy />
      <SectionBooks /> 
    </div>
  );
}

export default App;
