// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Corrected paths (pages are inside components/pages)
import Home from "./components/pages/Home";
import Novel from "./components/pages/Novel";
import Blog from "./components/pages/Blog"
import Events from "./components/pages/Events"
import Travel from "./components/pages/Travel"

function App() {
  return (
    <Router>
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}/>

        {/* NOVEL PAGE */}
        <Route path="/blog" element = {<Blog />} />
        <Route path="/novel" element={<Novel />} />
        <Route path="/events" element={<Events />} />
        <Route path="/travel" element={<Travel />} />

  
      </Routes>
    </Router>
  
  );
}

export default App;
