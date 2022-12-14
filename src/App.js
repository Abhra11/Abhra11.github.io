import "./App.css";
import Home from "./Routes/Home";
import Aboutme from "./Routes/Aboutme";
import Project from "./Routes/Project";
import Contact from "./Routes/Contact";
import Skills from "./Routes/Skills";

import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import GitState from "./Components/GitState";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<Aboutme />} /> */}
        {/* <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} /> */}
      </Routes>
      <Aboutme />
      <Skills />
      <Project />
      <GitState />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
