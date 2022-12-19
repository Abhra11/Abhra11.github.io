import "./Work.css";
import React from "react";
import { TfiGithub } from "react-icons/tfi";
import { SiNetlify } from "react-icons/si";
import { Link } from "react-router-dom";
import ZARA from "../assets/2022-12-19 12.45.27 cultwear.netlify.app 41fc0e2b0f77.png";
import BEWAKOOF from "../assets/BEWAKOOF.png";
import BlueFly from "../assets/BlueFly.png";
import SHINE from "../assets/Shine.png";

import { Swiper, SwiperSlide } from "swiper/react";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">PROJECTS</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={ZARA} alt="Error 404 not found" />
          <h2 className="project-title">ZARA CLONE</h2>
          <div className="pro-details">
            <p>
              Latest trends in clothing for women, men & kids at ZARA online.
              Find new arrivals, fashion catalogs, collections & lookbooks every
              week. Get exclusive offers like nowhere else.
            </p>

            <h3>
              A collaborative project, built in 4 days by a team of 5
              developers.
            </h3>
            <p>
              <h3>Tech Stack:</h3>RractJS | React-Redux | HTML | JavaScript
            </p>
            <div className="pro-btns">
              <h1 className="logo-link">
                <a
                  href="https://github.com/ApexSpunk/nebulous-unit-9563"
                  className="logo-link2"
                >
                  <TfiGithub />
                  <p>Github</p>
                </a>
              </h1>
              <h1 className="logo-link">
                <a
                  href="https://cultwear.netlify.app/product/636c1ab1df57bf997e3c2e54"
                  className="logo-link2"
                >
                  <SiNetlify />
                  <p>Netlify</p>
                </a>
              </h1>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={BEWAKOOF} alt="Error 404 not found" />
          <h2 className="project-title">BEWAKOOF CLONE</h2>
          <div className="pro-details">
            <p>
              An Hassle-Free and Convenient online shoping website with extremly
              good customer service and vast amount of DESI products at your
              door.
            </p>
            <h3>
              An individual project which is only created by me in 4 days.
            </h3>
            <p>
              <h3>Tech Stack:</h3>RractJS | HTML | JavaScript
            </p>
            <div className="pro-btns">
              <h1 className="logo-link">
                <a
                  href="https://github.com/Abhra11/fluent-pear-2487"
                  className="logo-link2"
                >
                  <TfiGithub />
                  <p>Github</p>
                </a>
              </h1>
              <h1 className="logo-link">
                <a
                  href="https://fluent-pear-2487-rct101.netlify.app/"
                  className="logo-link2"
                >
                  <SiNetlify />
                  <p>Netlify</p>
                </a>
              </h1>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={BlueFly} alt="Error 404 not found" />
          <h2 className="project-title">BlueFly CLONE</h2>
          <div className="pro-details">
            <p>
              With 3000+ brands, Bluefly is the online shopping destination for
              the style obsessed, shop designer styles from Prada, Gucci, Dior,
              Valentino up to 70% off.
            </p>
            <h3>
              A collaborative project, built in 4 days by a team of 5
              developers.
            </h3>
            <p>
              <h3>Tech Stack:</h3>HTML | JavaScript | CSS
            </p>

            <div className="pro-btns">
              <h1 className="logo-link">
                <a
                  href="https://github.com/hurmitg/bluefly"
                  className="logo-link2"
                >
                  <TfiGithub />
                  <p>Github</p>
                </a>
              </h1>
              <h1 className="logo-link">
                <a
                  href="https://meek-meringue-316eae.netlify.app"
                  className="logo-link2"
                >
                  <SiNetlify />
                  <p>Netlify</p>
                </a>
              </h1>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={SHINE} alt="Error 404 not found" />
          <h2 className="project-title">SHINE CLONE</h2>
          <div className="pro-details">
            <p>
              Shine.com is India's Leading Online Job and Recruitment Portal -
              Search & Apply for Latest Job Vacancies across Top Companies in
              India.
            </p>
            <h3>
              A collaborative project, built in 4 days by a team of 5
              developers.
            </h3>
            <p>
              <h3>Tech Stack:</h3>HTML | JavaScript | CSS
            </p>

            <div className="pro-btns">
              <h1 className="logo-link">
                <a
                  href="https://github.com/Abhra11/easy-bell-6862"
                  className="logo-link2"
                >
                  <TfiGithub />
                  <p>Github</p>
                </a>
              </h1>
              <h1 className="logo-link">
                <a
                  href="https://polite-sable-abc7a6.netlify.app"
                  className="logo-link2"
                >
                  <SiNetlify />
                  <p>Netlify</p>
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
