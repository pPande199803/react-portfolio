import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contacts";
import Navbar from "./components/Navbar";
import Skills from "./components/pages/Skills";
import Footer from "./components/pages/Footer";
import Experience from "./components/pages/Experience";
import ScrollToTop from "./components/pages/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}



export default App;
