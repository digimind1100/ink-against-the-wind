import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";


// Pages
import Home from "./components/pages/Home";
import Novel from "./components/pages/Novel";
import Blog from "./components/pages/Blog";
import Events from "./components/pages/Events";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import TranslatedWork from "./components/pages/TranslatedWork";
import Book1 from "./components/pages/Book1";
import Book2 from "./components/pages/Book2";
import Book3 from "./components/pages/Book3";
import Book4 from "./components/pages/Book4";
import Book5 from "./components/pages/Book5";
import Book6 from "./components/pages/Book6";
import Reviews from "./components/pages/Reviews";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>

        {/* Layout Wrapper */}
        <Route element={<Layout />}>

          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* OTHER PAGES */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/novel" element={<Novel />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/translated-work" element={<TranslatedWork />} />
          <Route path="/book1" element={<Book1 />} />
          <Route path="/book2" element={<Book2 />} />
          <Route path="/book3" element={<Book3 />} />
          <Route path="/book4" element={<Book4 />} />
          <Route path="/book5" element={<Book5 />} />
          <Route path="/book6" element={<Book6 />} />


        </Route>

      </Routes>
    </Router>
  );
}

export default App;