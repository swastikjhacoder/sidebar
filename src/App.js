import Intro from "./pages/Intro";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <SideBar>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </SideBar>
      </BrowserRouter>
    </>
  );
}

export default App;
