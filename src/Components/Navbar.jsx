import "./Navbar.css";
import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { Link, animateScroll } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Resume from "../assets/Abhra_Mondal_Resume.pdf";

const Navbar = () => {
  const [ham, setHam] = useState(false);
  const handleHam = () => setHam(!ham);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 80 || ham) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  // const handleScreenTop = () => {

  //   // console.log("hi");
  // };

  window.addEventListener("scroll", changeColor);
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1edyUIAW9WbLsvrXPpkfvzZHYMsRZSITI/view?usp=sharing"
    );
  };

  useEffect(() => {
    if (ham || color) {
      setColor(true);
    } else {
      setColor(false);
    }
  }, [ham, color]);

  return (
    <div className={color ? "header header-bg" : "header "}>
      <Link to="/">
        <h1 className="name">ABHRA</h1>
      </Link>
      <ul className={ham ? "nav active" : "nav"}>
        <li>
          <Link to="/" onClick={() => animateScroll.scrollToTop()}>
            Home
          </Link>
        </li>

        <li>
          <Link to="about" spy={true} smooth={true}>
            About Me
          </Link>
        </li>

        <li>
          <Link to="skills" spy={true} smooth={true}>
            Skills
          </Link>
        </li>

        <li>
          <Link to="project" spy={true} smooth={true}>
            Projects
          </Link>
        </li>

        <li>
          <Link to="contact" spy={true} smooth={true}>
            Contact
          </Link>
        </li>

        <li>
          <a href={Resume} download onClick={handleClick}>
            Resume
          </a>
        </li>
      </ul>

      <div className="ham" onClick={handleHam}>
        {ham ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
