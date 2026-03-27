import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import Home from "./components/pages/Home";
import Novel from "./components/pages/Novel";
import Blog from "./components/pages/Blog";
import Events from "./components/pages/Events";
import Travel from "./components/pages/Travel";
import BookDetails from "./components/pages/BookDetails"; // 👈 ADD THIS

function App() {
  return (
    <Router>
      <Routes>

        {/* Layout Wrapper */}
        <Route element={<Layout />}>

          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* OTHER PAGES */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/novel" element={<Novel />} />
          <Route path="/events" element={<Events />} />
          <Route path="/travel" element={<Travel />} />

          {/* 🔥 BOOK DETAILS (Dynamic Page) */}
          <Route path="/book/:id" element={<BookDetails />} />

        </Route>

      </Routes>
    </Router>
  );
}

export default App;