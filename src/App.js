import logo from "./logo.svg";
import "./App.css";
import Home from "./Routes/Home";
import Aboutme from "./Routes/Aboutme";
import Project from "./Routes/Project";
import Contact from "./Routes/Contact";

import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
