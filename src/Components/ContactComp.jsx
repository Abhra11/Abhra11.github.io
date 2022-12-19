import React from "react";
import "./ContactComp.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp, BsGithub } from "react-icons/bs";

import { SiLinkedin } from "react-icons/si";

const ContactComp = () => {
  return (
    <section id="contact">
      <h1 style={{ textAlign: "center" }}>CONTACT ME</h1>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <a href="https://www.linkedin.com/in/abhra-mondal/">
              <SiLinkedin className="contact__option-icon" />
              <h4>LinkedIn</h4>
            </a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>abhra001597@gmail.com</h5>
            <a href="mailto:abhra001597@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
        </div>

        <div className="contact__options">
          <article className="contact__option">
            <a href="https://github.com/Abhra11">
              <BsGithub className="contact__option-icon" />
              <h4>GitHub</h4>
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Contact</h4>
            <h5>+91-8768525491</h5>
            <a href="https://www.whatsapp.com" target="_blank">
              Send a message
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ContactComp;
