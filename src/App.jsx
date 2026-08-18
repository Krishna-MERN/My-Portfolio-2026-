import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";

// Add these pages when you create them
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Updates from "./pages/Updates";
import Skills from "./pages/Skills";
import Certifications from "./pages/Certifications";
import Achievements from "./pages/Achievements";
import Blog from "./pages/Blog";
import MyJourney from "./pages/blogs/MyJourney";
import CareerJourney from "./pages/CareerJourney";
// import CodingProfiles from "./pages/CodingProfiles";
import Contact from "./pages/Contact";
import BlogDemo from "./pages/blogs/BlogDemo";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          {/* =========================
              MAIN PAGES
          ========================= */}

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/education" element={<Education />} />

          <Route path="/experience" element={<Experience />} />

          <Route path="/skills" element={<Skills />} />

          <Route path="/updates" element={<Updates />} />

          <Route path="/certifications" element={<Certifications />} />

          <Route path="/achievements" element={<Achievements />} />

          <Route path="/blog" element={<Blog />} />
              <Route path="/blog/1" element={<MyJourney />} />
              <Route path="/blog/2" element={<BlogDemo />} />
          {/* <Route path="/coding-profiles" element={<CodingProfiles />} /> */}

          <Route path="/career-journey" element={<CareerJourney />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
