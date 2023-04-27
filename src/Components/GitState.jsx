import React, { useEffect } from "react";
import styled from "styled-components";
import GithubCalendar from "react-github-calendar";
import Aos from "aos";
import "aos/dist/aos.css";
import "./GitStats.css";
const GitState = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div style={{ marginTop: "-20px" }} data-aos="zoom-in-down">
      <h1
        style={{
          color: "#098b55 ",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        Days I Worked
      </h1>
      <Container>
        <GithubCalendar
          username="Abhra11"
          year={new Date().getFullYear()}
          blockSize={15}
          blockMargin={5}
          fontSize={16}
        />
      </Container>

      <h1
        style={{
          color: "#098b55 ",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        my Git_State
      </h1>
      <Container style={{ gap: "30px" }} className="container">
        <img
          src="https://github-readme-streak-stats.herokuapp.com?user=Abhra11"
          alt=""
        />
        <div className="statsImg2" style={{ display: "flex", gap: "30px" }}>
          <img
            src="https://github-readme-stats.vercel.app/api?username=Abhra11"
            alt=""
            className="stats"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Abhra11"
            alt=""
            className="stats2"
          />
        </div>
      </Container>
    </div>
  );
};

const Container = styled.div`
  margin: auto;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  flex-direction: column;
  border: 4px solid teal;
  border-radius: 10px 10px 10px 10px;
  padding: 30px 0px 30px 0px;
`;

// const MainContainer = styled.div`
//   @media (max-width: 50em) {
//     width: "20%";
//   }
// `;

export default GitState;
