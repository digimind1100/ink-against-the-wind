// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Corrected paths (pages are inside components/pages)
import Home from "./components/pages/Home";
import NovelPage from "./components/pages/Novel";

function App() {
  return (
    <Router>
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<Home />} />

        {/* NOVEL PAGE */}
        <Route path="/novel" element={<NovelPage />} />
      </Routes>
    </Router>
  );
}

export default App;
