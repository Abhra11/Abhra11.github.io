import "./Skills.css";
import React, { useEffect } from "react";
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

import Aos from "aos";
import "aos/dist/aos.css";
import { Container } from "@mui/system";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <Container id="skills" data-aos="flip-left">
      <Hero2
        heading="Skills"
        text="The future belongs to those who learn more skills and combine them in creative ways. ___Robert Greene"
      />

      <div className="skills">
        <div className="card-container" data-aos="flip-right">
          <div className="card">
            <h3>Tech Skills</h3>

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

            <SiChakraui className="logo" />
            <p>
              ChakraUI
              <span className="bar"></span>
            </p>

            <SiSwiper className="logo" />
            <p>
              Swiper
              <span className="bar"></span>
            </p>

            <FaNodeJs />
            <p>
              NodeJS
              <span className="bar"></span>
            </p>
          </div>

          <div className="card">
            <h3>Tech Tools</h3>

            <TfiGithub className="logo" />
            <p>
              Git/Github
              <span className="bar"></span>
            </p>

            <SiMongodb />
            <p>
              Mongodb
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
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Skills;
