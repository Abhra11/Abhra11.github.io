import "./Hero.css";
import { Link } from "react-scroll";
import React from "react";
import Img1 from "../assets/bg.jpg";
import profile from "../assets/1665428844472-01-03-01.jpeg";
import Typical from "react-typical";

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="img1" src={Img1} alt="404 Error" />
      </div>

      <div className="headLine">
        <h1>Hello There,</h1>
        <img className="profile" src={profile} alt="" />
        <p className="title1">I'm Abhra Mondal.</p>
        <h1>
          <Typical
            className="typical"
            loop={Infinity}
            steps={[
              "I'm a Full Stack Web Developer",
              ,
              1000,
              "I'm result oriented",
              500,
            ]}
          />
        </h1>
        <div>
          <Link to="project" className="btn" spy={true} smooth={true}>
            Projects
          </Link>
          <Link to="contact" className="btn btn-light" spy={true} smooth={true}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
