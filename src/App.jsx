// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Corrected paths (pages are inside components/pages)
import Home from "./components/pages/Home";
import Novel from "./components/pages/Novel";
import Blog from "./components/pages/Blog"

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
  
      </Routes>
    </Router>
  
  );
}

export default App;
