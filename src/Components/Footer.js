import "./Footer.css";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Kolkata</p>
              <p>West Bengal</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91-8768525491
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>© 2022 Abhra. Designed and created by Me</h4>
          <p>
            A programming language is for thinking about programs, not for
            expressing programs you've already thought of. It should be a
            pencil, not a pen. - Paul Graham
          </p>
          <div className="social">
            <a href="https://www.facebook.com/abhra.mondal.52/">
              <FaFacebook
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>

            <a href="https://www.linkedin.com/in/abhra-mondal/">
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="https://github.com/Abhra11">
              {" "}
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
