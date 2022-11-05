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
              <p>123 House</p>
              <p>West Bengal</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              8768525491
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              abhra001597@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>Something something and Something</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
            quisquam fugit, quasi pariatur eligendi ea porro error? Minus nisi,
            facere necessitatibus magni vero accusamus velit placeat totam
            obcaecati magnam tempore?
          </p>
          <div className="social">
            <FaFacebook
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaGithub
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
