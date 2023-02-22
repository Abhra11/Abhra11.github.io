import DownloadIcon from "@mui/icons-material/Download";
import React, { useEffect } from "react";
import styled from "styled-components";
import { ImDownload } from "react-icons/im";
import Resume from "../assets/Abhra_Mondal_Resume.pdf";
import Typical from "react-typical";
// import myImage from "../Resources/Images/profilePic.jpeg";
// import backgroundImage from "../assets/bg.jpg";

// import Typical from "react-typical";
import Aos from "aos";
import "aos/dist/aos.css";
// import Resume from '../Resources/Files/Mohit_Sharma_Resume.pdf';
// import { saveAs } from 'file-saver';
const Me = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1edyUIAW9WbLsvrXPpkfvzZHYMsRZSITI/view?usp=sharing"
    );
  };

  return (
    <div id="about">
      <AboutMeWrapper data-aos="fade-right">
        <div className="aboutSection">
          <div className="left">
            <h3>Personal Details</h3>
            <p></p>
            <p>
              Email: <span>abhra001597@gmail.com</span>
            </p>
            <p>
              Language: <span>English</span>
            </p>
            <p>
              Nationality: <span>Indian</span>
            </p>
          </div>
          <div className="right">
            <h2>
              I am a <span>MERN Stack Developer</span>
            </h2>

            <p>
              My name is Abhra Mondal, I am from West Bengal. Well-educated with
              backend MERN and frontend development requirements with the
              ability to learn and collaborate in rapidly changing environments
              and compositions. Worked through 1200+ hours of bootcamp structure
              learning in JavaScript, Node.Js, React.Js, MongoDB, Express,
              HTML5, and CSS3.
            </p>
            <a href={Resume} download onClick={handleClick}>
              <h1>
                <button
                  style={{
                    backgroundColor: "#098b55",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  <ImDownload />
                  Download
                </button>
              </h1>
            </a>
            {/* <div>
                            <img src={signature} alt='Mohit_Signature' width='200px' />
                        </div> */}
          </div>
        </div>
      </AboutMeWrapper>
    </div>
  );
};

const AboutMeWrapper = styled.div`
  width: 100%;
  margin-top: -50px;

  .aboutSection {
    width: 80%;
    margin: auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: black;
    display: flex;
    justify-content: center;
    padding: 20px;
    border-radius: 10px;
    gap: 10px;
    border: 1px solid #098b55;

    // border: 2px solid black
  }
  .typical {
    // border:1px solid black;
    width: 100%;
    margin-top: -1.7rem;
    margin-left: 2.7rem;
    text-transform: small-caps;
  }
  .left {
    width: 30%;
    text-align: left;
    background-color: black;
    padding: 5px 15px 5px 15px;
    border-radius: 10px;
  }
  .left > p {
    font-size: small;
    font-weight: bold;
  }
  .left > p > span {
    color: #707070;
  }
  .left > h3 + p {
    margin-top: 0px;
    border-top: 1.5px dashed #d4dae1;
  }
  .right {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 10px 0px 10px;
    background-color: black;
  }
  .right > h2 {
    width: 100%;
    margin-bottom: 0px;
    font-size: 20px;
    text-align: left;
  }
  .right > h2 > span {
    color: teal;
  }
  .right > p {
    text-align: left;
    margin-top: 5px;
  }
  .right > div {
    display: flex;
    align-items: flex-start;
    overflow: hidden;
    margin-top: -10px;
  }
  .right > div > img {
    margin-left: -35px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1110px) {
    .left {
      width: 35%;
    }
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    margin-top: 20px;
    .aboutSection {
      flex-direction: column;
      align-items: center;
      // border:1px solid blue;
      margin-top: 7rem;
    }
    .left {
      width: 90%;
    }
    .right {
      width: 90%;
    }
    .right > p {
      font-size: 14px;
    }
    .typical {
      //  border:1px solid black;
      width: 100%;
      margin-top: -1.7rem;
      margin-left: 2.7rem;
      text-transform: small-caps;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    margin-top: 20px;
    .aboutSection {
      flex-direction: column;
      align-items: center;
      margin-top: 3rem;
    }
    .left {
      width: 90%;
    }
    .right {
      width: 90%;
    }
    .right > h2 {
      font-size: 17px;
    }
    .right > p {
      font-size: 15px;
    }
    .typical {
      //  border:1px solid black;
      width: 100%;
      margin-top: -1.4rem;
      margin-left: 2.7rem;
      text-transform: small-caps;
    }
  }
  @media only screen and (max-width: 320px) {
    margin-top: 20px;
    .aboutSection {
      flex-direction: column;
      align-items: center;
      margin-top: 4rem;
      backgroundcolor: black;
    }
    .left {
      width: 90%;
    }
    .right {
      width: 90%;
    }
    .right > h2 {
      font-size: 16px;
    }
    .right > p {
      font-size: 13px;
    }
    .typical {
      //  border:1px solid black;
      width: 100%;
      margin-top: -1.7rem;
      margin-left: 2.7rem;
      text-transform: small-caps;
    }
  }
`;
export default Me;
