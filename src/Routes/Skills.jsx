import "./Skills.css";
import React from "react";
import Hero2 from "../Components/Hero2";
import { FaNodeJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import {
  SiCsswizardry,
  SiMongodb,
  SiHtml5,
  SiSemanticuireact,
  SiRedux,
  SiChakraui,
  SiExpress,
  SiPostman,
  SiSwiper,
} from "react-icons/si";
import { TfiGithub } from "react-icons/tfi";

const Skills = () => {
  return (
    <div id="skills">
      <Hero2
        heading="Skills"
        text="The future belongs to those who learn more skills and combine them in creative ways. ___Robert Greene"
      />

      <div className="skills">
        <div className="card-container">
          <div className="card">
            <h3>Hard skill</h3>

            <SiHtml5 className="logo" />
            <p>
              HTML
              <span className="bar"></span>
            </p>

            <SiCsswizardry />
            <p>
              CSS
              <span className="bar"></span>
            </p>

            <SiJavascript />
            <p>
              JavaScript
              <span className="bar"></span>
            </p>

            <TfiGithub />
            <p>
              Git/Github
              <span className="bar"></span>
            </p>

            <SiMongodb />
            <p>
              Mongodb
              <span className="bar"></span>
            </p>

            <FaNodeJs />
            <p>
              NodeJS
              <span className="bar"></span>
            </p>
          </div>

          <div className="card">
            <h3>Hard skill</h3>

            <SiSemanticuireact className="logo" />
            <p>
              ReactJS
              <span className="bar"></span>
            </p>

            <SiRedux className="logo" />
            <p>
              CSS
              <span className="bar"></span>
            </p>

            <SiChakraui className="logo" />
            <p>
              ChakraUI
              <span className="bar"></span>
            </p>

            <SiExpress className="logo" />
            <p>
              Express
              <span className="bar"></span>
            </p>

            <SiPostman className="logo" />
            <p>
              Postman
              <span className="bar"></span>
            </p>

            <SiSwiper className="logo" />
            <p>
              Swiper
              <span className="bar"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
